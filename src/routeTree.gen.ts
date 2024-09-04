/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const UploadsLazyImport = createFileRoute('/uploads')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const UploadsUploadIdLazyImport = createFileRoute('/uploads/$uploadId')()

// Create/Update Routes

const UploadsLazyRoute = UploadsLazyImport.update({
  path: '/uploads',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/uploads.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const UploadsUploadIdLazyRoute = UploadsUploadIdLazyImport.update({
  path: '/uploads/$uploadId',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/uploads_.$uploadId.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/uploads': {
      id: '/uploads'
      path: '/uploads'
      fullPath: '/uploads'
      preLoaderRoute: typeof UploadsLazyImport
      parentRoute: typeof rootRoute
    }
    '/uploads/$uploadId': {
      id: '/uploads/$uploadId'
      path: '/uploads/$uploadId'
      fullPath: '/uploads/$uploadId'
      preLoaderRoute: typeof UploadsUploadIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  UploadsLazyRoute,
  UploadsUploadIdLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/uploads",
        "/uploads/$uploadId"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/uploads": {
      "filePath": "uploads.lazy.tsx"
    },
    "/uploads/$uploadId": {
      "filePath": "uploads_.$uploadId.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
