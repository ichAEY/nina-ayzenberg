import fs from "node:fs";

const componentPath = "app/mobile-claytone.tsx";
let source = fs.readFileSync(componentPath, "utf8");

source = source.replace(
  /<div className="mct-amenities-head"><p className="mct-section-kicker">Удобства для визита<\/p><span>Всё необходимое для спокойного посещения<\/span><\/div>/,
  '<div className="mct-amenities-head"><p className="mct-section-kicker">Сервис и возможности</p></div>',
);

source = source.replaceAll('aria-label="Удобства для визита в NINA"', 'aria-label="Сервис и возможности NINA"');

if (!source.includes("Сервис и возможности")) {
  throw new Error("Nina amenities heading override was not applied");
}

fs.writeFileSync(componentPath, source, "utf8");

const stylesPath = "app/globals.css";
let styles = fs.readFileSync(stylesPath, "utf8");
const marker = "/* Nina mobile about skills refinement */";
if (!styles.includes(marker)) {
  styles += `\n\n${marker}\n@media (max-width: 767px) {\n  .mct-about-list li {\n    color: #5b5551;\n    font-size: 10.75px;\n    font-weight: 500;\n    line-height: 1.42;\n    letter-spacing: -0.01em;\n    padding-top: 10px;\n  }\n}\n`;
}
fs.writeFileSync(stylesPath, styles, "utf8");

console.log("Nina-specific UI overrides applied and verified.");
