
import { Products,  ProductsStore } from "../../models/products";
const products=new ProductsStore()
let id:string
describe('ProductsModel',()=>{
    
it('cheak the index methode', async() => {
 
    expect( products.index).toBeDefined();
 
            });
            it('cheak the the show methode',()=>{
              expect(products.show).toBeDefined()

            })
            it('cheak the create methode',()=>{
                expect(products.create).toBeDefined()
            })
            it('cheak the Delete mehtode',()=>{
                expect(products.Delete).toBeDefined()
            })
    
//test the created produncts 
//make an object hte same time and put into the mothode of creation
it('create product',async()=>{
    const createdP:Products={
        name:'chiken',
        price:20
    }
    const result=await products.create(createdP);
 
    id= await result.id as string
  console.log(id)
  
    expect(result).toEqual({
        id:id,
        name:'chiken',
        price:20
    })

})
it('show the produncts',async()=>{
    //what i need to do now 
    //write the test that show the produnct 
    const result= await products.show(id)
    //@ts-ignore
    expect(result).toEqual({id:id,name:'chiken',price:20 })


})
it('delet the produnct',async()=>{
    const result=await products.Delete(id)
    //@ts-ignore
    expect(result).toEqual({id:id,name:'chiken',price:20})
})

})
