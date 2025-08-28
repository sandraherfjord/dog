import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const prisma = new PrismaClient();

interface RequirementRow {
  nutrient: string;
  unit: string;
  min?: string;
  max?: string;
}

async function importStandard(name: string, filename: string) {
  const filePath = path.join(__dirname, 'data', filename);
  const content = readFileSync(filePath, 'utf8');
  const rows: RequirementRow[] = parse(content, { columns: true, skip_empty_lines: true });

  const standard = await prisma.nutrientStandard.upsert({
    where: { name },
    update: {},
    create: { name },
  });

  for (const row of rows) {
    await prisma.nutrientRequirement.upsert({
      where: {
        standardId_nutrient: {
          standardId: standard.id,
          nutrient: row.nutrient,
        },
      },
      update: {
        unit: row.unit,
        min: row.min ? Number(row.min) : null,
        max: row.max ? Number(row.max) : null,
      },
      create: {
        standardId: standard.id,
        nutrient: row.nutrient,
        unit: row.unit,
        min: row.min ? Number(row.min) : null,
        max: row.max ? Number(row.max) : null,
      },
    });
  }
}

async function main() {
  await importStandard('AAFCO 2014 Dogs', 'aafco_2014_dogs_complete.csv');
  await importStandard('FEDIAF 2024 Dogs', 'fediaf_2024_dogs_table_III_3b_full.csv');
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
