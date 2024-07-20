import mongoose, { Schema } from "mongoose";


const CategorySchema =new Schema({
    name:{
        type: String,
        required: true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    type:{
        type: String,
        enum:['private','public'],
        default:'public'
    },
    task:{
        type:String,
        required:true
    }

})

export const Categorymodel =mongoose.model('Category',CategorySchema)