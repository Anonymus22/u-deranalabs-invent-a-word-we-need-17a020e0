import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one new word plus a short definition, within the 140-char limit.
// "Roomnesia" names the gap English leaves open: psychologists call the
// phenomenon the "doorway effect", but there is no single word for the
// experience itself — the reason for entering a room vanishing the moment
// you step through the doorway. Room (room) + -nesia (amnesia) fills it.
const ENTRY =
  "Roomnesia — forgetting why you entered a room the moment you step through the doorway.";

// The bounty caps the entry at 140 characters.
const MAX_CHARS = 140;

function validateEntry(entry: string): void {
  if (entry.length === 0 || entry.trim().length === 0) {
    throw new Error("entry is empty or only whitespace");
  }
  if (entry.length > MAX_CHARS) {
    throw new Error(
      `entry is ${entry.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
