import {index,show,create,addProduct}from '../../handlers/orders'
import { Router } from 'express'
import authorizedUser from '../../middleware/userAuthnticat'

const orderRouter=Router()
orderRouter
.get('/',authorizedUser,index)
.post('/',authorizedUser,create)
.get('/:id',authorizedUser,show)
.post('/:id/product', authorizedUser,addProduct)
export default orderRouter