//import to all handlers 
import { Router} from "express";
import { Request,Response } from "express";
import routesUsers from "./users/userROUTES";
import routesProducts from "./products/produnctsROUTES";
import orderRouter from "./orders/ordersRoutes";
import dashboardRoute from "./dahboard/dahboard";
const route=Router()

route.get('/',(req:Request,res:Response)=>{
res.send('i will start now')
})

route.use('/users',routesUsers)
route.use('/products',routesProducts)
route.use('/orders',orderRouter)
route.use('/orderdProducts', dashboardRoute);
export default route