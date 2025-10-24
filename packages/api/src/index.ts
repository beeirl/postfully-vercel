import { Hono } from 'hono'

const app = new Hono()
  .get('/', (c) => {
    return c.text('Hello Hono!')
  })
  .get('/test', (c) => {
    return c.text('Test')
  })

export default app
