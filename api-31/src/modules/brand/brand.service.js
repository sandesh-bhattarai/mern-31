const Joi = require("joi");
const { uploadHelper } = require("../../utilities/helpers");
const BrandModel = require("./brand.model");
const slugify = require("slugify");

class BrandService {
    transFormData = async (req, isEdit = false) => {
        const data = req.body;
        if(isEdit) {
            data.updatedBy = req.authUser._id;
        } else {
            data.createdBy = req.authUser._id;

            data.slug = slugify(data.name, {lower: true})
        }

        if(req.file) {
            data.image = await uploadHelper(req.file.path, 'brands')
        } else {
            if(isEdit) {
                delete data.image
            }
        }
        return data;
    }

    createBrand =async (data) => {
        try {
            const brand = new BrandModel(data);
            return await brand.save()
        } catch(exception) {
            throw exception
        }
    }

    updateBrand =async(data, id) => {
        try {
            const update = await BrandModel.findByIdAndUpdate(id, {$set: data}, {new: true});
            return update;
        } catch(exception) {
            throw exception;
        }
    }

    deleteById = async(id) => {
        try {
            const update = await BrandModel.findByIdAndDelete(id);
            if(!update) {
                throw {code: 404, message: "Brand already deleted or does not exists.", status: "BANNER_DELETE_ERROR"}
            }
            return update;
        } catch(exception) {
            throw exception;
        }
    }

    listAllByfilter =async ({limit=15, skip=0, filter={}}) => {
        try {
            const total = await BrandModel.countDocuments(filter);

            const list = await BrandModel.find(filter)
                .populate("createdBy", ["_id", "name", "email", "role"])
                .populate("updatedBy", ["_id", "name", "email", "role"])
                .sort({createdAt: "desc"})
                .limit(limit)
                .skip(skip);
            return {list, total};
        } catch(exception) {
            throw exception;
        }
    }

    getSingleData = async(filter) => {
        try{
            const brandDetail = await BrandModel.findOne(filter)
                .populate("createdBy", ["_id", "name", "email", "role"])
                .populate("updatedBy", ["_id", "name", "email", "role"])
            return  brandDetail
        } catch(exception) {
            throw exception
        }
    }
}

const brandSvc = new BrandService()
module.exports = brandSvc;