
import jwt from 'jsonwebtoken'
import {Request,Response,NextFunction} from 'express'
const{TOKEN}=process.env
const verifyAuthToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const authorizationHeader = req.headers.authorization as string;
		const token = authorizationHeader && authorizationHeader.split(' ')[1];
		jwt.verify(token, TOKEN as string);
		next();
	} catch (err) {
		res.status(401).send(`Error unAuthorized user ${err}`);
	}
};
export default verifyAuthToken;