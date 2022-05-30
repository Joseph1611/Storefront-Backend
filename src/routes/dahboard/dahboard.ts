import { Router } from "express";
import { orderedProducts } from "../../handlers/dashboardHandler";
const dashboardRoute=Router()
dashboardRoute.get('/',orderedProducts)
export default dashboardRoute