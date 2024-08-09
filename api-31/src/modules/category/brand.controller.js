const { Status } = require("../../config/constants.config");
const brandSvc = require("./brand.service")

class BrandController{
    /**
     * This function is used to list all the brands available in the system by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    index = async(req, res, next) =>{
        try {
            let page = +req.query.page || 1;
            let limit = +req.query.limit || 15;
            
            let skip = (page-1) * limit;    // 1=0

            let filter = {} 

            if(req.query.search) {
                filter = {
                    ...filter, 
                    $or: [
                        {name: new RegExp(req.query.search, 'i')},
                        {status: new RegExp(req.query.search, 'i')}
                    ]
                }
            }

            const {list, total} = await brandSvc.listAllByfilter({limit, skip, filter});
            //
            res.json({
                result: list, 
                meta: {
                    limit: limit, 
                    page: page, 
                    total: total, 
                    totalpages: Math.ceil(total/limit)
                },
                message: "List all brands",
                status: "BANNER_LIST_SUCCESS"
            })
        } catch(exception) {
            next(exception)
        }
    }

    /**
     * This function is to create/store the brand data in database by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    store = async(req, res, next) => {
        try{
            const data = await brandSvc.transFormData(req)
            const brand = await brandSvc.createBrand(data)
            res.json({
                result: brand, 
                meta: null, 
                message: "Brand created successfully.",
                status: "BANNER_CREATE_SUCCESS"
            })
        } catch(exception) {
            next(exception)
        } finally{
            if(req.file) {
                fileDelete(req.file.path);
            }
        }
    }

    /**
     * This function is to get the detail of a brand by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    show = async(req, res, next) => {
        try{
            const id = req.params.id; 
            const brand = await brandSvc.getSingleData({
                _id: id
            })
            if(!brand) {
                throw {code: 404, message: "Brand does not exists", status: "BANNER_NOT_FOUND"}
            }
            res.json({
                result: brand, 
                meta: null, 
                message: "Brand Detail",
                status: "BANNER_FOUND"
            })
        } catch(exception) {
            next(exception)
        }
    }

    /**
     * This funciton is to update a brand data by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    update = async(req, res, next) => {
        try{
            const data = await brandSvc.transFormData(req, true)
            const brand = await brandSvc.updateBrand(data, req.params.id)
            res.json({
                result: brand, 
                meta: null, 
                message: "Brand updated successfully.",
                status: "BANNER_UPDATE_SUCCESS"
            })
        } catch(exception) {
            next(exception)
        } finally{
            if(req.file) {
                fileDelete(req.file.path);
            }
        }
    }

    /**
     * This funciton is to delete a brand data by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    remove = async(req, res, next) => {
        try{
            const data = await brandSvc.deleteById(req.params.id)
            res.json({
                result: data, 
                meta:null,
                message: "Brand Deleted Successfully.",
                status: "BANNER_DELETE_SUCCESS"
            })
        } catch(exception) {
            next(exception)
        }
    }

    /**
     *
     * This function fetch the active and available brands to display in the home page. 
     * Any User can fetch this data. 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    listForHome = async(req, res, next) => {
        try {
            const filter = {
                status: Status.ACTIVE,
                startDate: {$lte: new Date()},
                endDate: {$gte: new Date()}
            }
            const {list} = await brandSvc.listAllByfilter({
                filter, 
                limit: 10,
                skip: 0
            })
            res.json({
                result: list, 
                meta: null,
                message: "Brand For Display",
                status: "BANNER_FETCHED"
            })
        } catch(exception) {
            next(exception)
        }
    }

}

const brandCtrl = new BrandController();
module.exports = brandCtrl;