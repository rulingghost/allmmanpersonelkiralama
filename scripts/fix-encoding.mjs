import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const turkce = "T\u00FCrk\u00E7e";

const trButton = `<button class="lang-option" data-lang="tr">
              <img class="flag-icon" src="https://flagcdn.com/w20/tr.png" alt="${turkce}">
              ${turkce}
            </button>`;

const trButtonKarriere = `<button class="lang-option" data-lang="tr">
              <img class="flag-icon" src="https://flagcdn.com/w20/tr.png" alt="${turkce}"> ${turkce}
            </button>`;

const files = fs.readdirSync(root).filter((f) => f.endsWith(".html"));

for (const file of files) {
  const filePath = path.join(root, file);
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  content = content.replace(
    /<button class="lang-option" data-lang="tr">[\s\S]*?<\/button>/,
    file === "karriere.html" ? trButtonKarriere : trButton
  );

  if (content !== original) {
    fs.writeFileSync(filePath, Buffer.from(content, "utf8"));
    console.log("fixed:", file);
  }
}

const verify = fs.readFileSync(path.join(root, "index.html"));
const expected = Buffer.from(turkce, "utf8").toString("hex");
const ok = verify.includes(Buffer.from(turkce, "utf8"));
console.log(ok ? "VERIFY OK" : "VERIFY FAILED", expected);
