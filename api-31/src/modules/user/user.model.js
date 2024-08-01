const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    // _id, createdAt, updatedAt
    name: {
        type: String,
        min: 2, 
        max: 50, 
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
    activationToken: String,
    activeFor: Date, 
    address: String, 
    phone: String, 
    role: {
        type: String, 
        enum: ['admin', 'seller','customer'],
        default: "customer"
    },
    status: {
        type: String, 
        enum: ['active','inactive'],
        default: "inactive"
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
    timestamps: true,
    autoIndex: true, 
    autoCreate: true
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel

// Model name => singular form 
    // auto table name => plural form
        // auto point
    // table => columns keys 
        // model property 
            // model instance => db table one row point
// users 
    // User Model 
        // schema (key )
        // user object =>