import express from 'express'
import people from './people/controller'
import moogle from './moogle/controller'
import chocobo from './chocobo/controller'
import creature from './creatures/controller'

const router = express.Router()

router.use('/people', people)
router.use('/moogle', moogle)
router.use('/chocobo', chocobo)
router.use('/creature', creature)

export default router