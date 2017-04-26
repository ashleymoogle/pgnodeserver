import express from 'express'
import people from './peeps'

const router = express.Router()

router.use('/people', people)

export default router