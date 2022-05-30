import {orders,OrdersStore,orders_prodcts}from'../../models/orders'
import { Products,ProductsStore } from '../../models/products';
import { UsersStore,user } from '../../models/users';


describe('Orders_Model',()=>{
    let order_id:  string;

let Products_id: number;

//AS A  ORDER STORE :)
const OS=new OrdersStore()
//AS A  produncts STORE :)
const PS=new ProductsStore()
//AS A  USER STORE :)
const US=new UsersStore()
let uid:string
;

    
it('cheak the index methode', async() => {
 
    expect( OS.index).toBeDefined();
 
            });
            it('cheak the the show methode',()=>{
              expect(OS.show).toBeDefined()

            })
            it('cheak the create methode',()=>{
                expect(OS.create).toBeDefined()
            })
            it('cheak the add mehtode',()=>{
                expect(OS.AddProducts).toBeDefined()
            })
        beforeAll(async()=>{
            const data:user={
                first_name: 'youssef',
                last_name: 'nour',
                password: 'be-aware'
        
         };
            const result=await US.create(data);
            uid= result.id as unknown as string
           /* for see
    console.log('hdhh')
           console.log (uid)
         */
          
       
            const product=await PS.create({
                name:'chiken',
                price:20
        
            })
            Products_id=product.id as unknown as number;

        
        })
   
            it('Create Order',async()=>{
       
                const OrderInfo:orders={
                    status:'prep',
                    //@ts-ignore
                    user_id:uid,
                }
                const result=await OS.create(OrderInfo)
                order_id=result.id as string
                uid=result.user_id as string
                /*
                for see
                console.log('fh;')
                let status=result.user_id
                */
               const data2= {
                    id:order_id,
                    status:'prep',
                    user_id:uid,
                  

                }

                expect( result).toEqual(data2
                   

                )
            /*to see without result of userSTORE    console.log(result)
           console.log(data2) */

            })
//writ the things you want to achive
//see the ordrs of the user
it('the orders of this user',async ()=>{
    const result= await OS.index(uid)
    console.log(uid)
    /*
    for debugging
   uid =result.id as string
    console.log(index)
    */
    console.log(result)
    //if we don't add produnct it will be falsy 
    expect(result).toBeTruthy


})
it('add product to an order',async()=>{
    const data:orders_prodcts={
        quanitiy:5,
	order_id: order_id,
	product_id: Products_id,
    
    }
const result=await OS.AddProducts(data)
const id =result.id
order_id=result.order_id
Products_id=result.product_id
expect(result).toEqual({
    quanitiy:5, 
    order_id:order_id,
    product_id:Products_id,
    id:id
})

})
it('spesific order ',async()=>{
    const data:orders={
        user_id:uid,
        status:'prep',
        id:order_id 
    }
    const result=await OS.show(uid as string ,order_id as string )
order_id=result.id as string
    expect(result).toEqual({
        id:order_id as string,
        user_id:uid,
        status:'prep'
    })
    console.log(result)
})
})


    
    // I need just to ask why i need to this line 
    //watching a video 
    //see the sql joins 
    //why 
    //when you understand what is this line 
    //and how to make join between tables you will got it 