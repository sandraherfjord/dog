"use client";

import { useState } from "react";

export default function OnboardingPage() {
  const [name, setName] = useState("");
  const [weightKg, setWeightKg] = useState("");

  const weight = parseFloat(weightKg);
  const rer = weight > 0 ? 70 * Math.pow(weight, 0.75) : 0;

  return (
    <main className="p-4 space-y-4">
      <form className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            className="border px-2 py-1 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="weight">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            className="border px-2 py-1 w-full"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
          />
        </div>
      </form>
      {weightKg && (
        <p className="mt-4">RER: {rer.toFixed(2)}</p>
      )}
    </main>
  );
}
