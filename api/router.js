import express from 'express'
import people from './people/controller'

const router = express.Router()

router.use('/people', people)

export default router