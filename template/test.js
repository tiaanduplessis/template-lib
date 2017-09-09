const <%= this.camelcase(name) %> = require('./')

test('should be defined', () => {
  expect(<%= this.camelcase(name) %>).toBeDefined()
})
