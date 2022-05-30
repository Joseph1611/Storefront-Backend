
import {user,UsersStore} from '../../models/users'
const store =new UsersStore()
let id:string

describe('userModel',()=>{
it('this end point shoul cheak the the existig of the methode',async()=>
{
    const result =await store.index()
   //  for cheking console.log(result)
expect(result).toBeDefined()})

it('User model should have show methode', () => {
    expect(store.show).toBeDefined();
});
it('user model should have create methode',()=>{
    expect(store.show).toBeDefined()
})
it('user should have delet mehtode ',()=>{
    expect(store.DELETE).toBeDefined()
        })

it('create user',async()=>{
    const data:user={
        first_name: 'youssef',
        last_name: 'nour',
        password: 'be-aware'

 };
    const result=await store.create(data);
     id=result.id as string
     console.log(result)
     
   // FOR SEE console.log (result)
  
    expect(result).toEqual({
      id:id,
        first_name:'youssef',
        last_name:'nour',


    });
 
});


it('show user methode', async () => {
    const result = await store.show(id);
    expect(result).toEqual({
        id: id,
        first_name: 'youssef',
        last_name: 'nour',
    });
});


it('delet the methode',async()=>{

    const result = await store.DELETE(id)

    expect(result).toEqual({first_name:'youssef',
    last_name:'nour',
    id:id
    
})
    
})


})









