const fs = require('fs');
const http = require('http');
const React = require('react');
const { pipeToNodeWritable } = require('react-dom/server');

const ABORT_DELAY = 5000
const app = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            startPipeToNodeWritable(res);
            break;
    }
    
    if (/\.js$/.test(req.url)) {
        const asset = fs.readFileSync(`./dist/client${req.url}`);
        res.end(asset);
    }
})

function startPipeToNodeWritable (res) {
    let didError = false;
    const App = require('../dist/server/main.js').default;
    const { startWriting, abort } = pipeToNodeWritable(
        React.createElement(App, {
            assets: ['main.js']
        }),
        res,
        {
          onReadyToStream() {
            res.statusCode = didError ? 500 : 200;
            res.setHeader('Content-type', 'text/html');
            res.write('<!DOCTYPE html>');
            startWriting();
          },
          onError(x) {
            didError = true;
            console.error(x);
          },
        }
    );
    setTimeout(abort, ABORT_DELAY);
}

app.listen(3000, () => {
    console.log('app start at port 3000')
})