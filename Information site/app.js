const http = require('http')
const fs = require('fs')
const url = require('url')

// Port
const port = 3000

http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    console.log(q)
    const fileName = q.pathname !== '/' ? 'views' + q.pathname + '.html' : 'views/index.html'
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            })
            fs.readFile('views/404.html', (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    res.write(data)
                    res.end()
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        }
    })
}).listen(port, () => console.log(`App listening on port ${port}`))