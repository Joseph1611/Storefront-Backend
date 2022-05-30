import supertest from "supertest";
import app from '../../../server'
const request=supertest(app)
describe('order-end-point',()=>{
const userInfo={
    first_name:'youssef',
    last_name:'nour',
    password:'be-paient'
}
const productInfo={
    name:'chiken',
    price:20
}
let token:string
let uid:string
let pid:string
let oid:string



beforeAll(async()=>{
    const res=await request .post('/users').send(userInfo)
    token=res.body.token
    uid=res.body.id
    const res2=await request .post('/products').set('Authorization', 'Bearer ' + token).send(productInfo)
pid=res.body.id
})
it('create_order_by_user',async()=>{
    const res=await request .post('/orders').set('Authorization', 'Bearer ' + token).send({status:'prp',user_id:uid})
    oid=res.body.id
    expect(res.status).toBe(200)
})
it('get_all_ordrs_by_user',async()=>{
    const res=await request.get('/orders').set('Authorization', 'Bearer ' + token).send({user_id:uid})
    expect(res.status).toBe(200)
})
it('get_specific_order_by_user_id',async()=>{
    const res=await request.get(`/orders/${oid}`).set('Authorization', 'Bearer ' + token).send({user_id:uid})
    expect(res.status).toBe(200)
})
it('add_Product_to_order',async()=>{
    const res = await request
    .post(`/orders/${oid}/product`)
    .set('Authorization', 'Bearer ' + token)
    .send({ quantity: 10, product_id: pid, user_id: uid });
expect(res.status).toBe(200);
});
})