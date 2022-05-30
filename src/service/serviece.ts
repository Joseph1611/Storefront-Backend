import Client from "../database";
export type Dashboard={
name:string,
price:number,
quanitiy:number
}
export  class DashboardStore{
    async orderedProducts():Promise<Dashboard[]>{
        try {
            const conn=await Client.connect()
            const sql='SELECT name ,price,quantity FROM products INNER JOIN orders_products ON products.id=orders_products.product_id'
       
       const result =await conn.query(sql)
       conn.release()
       return result.rows
        }catch(err){throw new Error(`Cannot Get Popular Products ${err}`);} 
    }
}