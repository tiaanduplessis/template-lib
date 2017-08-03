import <%= this.camelcase(name) %> from './'

test('should be defined', () => {
  expect(<%= this.camelcase(name) %>).toBeDefined()
})
