#!/usr/bin/env node

'use strict';
const express = require('express')
const path = require('path')
const app = express()
const port = 9527

app.use(express.static(
  path.resolve(__dirname, '../public'))
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('please open http://localhost:' + port + '/index.html')
})