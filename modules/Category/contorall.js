import { Categorymodel } from "../../DB/models/Categoriesmodel.js"
import { usermodel } from "../../DB/models/usermodel.js"

//====================== create catagory===================
export const createCategory =async(req,res)=>{
    try {
        const {name ,type ,task }=req.body
        const {_id}=req.user
        const Category=await Categorymodel.create({name,type,task,createdBy:_id})
        if (!Category) {
            return res.json({message:"in-vaild Category"})
        }
        await usermodel.findByIdAndUpdate({_id},{
        $push:{
            CategoryId:Category._id
        }
        })
        res.json({message:"Done",Category})
    } catch (error) {
        console.log(error)
        return  res.json({message:'Fail catch'});
    }
}

//===================== search catagory by Name ==============
export const searchCategoryByName =async(req,res)=>{
try {
    const {name}=req.body
    const Category=await Categorymodel.find({name ,type:'public'})
    if (!Category.length) {
        return res.json({message:"Not found this is name "})
    }
    res.json({message:"Done", Category})
} catch (error) {
    console.log(error)
    return  res.json({message:'Fail catch'});
}
}

//====================  getall catagory type public ==============
export const getallCategory =async(req,res)=>{
    try {
        const Category=await Categorymodel.find({type:'public'})
        if (!Category.length) {
            return res.json({message:"Not found "})
        }
        res.json({message:"Done", Category})
    } catch (error) {
        console.log(error)
        return  res.json({message:'Fail catch'});
    }
}


//=================== delete catagory byId =====================
export const deleteCategoryById =async(req,res)=>{
    try {
        const {idCategory}=req.body
        const CategoryExist =await Categorymodel.findById({_id:idCategory})
        if (!CategoryExist) {
            return res.json({message:"Fail id Category"})
        }
        await Categorymodel.findByIdAndDelete({_id:idCategory})
        res.json({message:"Done"})
    } catch (error) {
        console.log(error)
        return  res.json({message:'Fail catch'});
    }
}


//==================  getall catagory type private by IdUser ===================
export const CategorysPrivateByUserId =async(req,res)=>{
    try {
        const Category=await Categorymodel.find({ createdBy:req.user,type:'private'})
        if (!Category.length) {
            return res.json({message:"Not found "})
        }
        res.json({message:"Done", Category})
    } catch (error) {
        console.log(error)
        return  res.json({message:'Fail catch'});
    }
}