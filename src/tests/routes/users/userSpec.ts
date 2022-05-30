import supertest from "supertest";
import app from '../../../server'
const request=supertest(app)

describe('UserEndPoint',()=>{
const userInfo={first_name:'youssef',
last_name:'nour',
password:'be_paient',


};

let token:string
let id:string


beforeAll(async()=>{const res=await request.post('/users').send(userInfo)
token= res.body.token as string
id=res.body.id as string
console.log(id)})


it('get all users',async()=>{
    const res= await request
    .get('/users')
    .set('Authorization','Brare '+token)
    expect(res.status).toBe(200)
 
})
it('Show Specific User ', async () => {
  console.log(id)
    const res = await request
        .get(`/users/${id}`)
        .set('Authorization', 'Bearer ' + token);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(id)
  
});
//delet the user 
//async funcion 
//set authorization 
//expect to be 200 

it('should delet the user',async()=>{
    const res=await request .
    delete(`/users/${id}`)
    .set('Authorization', 'Bearr ' + token)
    expect (res.status).toBe(200)
})
          })

