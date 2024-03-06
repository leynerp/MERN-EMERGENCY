import express from 'express'

export default function initApp () {
  const app = express()
  app.listen(3000)
  console.log('listen ')
}
