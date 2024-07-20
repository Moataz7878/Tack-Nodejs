import { Router } from "express";
import { Login, deleteUser, getallUser, logOut, signUp, updateUser } from "./contorall.js";
import { validation } from "../../midlleWare/validation.js";
import { loginValidation, signUpValidation } from "./VallidationUser.js";
import { auth } from "../../midlleWare/auth.js";


const userRouter = Router()

userRouter.post('/signUp',validation(signUpValidation),signUp)
userRouter.post('/Login',validation(loginValidation),Login)
userRouter.put('/updateUser',auth(),updateUser)
userRouter.delete('/deleteUser',auth(),deleteUser)
userRouter.put('/logOut',auth(),logOut)
userRouter.get('/getallUser',getallUser)


export default userRouter