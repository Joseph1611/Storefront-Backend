import {index,show,create,Delete}from'../../handlers/user'
import express from 'express'
import verifyAuthToken from '../../middleware/valdiate'
import authorizedUser from  '../../middleware/userAuthnticat'

const routesUsers=express()
routesUsers
.get('/',verifyAuthToken,index)
.post('/',create)
.get('/:id',verifyAuthToken,show)
.delete('/:id',verifyAuthToken,Delete)
export default routesUsers
