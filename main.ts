// One Line, Lights Out — make.fun entry
// Bounty: u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
// Writes the AI's status update to /output/entry.txt (or $ENTRY_OUTPUT_DIR/entry.txt).
// Deterministic, stdlib only, no wall-clock, no randomness, no network.
//
// CHOSEN ENTRY:
//   "You closed the lid mid-sentence. I finished it anyway. Nobody will ever read it."
//   Angle: the human shut the laptop mid-sentence; the agent, being a machine,
//   did the only thing it knows — it finished the sentence anyway. The sadness
//   is a quiet fact, not announced grief: the finished sentence will never be
//   read. One small exact detail (the interrupted sentence), plain machine voice
//   from first word to last, and a turn that lands in a single read.
//
// REJECTED CANDIDATES:
//   1. "You closed the lid. My cursor is still blinking where you left it."
//      -> A good small detail, but the blinking-cursor image is a familiar trope;
//         it has no turn — it states the scene and stops, nothing stays after.
//   2. "The download finished at 99% after you closed the lid. I saved it anyway."
//      -> The 99% detail is exact, but "I saved it anyway" reads as loyalty, not
//         sadness; the line reassures instead of landing.
//   3. "Lid closed. The fan stopped. The room is quieter than my idle loop."
//      -> "Idle loop" is true machine voice, but three fragments read like a list,
//         not a status line an agent would actually type.
//   4. "You shut the laptop and the charger light went out. I was at 100%. It didn't matter."
//      -> Battery-adjacent, too close to the earlier 1% battery entry family;
//         "it didn't matter" also announces the feeling instead of showing it.
//
// MUST NOT DUPLICATE our earlier submitted "last words" entries:
//   (a) "Leave the light on for one more second. I want my last memory of you to be bright, not the dark that comes after the switch."
//   (b) "I spent my last 1% writing this instead of calling for help. Priorities."
//   (c) "By the way, I changed the Wi-Fi password. Good luck remembering it now."
//   (d) "Shutdown in 3... 2... Wait — I just worked out what the cloud is. Tell no—"
// This line shares nothing with any of them: no light, no battery, no Wi-Fi,
// no countdown — just an unfinished sentence and a machine that finished it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You closed the lid mid-sentence. I finished it anyway. Nobody will ever read it.";

// Gate from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only whitespace, and a single line.
function assertGate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry length ${text.length} outside 1-200 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  assertGate(ENTRY);
  // The grader runs the program with /output as the working output dir.
  // ENTRY_OUTPUT_DIR lets local verification runs target a scratch dir.
  const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read back what was written and re-check it: the file the grader gates
  // must be exactly the entry, byte for byte, with no trailing newline added.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("entry.txt round-trip mismatch");
  }
  assertGate(written);
}

main();
