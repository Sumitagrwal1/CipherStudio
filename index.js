const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Projects = require('./models/project')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cipherstudio'
mongoose.connect(MONGODB_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.error(e))

app.post('/api/projects', async (req, res) => {
  const { project } = req.body
  const doc = new Projects({ project })
  await doc.save()
  res.json({ projectId: doc._id })
})

app.get('/api/projects/:id', async (req, res) => {
  const doc = await Projects.findById(req.params.id)
  if (!doc) return res.status(404).send('Not found')
  res.json({ project: doc.project })
})

app.listen(process.env.PORT || 4000, ()=>console.log('Server running'))
