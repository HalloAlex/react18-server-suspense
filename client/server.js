import React from 'react'
import App from './App'

export default () => {
    return <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="favicon.ico" />
            <title>React18 Server Suspense</title>
        </head>
        <body>
            <div id="app">
                <App />
            </div>
            <script src='main.js'></script>
        </body>
    </html>
}