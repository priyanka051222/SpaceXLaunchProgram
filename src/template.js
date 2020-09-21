import serialize from 'serialize-javascript';

export default ({ body, title, initialState, finalState}) =>
  `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body> 
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(
            /</g,
            "\\u003c"
          )}

          
        </script>
      <script src="/assets/bundle.js"></script>
    </html>
  `;
