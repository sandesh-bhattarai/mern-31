const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String, 
        min: 1,
        max: 100,
        required: true, 
        unique: true 
    }, 
    slug: {
        type: String,
        required: true, 
        unique: true 
    },
    parentId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        default: null
    },
    status: {
        type: String, 
        enum: ['active','inactive'],
        default: "inactie"
    },
    image: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    },
    updatedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    }    
}, {
    autoCreate: true, 
    autoIndex: true, 
    timestamps: true
});


const CategoryModel = mongoose.model("Category", CategorySchema)

module.exports = CategoryModel;