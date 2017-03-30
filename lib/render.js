const templates = {};

module.exports = {
  init() {
    const templatePath = require('path').resolve('./template.html');
    const rawTemplate = require('fs').readFileSync(templatePath, 'utf8');

    const dataSets = require('../data');

    function buildState(data) {
      return `<script>window.state = ${JSON.stringify(data)}</script>`;
    }

    function makeTemplate(key) {
      const state = buildState(dataSets[key] || '');
      const renderedTemplate = rawTemplate.replace('{{state}}', state);
      templates[key] = renderedTemplate;
    }

    Object.keys(dataSets).forEach(makeTemplate);
    makeTemplate(null);
  },

  get(name) {
    if (!name) return templates[null];
    return templates[name];
  }
}
