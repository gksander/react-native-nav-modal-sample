const fs = require("fs");
const path = require("path");

const styles = require("../styles.json");

const generateClassTypes = () => {
  const output = `export type TwClass = ${Object.keys(styles)
    .map((c) => `"${c}"`)
    .join(" | ")}`;
  fs.writeFile(path.join(__dirname, "../tw-class-string.ts"), output, () => {
    process.exit();
  });
};

generateClassTypes();
