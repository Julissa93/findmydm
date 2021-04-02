import path from 'path'
import express, {Application, Request, Response, NextFunction} from 'express'
import morgan from 'morgan'
const PORT = process.env.PORT || 8080
const app: Application = express()
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req: Request, res: Response, next: NextFunction) => {
    if (path.extname(req.path).length) {
      const err: Error = new Error('Not found')
      res.status(404)
      next(err)
    } else {
      next()
    }
})

// sends index.html
app.use('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// error handling endware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const startListening = () => {
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () =>
        console.log(`Mixing it up on port ${PORT}`)
    )
}

startListening()