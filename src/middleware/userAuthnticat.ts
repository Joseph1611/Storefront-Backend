//i need to make a middleware that cheak the info users 
import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction, }from 'express'

const{TOKEN}=process.env
const authorizedUser=async (req:Request,res:Response,next:NextFunction)=>{
   
    try {
		const authorizationHeader = req.headers.authorization as string;
		const token = authorizationHeader && authorizationHeader.split(' ')[1];

		// to access data with typescript i have to use any.
		const decoded: any = jwt.verify(token, TOKEN as string);
		if (decoded.user.id != req.body.user_id) {
			throw new Error('User id does not match!');
		}
		next();
	} catch (err) {
		res.status(405).json(`Error unAuthorized user ${err}`);
	}
};
export default authorizedUser;