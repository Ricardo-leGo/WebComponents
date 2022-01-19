const path = require("path");
const fse = require("fs-extra");
const glob = require("glob");

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "./dist");

const files = glob.sync("src/**").filter(f => f.match(/\.(?!jsx?)/));
files.forEach(f => {
  const old = f.replace("src/", "");
  const build = path.join(buildPath, old);
  fse.copy(f, build);
});

console.log(`${files.length} Archivos traducidos`);
