import { Router } from "express";
import { CategorysPrivateByUserId, createCategory, deleteCategoryById, getallCategory, searchCategoryByName } from "./contorall.js";
import { auth } from "../../midlleWare/auth.js";
import { validation } from "../../midlleWare/validation.js";
import { createCategoryValidation } from "./Validation.js";


const RouterCategory=Router()

RouterCategory.post("/createCategory",validation(createCategoryValidation),auth(),createCategory)
RouterCategory.get("/searchCategoryByName",searchCategoryByName)
RouterCategory.get("/getallCategory",getallCategory)
RouterCategory.delete("/deleteCategoryById",deleteCategoryById)
RouterCategory.post("/CategorysPrivateByUserId",auth(),CategorysPrivateByUserId)



export default RouterCategory;