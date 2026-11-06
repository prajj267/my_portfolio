// Crops, resizes and compresses the source photos into /public/photos.
// Usage: npm run photos   (then `npm run cards` to rebuild the player card)
// Source files live in /photos-src (ignored by git).
import sharp from "sharp";
import { mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const SRC = "photos-src";
const OUT = join("public", "photos");
mkdirSync(OUT, { recursive: true });

const jobs = [
  {
    // Blue kurta on stage: the player-card photo (card ratio 63:88)
    src: "player.jpeg",
    run: async (img) => {
      const card = img.clone().extract({ left: 0, top: 40, width: 610, height: 852 }).resize(630, 880);
      await card.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(join(OUT, "player.jpg"));
      await card.clone().grayscale().linear(1.12, -10).jpeg({ quality: 80, mozjpeg: true }).toFile(join(OUT, "player-bw.jpg"));
    },
  },
  {
    // Speaking at NSS KIIT: leadership section
    src: "stage.jpeg",
    run: (img) => img.resize({ width: 1200 }).webp({ quality: 76 }).toFile(join(OUT, "stage.webp")),
  },
  {
    // Suit portrait: contact section, cropped to face and torso (2:3)
    src: "portrait.jpeg",
    run: (img) =>
      img.extract({ left: 380, top: 470, width: 600, height: 900 }).resize(600, 900).webp({ quality: 78 }).toFile(join(OUT, "portrait.webp")),
  },
];

for (const job of jobs) {
  const path = join(SRC, job.src);
  if (!existsSync(path)) {
    console.log("skip (missing):", path);
    continue;
  }
  await job.run(sharp(path).rotate());
  console.log("done:", job.src);
}
