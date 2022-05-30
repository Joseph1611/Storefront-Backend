import {user, UsersStore} from '../models/users'
import { NextFunction, Request,Response } from 'express'
import jwt from 'jsonwebtoken'
import { Certificate } from 'crypto'
import { userInfo } from 'os'
const {TOKEN}=process.env

const store =new UsersStore()

export const index=async (_req:Request,res:Response)=>{
try {
    const allUsers=await store.index()
    res.json(allUsers)
}catch(err){res.status(404)
    res.json(err)

}
}
export const show =async(req:Request,res:Response,next:NextFunction)=>{

    try{const id = req.params.id;
    
		const user = await store.show(id);
console.log(user)
	
	//	const uid = uids.includes(id);
        
		/*if (!uid) {
		return	res.status(404).json('User not found');
			
		}*/
      //  return us
        
	//	const data = await store.show(id);
	return	res.json(user);
	
    }catch(err){res.json(err);
    

    }

}
export const create=async (req:Request,res:Response)=>{
    try{const userInfo:user= { first_name:req.body.first_name,
        last_name:req.body.last_name,
     password:req.body.password}

     if (
        userInfo.first_name === '' ||
        userInfo.last_name === '' ||
        userInfo.password === ''
    ){res
      
        .status(404) .send('Cannot First Name, Last Name And password to be Empty');
        return;}
        const createUser= await store.create(userInfo)

      const token= jwt.sign({user:createUser},TOKEN as string) //res.json().status(200)
     
     res.json({...createUser,token}).status(200)
  
     //res.json(createUser).status(200)
    }catch(err){
        res.json(err).status(404)
    }
}
export const Delete=async (req:Request,res:Response)=>{
 try{   const id =req.params.id
   
const DeletedData=await store.DELETE(id)
res.json(DeletedData).status(404)
     }
     catch(err){res.json(err).status(404)
   }

    }
    
