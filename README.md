## Steps to reproduce the error:

1. Git clone repo
2. `npm install`
3. Create a local sqlite database using `npx prisma migrate dev --name init`
4. run the development server `npm run dev`
5. Try create a post
6. By default, i made it to throw error.

So the errors come as:

```log
  PrismaClientValidationError {
    name: 'PrismaClientValidationError',
    clientVersion: '5.9.1',
    stack: 'PrismaClientValidationError: \n' +
      'Invalid `prisma.post.create()` invocation:\n' +
      '\n' +
      '{\n' +
      '  data: {\n' +
      '+   title: String\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'Argument `title` is missing.\n' +
      '    at ri (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:119:5888)\n' +
      '    at ai.handleRequestError (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:126:6431)\n' +
      '    at ai.handleAndLogRequestError (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:126:6109)\n' +
      '    at ai.request (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:126:5817)\n' +
      '    at async l (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:131:9709)\n' +
      '    at async POST (webpack-internal:///(rsc)/./src/app/api/create/route.ts:16:9)\n' +
      '    at async D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:63809\n' +
      '    at async eU.execute (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:53964)\n' +
      '    at async eU.handle (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:65062)\n' +
      '    at async doRender (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1333:42)\n' +
      '    at async cacheEntry.responseCache.get.routeKind (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1555:28)\n' +
      '    at async DevServer.renderToResponseWithComponentsImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1463:28)\n' +
      '    at async DevServer.renderPageComponent (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1856:24)\n' +
      '    at async DevServer.renderToResponseImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1894:32)\n' +
      '    at async DevServer.pipeImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:911:25)\n' +
      '    at async NextNodeServer.handleCatchallRenderRequest (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\next-server.js:271:17)\n' +
      '    at async DevServer.handleRequestImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:807:17)\n' +
      '    at async D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\dev\next-dev-server.js:331:20\n' +
      '    at async Span.traceAsyncFn (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\trace\trace.js:151:20)\n' +
      '    at async DevServer.handleRequest (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\dev\next-dev-server.js:328:24)\n' +
      '    at async invokeRender (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\lib\router-server.js:163:21)\n' +
      '    at async handleRequest (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\lib\router-server.js:342:24)\n' +
      '    at async requestHandlerImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\lib\router-server.js:366:13)\n' +
      '    at async Server.requestListener (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\lib\start-server.js:140:13)',
    message: '\n' +
      'Invalid `prisma.post.create()` invocation:\n' +
      '\n' +
      '{\n' +
      '  data: {\n' +
      '+   title: String\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'Argument `title` is missing.'
  }
```

where you can see the the message field is just a cut down version of stack trace. So my suggestion is display/throw only the exact message as:

```log
  PrismaClientValidationError {
    name: 'PrismaClientValidationError',
    clientVersion: '5.9.1',
    message: 'Argument `title` is missing.',
    stack: 'PrismaClientValidationError: \n' +
      'Invalid `prisma.post.create()` invocation:\n' +
      '\n' +
      '{\n' +
      '  data: {\n' +
      '+   title: String\n' +
      '  }\n' +
      '}\n' +
      '\n' +
      'Argument `title` is missing.\n' +
      '    at ri (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:119:5888)\n' +
      '    at ai.handleRequestError (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:126:6431)\n' +
      '    at ai.handleAndLogRequestError (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:126:6109)\n' +
      '    at ai.request (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:126:5817)\n' +
      '    at async l (D:\Programming\Web Projects\prisma-errors\node_modules\@prisma\client\runtime\library.js:131:9709)\n' +
      '    at async POST (webpack-internal:///(rsc)/./src/app/api/create/route.ts:16:9)\n' +
      '    at async D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:63809\n' +
      '    at async eU.execute (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:53964)\n' +
      '    at async eU.handle (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\compiled\next-server\app-route.runtime.dev.js:6:65062)\n' +
      '    at async doRender (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1333:42)\n' +
      '    at async cacheEntry.responseCache.get.routeKind (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1555:28)\n' +
      '    at async DevServer.renderToResponseWithComponentsImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1463:28)\n' +
      '    at async DevServer.renderPageComponent (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1856:24)\n' +
      '    at async DevServer.renderToResponseImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:1894:32)\n' +
      '    at async DevServer.pipeImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:911:25)\n' +
      '    at async NextNodeServer.handleCatchallRenderRequest (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\next-server.js:271:17)\n' +
      '    at async DevServer.handleRequestImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\base-server.js:807:17)\n' +
      '    at async D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\dev\next-dev-server.js:331:20\n' +
      '    at async Span.traceAsyncFn (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\trace\trace.js:151:20)\n' +
      '    at async DevServer.handleRequest (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\dev\next-dev-server.js:328:24)\n' +
      '    at async invokeRender (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\lib\router-server.js:163:21)\n' +
      '    at async handleRequest (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\lib\router-server.js:342:24)\n' +
      '    at async requestHandlerImpl (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\lib\router-server.js:366:13)\n' +
      '    at async Server.requestListener (D:\Programming\Web Projects\prisma-errors\node_modules\next\dist\server\lib\start-server.js:140:13)'

  }
```

here we can see that we really dont need to repeat first half of the stack trace and the message property can be easily used to convey whats the error and what could be the potential fix.
