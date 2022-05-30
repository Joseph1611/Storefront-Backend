import {index,show,create,Delete}from'../../handlers/produncts'
import express from'express'
import valdiate from '../../middleware/valdiate'
import authorizedUser from '../../middleware/userAuthnticat'
import verifyAuthToken from '../../middleware/valdiate'
const  routesProducts=express()
routesProducts
.get('/',index)
.get('/:id',show)
.post('/',verifyAuthToken,create)
.delete('/:id',verifyAuthToken,Delete)
export default routesProducts