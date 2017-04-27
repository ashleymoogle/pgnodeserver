import express from 'express'
import people from './people/controller'
import moogle from './moogle/controller'
import chocobo from './chocobo/controller'

const router = express.Router()

router.use('/people', people)
router.use('/chocobo', chocobo)
router.use('/moogle', moogle)

export default router