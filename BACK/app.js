import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
export default function initApp () {
  const app = express() 
  //app.use(bodyParser) 
  app.use(morgan('dev')) 
  app.listen(3000)
  console.log('listen ')
}
