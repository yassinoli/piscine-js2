import http from 'http'
import { readFile, readdir } from 'node:fs/promises'

const port = 5000

const server = http.createServer(async (req, res) => {
  try {
    const name = req.url.slice(1) 
    const files = await readdir('guests')

    if (files.includes(name + '.json')) {
      const data = await readFile(`guests/${name}.json`, 'utf8')

      res.writeHead(200, {
        'Content-Type': 'application/json',
      })
      res.end(data)
    } else {
      res.writeHead(404, {
        'Content-Type': 'application/json',
      })
      res.end(
        JSON.stringify({
          error: 'guest not found',
        }),
      )
    }
  } catch (err) {
    res.writeHead(500, {
      'Content-Type': 'application/json',
    })
    res.end(
      JSON.stringify({
        error: 'server failed',
      }),
    )
  }
})

server.listen(port, () => {
  console.log('server start at port', port)
})
