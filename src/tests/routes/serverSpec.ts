import supertest from "supertest";
import app from '../../server'
const request=supertest(app)

describe('Test Responses of Api',()=>{
    it('Test Api',async()=>{
    const res=request .get('/')
    expect((await res).status).toBe(200)
    })
})