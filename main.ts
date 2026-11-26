// One Star, Written in Sap — a one-line 1-star review from a houseplant
// about the human who owns it. Deterministic: one fixed line, no
// randomness, no network, no environment secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. He bought me a pot with no drainage holes, waters me like he's putting out a fire, then tells his friends I'm just 'hard to keep alive.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
