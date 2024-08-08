const mongoose = require("mongoose");
const { Status } = require("../../config/constants.config");

const BannerSchema = new mongoose.Schema({
    name: {
        type: String, 
        min: 3, 
        max: 100
    },
    image: {
        type: String, 
        required: true
    },
    link: String,
    status: {
        type: String, 
        enum: [...Object.values(Status)],
        default: Status.INACTIVE
    },
    startDate: {
        type: Date, 
        default: Date.now()
    },
    endDate: Date,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    },
    updatedBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    }
}, {
    timestamps: true, 
    autoCreate: true, 
    autoIndex: true
});

const BannerModel = mongoose.model("Banner", BannerSchema)
module.exports = BannerModel;