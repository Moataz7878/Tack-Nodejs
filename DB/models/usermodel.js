import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String,
        required: true
        },
    age:{
        type: Number,
        },
    loginIn:{
        type:Boolean,
        default:false
        },
    CategoryId:[{
        type: Schema.Types.ObjectId,
        ref: 'Category'
        }]
}) 
export const usermodel = mongoose.model('user',userSchema)