import express from 'express'
import routerproduct from './product'

const router = express.Router()

router.use('/products', routerproduct)

export default router