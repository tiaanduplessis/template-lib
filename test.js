/* eslint-env jest */
const sao = require('sao')

const template = {
  fromPath: process.cwd()
}

test('use defaults', () => {
  return sao.mockPrompt(template, {}).then(({ fileList }) => {
    expect(fileList).toEqual([
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.travis.yml',
      'LICENSE',
      'README.md',
      'index.js',
      'package.json',
      'test/index.test.js'
    ])
  })
})

test('add unit test', () => {
  return sao
    .mockPrompt(template, {
      unitTest: true
    })
    .then(({ fileList, files }) => {
      expect(fileList).toContain('test/index.test.js')

      const pkg = JSON.parse(files['package.json'].contents.toString())
      expect(pkg.scripts.test).toBe('jest')
      expect(pkg.devDependencies).toHaveProperty('jest')
    })
})
