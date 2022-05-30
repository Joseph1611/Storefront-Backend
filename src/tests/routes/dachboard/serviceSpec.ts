import supertest from "supertest";
import app from '../../../server'
const request=supertest(app)
describe('requiredProducts',()=>{
    it('Get products',async()=>{
    
        const res=await request.get('/orderdProducts')
        expect(res.status).toBe(200)
      
    })
})