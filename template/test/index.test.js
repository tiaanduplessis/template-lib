import <%= this.camelcase(name) %> from '../src'

test('should be defined', () => {
  expect(<%= this.camelcase(name) %>).toBeDefined()
})
