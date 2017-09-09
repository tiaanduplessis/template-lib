/* eslint-env jest */
const sao = require('sao')

const template = {
  fromPath: process.cwd()
}

test('use defaults', async () => {
  const { fileList } = await sao.mockPrompt(template, { email: 'test@user.com' })
  expect(fileList).toMatchSnapshot()
})

test('add unit test', () => {
  return sao
    .mockPrompt(template, {
      unitTest: true,
      email: 'test@user.com'
    })
    .then(({ fileList, files }) => {
      expect(fileList).toContain('test.js')

      const pkg = JSON.parse(files['package.json'].contents.toString())
      expect(pkg.scripts.test).toBe('jest')
      expect(pkg.devDependencies).toHaveProperty('jest')
    })
})
