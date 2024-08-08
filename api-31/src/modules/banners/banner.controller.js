const bannerSvc = require("./banner.service")

class BannerController{
    /**
     * This function is used to list all the banners available in the system by loggedin Admin user
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

            const {list, total} = await bannerSvc.listAllByfilter({limit, skip, filter});
            //
            res.json({
                result: list, 
                meta: {
                    limit: limit, 
                    page: page, 
                    total: total, 
                    totalpages: Math.ceil(total/limit)
                },
                message: "List all banners",
                status: "BANNER_LIST_SUCCESS"
            })
        } catch(exception) {
            next(exception)
        }
    }

    /**
     * This function is to create/store the banner data in database by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    store = async(req, res, next) => {
        try{
            const data = await bannerSvc.transFormData(req)
            const banner = await bannerSvc.createBanner(data)
            res.json({
                result: banner, 
                meta: null, 
                message: "Banner created successfully.",
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
     * This function is to get the detail of a banner by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    show = async(req, res, next) => {

    }

    /**
     * This funciton is to update a banner data by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    update = async(req, res, next) => {

    }

    /**
     * This funciton is to delete a banner data by loggedin Admin user
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    remove = async(req, res, next) => {

    }

    /**
     *
     * This function fetch the active and available banners to display in the home page. 
     * Any User can fetch this data. 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     * @return void
     */
    listForHome = async(req, res, next) => {

    }

}

const bannerCtrl = new BannerController();
module.exports = bannerCtrl;