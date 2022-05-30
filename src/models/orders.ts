import Client from'../database'
export type orders ={
    id?: string;
	status?: string;
	user_id: string;

}
export type orders_prodcts={
    id?: string;
	quanitiy: number;
	order_id: string;
	product_id: number;
}
export class OrdersStore{
   async index(uid:string):Promise<orders[]>{
  try{const conn = await Client.connect()

    const sql='SELECT orders as order_staus,orders_products as order_quantinty from orders join orders_products ON orders.id=orders_products.order_id where user_id=($1)';
    const result=await conn.query(sql,[uid])
    conn.release()
   return result.rows[0]}catch(err){
        throw new Error(`the  is ${err}`);
    }
}
async show(id:string,uid:string):Promise<orders>{
    try{
        const conn=await Client.connect()
        const sql='select  * from orders where id = ($1)  and user_id = ($2)';
        const result= await conn.query(sql,[uid,id])
        conn.release()
        return result.rows[0]
    }catch(err){  throw new Error(`the error is ${err}`)}
}
async create(o:orders): Promise<orders> {
    try {
        const conn = await Client.connect();
        const sql =
            'INSERT INTO orders(status,user_id) VALUES ($1,$2) RETURNING  id, status, user_id';
        const result = await conn.query(sql, [o.status, o.user_id]);
        conn.release();
        return result.rows[0];
    } catch (err) {
        throw new Error(`Cannot Create Order ${err}`);
    }
}


async AddProducts(O_P:orders_prodcts):Promise<orders_prodcts>{
   try{ const conn=await Client.connect()
    const sql='INSERT INTO orders_products(quanitiy,order_id,product_id) VALUES ($1,$2,$3) RETURNING *'
    ;
    
const result= await conn.query(sql,[O_P.quanitiy,O_P.order_id,O_P.product_id])
return result.rows[0]


}catch(err){
        throw new Error(`the error is ${err}`)
    }

}
}

    
    //what is sql do 
    //see the example 
    //see the example of it 
    


