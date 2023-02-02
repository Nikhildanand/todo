import { beforeAll, afterAll, afterEach } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import mockTodos from './fixtures/todos'
import "whatwg-fetch"

export const restHandlers = [
  rest.get("https://dummyjson.com/todos", (_, res, ctx) => res(ctx.status, ctx.json(mockTodos)))
]

const server = setupServer(...restHandlers)

console.log({ server })

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers( ))
