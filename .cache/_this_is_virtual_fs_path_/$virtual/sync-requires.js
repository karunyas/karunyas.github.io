
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Karunya/karunyas.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Karunya/karunyas.github.io/src/pages/404.js")),
  "component---src-pages-elements-js": preferDefault(require("/Users/Karunya/karunyas.github.io/src/pages/elements.js")),
  "component---src-pages-generic-js": preferDefault(require("/Users/Karunya/karunyas.github.io/src/pages/generic.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Karunya/karunyas.github.io/src/pages/index.js"))
}

