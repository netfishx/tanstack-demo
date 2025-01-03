/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TimeImport } from './routes/time'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TimeRoute = TimeImport.update({
  id: '/time',
  path: '/time',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/time': {
      id: '/time'
      path: '/time'
      fullPath: '/time'
      preLoaderRoute: typeof TimeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/time': typeof TimeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/time': typeof TimeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/time': typeof TimeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/time'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/time'
  id: '__root__' | '/' | '/time'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TimeRoute: typeof TimeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TimeRoute: TimeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/time"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/time": {
      "filePath": "time.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
