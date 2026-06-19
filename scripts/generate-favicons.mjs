import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public/images/shrim-logo-icon.png");

async function letterboxPng(size, output) {
  const meta = await sharp(source).metadata();
  const scale = Math.min(size / meta.width, size / meta.height);
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);
  const padTop = Math.floor((size - h) / 2);
  const padBottom = size - h - padTop;
  const padLeft = Math.floor((size - w) / 2);
  const padRight = size - w - padLeft;

  await sharp(source)
    .resize(w, h, { fit: "inside" })
    .extend({
      top: padTop,
      bottom: padBottom,
      left: padLeft,
      right: padRight,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(output);

  console.log(`Wrote ${output} (${size}x${size}, logo ${w}x${h})`);
}

await letterboxPng(512, path.join(root, "app/icon.png"));
await letterboxPng(180, path.join(root, "app/apple-icon.png"));
