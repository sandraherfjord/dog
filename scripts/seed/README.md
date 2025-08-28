# Seed

Import nutrient standards from CSV files into the database.

## Usage

1. Place CSV files in the `data/` directory.
2. Run the seed script:
   ```bash
   pnpm exec ts-node scripts/seed/seed.ts
   ```
   This will parse the CSVs and upsert records via Prisma.

Each CSV must include the columns `nutrient`, `unit`, `min`, and `max`.
