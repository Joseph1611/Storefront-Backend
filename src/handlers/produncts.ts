import { Products,ProductsStore } from "../models/products";
import { Response, Request, response } from "express";
export const ProductsI=new ProductsStore()
 export const index=async(_req:Request,res:Response)=>{
try{
const allProducts=await ProductsI.index()
res.json(allProducts).status(200)
}catch(err){
    res.send(err).status(404)
}

}
export const show=async(req:Request,res:Response)=>{
    try{
         const    id=req.params.id
            
        
 const produnct= await ProductsI.show(id)
res.json(produnct).status(200)
    }catch(err){
        res.send(err).status(404)
    }
}
export const create=async(req:Request,res:Response)=>{
    //stand for produncts info :)
  try{ const PI:Products={
        name:req.body.name,
        price:req.body.price
    }

const product= await ProductsI.create(PI)
res.json(product).status(200)
}catch(err){
res.send(err).status(201)
    }


}
 export const Delete= async(req:Request,res:Response)=>{
   try{ const id=req.params.id

    const Deleted= await ProductsI.Delete(id)
    res.json(Deleted).status(200)
}catch(err){
res.send(err).status(404)
    }


}