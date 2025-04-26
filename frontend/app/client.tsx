// Now we need a way to hydrate our client-side JavaScript once the route resolves to the client. 
// We do this by piping the same router information to our client entry point:

// Hydratoin is the process of taking the server-rendered HTML and attaching the client-side JavaScript to it.
// This allows the client-side application to take over and become interactive.

// app/client.tsx
/// <reference types="vinxi/types/client" />
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/react-start'
import { createRouter } from './router'

const router = createRouter()

hydrateRoot(document, <StartClient router={router} />)