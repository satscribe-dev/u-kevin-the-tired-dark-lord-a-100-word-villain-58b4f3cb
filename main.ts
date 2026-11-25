// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes the chosen monologue to /output/entry.txt, deterministically.
// The entry is a fixed string: two runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Yes, yes, kneel. Everyone kneels. I've had forty years of kneeling, and " +
  "not once has anyone brought a cushion. You think I wanted the obsidian " +
  "throne? I wanted a cottage. A kettle, and a garden where nothing plots " +
  "against me. But no — prophecy this, chosen one that, and now here you " +
  "are, sword raised, and I have to do the voice. The voice! Do you know " +
  "what throat lozenges cost in the Ninth Circle? So go on. Strike. Just — " +
  "strike somewhere comfortable. I've been standing in this pose since dawn, " +
  "and my knees have filed a formal complaint.";

const words = ENTRY.split(/\s+/).length;
if (ENTRY.length < 1 || ENTRY.length > 600 || ENTRY.trim() === "" || words !== 100) {
  throw new Error(`gate check failed: ${ENTRY.length} chars, ${words} words`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars, ${ENTRY.split(/\s+/).length} words)`);
