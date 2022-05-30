
import Client from'../database'

export type Products = {
    id?:string,
    price:number,
    name:string
}
export class  ProductsStore {
    static create(arg0: { name: string; price: number }) {
        throw new Error('Method not implemented.')
    }
    async index():Promise<[Products]>{
        const sql='Select id, price, name FROM products'
        const conn=await Client.connect()
        const result=await conn.query(sql)
        conn.release()
        return result.rows[0]
    }
    async show(id:string):Promise<[Products]>{
const conn =await Client.connect()
//cheak the syntax please
const  sql= 'select price, name, id from products where id =$1'
const resutl=await conn.query(sql,[id])
conn.release()



        return resutl.rows[0];
    }
   
        async create(p:Products):Promise<Products>{
              const conn= await Client.connect()
              //cheak the syntax if the error appere 
              const sql='INSERT INTO products (name, price) values($1,$2) RETURNING id,name,price'
              const result = await conn.query(sql,[p.name,p.price,])
           conn.release()
           return result.rows[0]
    }
    async Delete(id:string):Promise<[Products]>{
        const conn=await Client.connect()
        const sql='delete  FROM products WHERE id=$1 RETURNING *'
        const result = await conn.query(sql,[id])
        conn.release()
        return result.rows[0]
    }

}