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
console.log("Nina-specific UI overrides applied and verified.");
