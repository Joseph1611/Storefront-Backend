import { Request,Response,NextFunction } from "express";
import {DashboardStore} from '../service/serviece'
const store=new DashboardStore()
export const orderedProducts=async(req:Request,res:Response)=>{
    try {
        const Products=await store.orderedProducts()
        res.json(Products)
    }catch(err){
res.send(err)
    }
}