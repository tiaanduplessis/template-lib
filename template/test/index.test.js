<%_ if (compile) { -%>
import <%= this.camelcase(name) %> from '../src'
<%_ } else { -%>
const <%= this.camelcase(name) %> = require('../')
<%_ } -%>

test('should be defined', () => {
  expect(<%= this.camelcase(name) %>).toBeDefined()
})
