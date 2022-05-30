import supertest from "supertest";
import app from '../../../server'
const request=supertest(app)
describe('Test-end-point-product',()=>{
    const productInfo={name:'chicken',
    price:20}
    const userInfo={first_name:'youssef',
last_name:'nour',
password:'be-painet'}
let token:string
let uid:string
let pid:string
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
beforeAll(async()=>{
    const res=await request .post('/users').send(userInfo)
    token=res.body.token
    console.log(token)
  uid=  res.body.id
  console.log(uid)
    
})
afterAll(async()=>{
    await request.delete(`/users/${uid}`)
    .set('Authorization', 'Bearer ' + token);
})
it('getAllproducts',async()=>{
    const res= await request  .get('/products')
    expect(res.status).toBe(200)
})
it('createProduct,andpid',async()=>{

    const res= await request .post('/products')   .set('Authorization', 'Bearer ' + token)  .send(productInfo)
    pid=res.body.id 
  
    expect(res.status).toBe(200)
    expect(res.body.id).toBe(pid)

})
it('getSpecificById',async()=>{
    const res=await request.get(`/products/${pid}`)
    pid=res.body.id
    expect(res.status).toBe(200)
    
    console.log(pid)
})
it('deleteProduct',async()=>{
    const res=await request .get(`/products/${pid}`)
    .set('Authorization','Bearer '+token) 
    expect(res.status).toBe(200)

})
})