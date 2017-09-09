const camelcase = require('camelcase')

module.exports = {
  templateOptions: {
    context: {
      camelcase
    }
  },
  prompts: {
    name: {
      message: 'Name?',
      default: ':folderName:'
    },
    description: {
      message: 'Description?'
    },
    username: {
      message: 'GitHub username?',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'email?',
      default: ':gitEmail:',
      store: true,
      validate: v => /.+@.+/.test(v)
    },
    website: {
      message: 'Website?',
      default (answers) {
        return `https://github.com/${answers.username}`
      },
      store: true
    },
    unitTest: {
      message: 'Unit tests?',
      type: 'confirm',
      default: true
    },
    compile: {
      message: 'Bundle?',
      type: 'confirm',
      default: false
    },
    cli: {
      message: 'Add CLI?',
      type: 'confirm',
      default: false,
      when: answers => !answers.compile
    }
  },
  filters: {
    'test/**': 'unitTest && compile',
    'src/**': 'compile',
    'index.js': '!compile',
    'test.js': 'unitTest && !compile',
    'cli.js': 'cli'
  },
  move: {
    'pkg.json': 'package.json',
    gitignore: '.gitignore',
    'travis.yml': '.travis.yml'
  },
  showTip: true,
  installDependencies: true,
  gitInit: true
}
