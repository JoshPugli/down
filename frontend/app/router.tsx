// app/router.tsx
// File that will dictate the behavior of TanStack Router used within Start
// Here, you can configure everything from the default preloading functionality to caching staleness.
// https://tanstack.com/router/latest/docs/framework/react/guide/preloading
// https://tanstack.com/router/latest/docs/framework/react/guide/data-loading 
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}