const Joi = require("joi");
const { uploadHelper } = require("../../utilities/helpers");
const BannerModel = require("./banner.model");

class BannerService {
    transFormData = async (req) => {
        const data = req.body;
        data.createdBy = req.authUser._id;
        if(req.file) {
            data.image = await uploadHelper(req.file.path, 'banners')
        }
        return data;
    }

    createBanner =async (data) => {
        try {
            const banner = new BannerModel(data);
            return await banner.save()
        } catch(exception) {
            throw exception
        }
    }

    listAllByfilter =async ({limit=15, skip=0, filter={}}) => {
        try {
            const total = await BannerModel.countDocuments(filter);

            const list = await BannerModel.find(filter)
                .populate("createdBy", ["_id", "name", "email", "role"])
                .sort({createdAt: "desc"})
                .limit(limit)
                .skip(skip);
            return {list, total};
        } catch(exception) {
            throw exception;
        }
    }
}

const bannerSvc = new BannerService()
module.exports = bannerSvc;