/* ──────────────────────────────────────────────────────────
►►► gulp/config
────────────────────────────────────────────────────────── */
const argv = require('yargs').argv
/* ─────────────────────────────────────────────────────── */
const package = require('../../package.json')
/* ─────────────────────────────────────────────────────── */

// ► Configuration
module.exports = {
  name: package.name,
  version: package.version,
  env: {
    isDev: argv.env === 'dev',
    isProd: argv.env === 'prod'
  },
  src: './project/theme/sources',
  dist: './public/assets',
  sprite: {
    dist: './project/theme/snippets/includes',
    name: 'sprite.twig',
    mode: {
      symbol: {
        sprite: 'symbols',
        inline: true
      }
    },
    svg: {
      rootAttributes: {
        'aria-hidden': 'true',
        'focusable': 'false'
      }
    },
    shape: {
      id: {
        generator: n => `icon-${n.slice(0, -4)}`
      }
    }
  },
  twig: [
    './project/theme/snippets',
    './project/theme/views'
  ]
}
