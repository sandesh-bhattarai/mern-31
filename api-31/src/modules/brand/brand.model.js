const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
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
    status: {
        type: String, 
        enum: ['active','inactive'],
        default: "inactie"
    },
    image: String,
    description: String,
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


const BrandModel = mongoose.model("Brand", BrandSchema)

module.exports = BrandModel;