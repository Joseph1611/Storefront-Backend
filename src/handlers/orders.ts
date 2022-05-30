//i need to import all cllases 
//i need  to add res, and req 
import {orders,orders_prodcts,OrdersStore} from '../models/orders'
import { Response,Request } from 'express'
import { rmSync } from 'fs'
const OrderS=new OrdersStore
export const index=async(req:Request,res:Response) => {
   try{ const uid=req.body.user_id
    const result= await OrderS.index(uid)
    res.json(result).status(200)}catch(err){
        res.send(err).status(404)
    }

}
export const show=async(req:Request,res:Response)=>{
    try{
        const uid=req.body.user_id
        const id =req.body.params
        const result=await OrderS.show(uid,id)
        res.json(result).status(200)
    }catch(err){
        res.send(err).status(404)
    }
}


export const create=async(req:Request,res:Response)=>{
    try{
        const uid =req.body.user_id
        const data:orders={
            status:'prep',
            user_id:uid,
        }
        const Order=await OrderS.create(data)
        res.json(Order).status(200)
    }catch(err){
        res.send(err).status(404)
    }
}
export const addProduct=async(req:Request,res:Response)=>{
    try{const order:orders_prodcts={
quanitiy:req.body.quanitiy,
order_id:req.params.id,
product_id:req.body.id}
const add=await OrderS.AddProducts(order)
    
res.json(add).status(200)

    }catch(err){res.send(err).status(404)

    }
}