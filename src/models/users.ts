
import bcrypt, { hash } from 'bcrypt'
import { checkServerIdentity } from 'tls';

import Client from "../database";

//cheak the syntax please 
export type user={
    id?:string,
    first_name:string,
    last_name:string,
    password?:string
}
const {BCRYPT_PASSWORD,SALT_ROUNDS}=process.env
const hashPass = (password: string): string => {
	const hash = bcrypt.hashSync(
		password + BCRYPT_PASSWORD,
		parseInt(SALT_ROUNDS as string)
	);console.log(hash)
	return hash;
};
export class UsersStore{
  
    async index():Promise<user[]>{
        try{
            const conn=await Client.connect()
            const sql= 'SELECT id, first_name, last_name FROM users'
            const result =await conn.query(sql)
            //cheak the syntx  of it and realese
            conn.release()
            return result.rows

        }catch(err){
            throw new Error(`the error is ${err}`);
        }
    }
      // @ts-ignore
async show(id:string):Promise<user>{
    try {
        const conn=await Client.connect()
        const sql ='SELECT id, first_name, last_name FROM users WHERE id=$1'
        const result =await conn.query(sql,[id])
        conn.release()
        return result.rows[0];
    }catch(err){
        throw new Error (`the error is ${err}`)

    }
}

async DELETE (id:string):Promise<user>{
    try{
        const conn=await Client.connect()
        //cheak the syntax please if the error appere 
        const sql='delete  FROM users WHERE id=$1 RETURNING id,first_name,last_name'
const result=await conn.query(sql,[id])
conn.release()
return result.rows[0];
    }catch(err){
        throw new Error(`the error is ${err}`)
    }
}
async create(u:user):Promise<user>{
  try{  const conn= await Client.connect()
    //cheak the syntax if the error appere 
    const sql='INSERT INTO users (first_name, last_name, password) VALUES($1,$2,$3) RETURNING id,first_name,last_name';
   /* if (!BCRYPT_PASSWORD) {
    
        throw new Error('missing');
    }
    if (!SALT_ROUNDS) {
    
    console.log(BCRYPT_PASSWORD)
        throw new Error('missing');
    }*/
    


/* const haspass=(password:string):string=>{const hash=bcrypt.hashSync(u.password+BCRYPT_PASSWORD, parseInt(SALT_ROUNDS as string))
return hash}*/
    const result = await conn.query(sql,[u.first_name,
        u.last_name,
        hashPass(u.password as string),
    ])

 conn.release()
 return result.rows[0]}catch(err){


     throw new Error(`the error is ${err}`);
 }

}

}
