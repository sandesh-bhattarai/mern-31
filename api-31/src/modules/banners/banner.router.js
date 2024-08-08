const { loginCheck } = require("../../middleware/auth.middleware");
const { checkAccess } = require("../../middleware/rbac.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const { bodyValidator } = require("../../middleware/validator.middleware");
const { BannerCreateDTO } = require("./banner.contract");
const bannerCtrl = require("./banner.controller");

const bannerRouter = require("express").Router();

bannerRouter.get('/list-home', bannerCtrl.listForHome);

// /banner => get => list all banners
bannerRouter.route('/')
    .get(loginCheck, checkAccess('admin'), bannerCtrl.index)
    .post(loginCheck, checkAccess('admin'), setPath('banners'), uploader.single("image"), bodyValidator(BannerCreateDTO), bannerCtrl.store)

bannerRouter.route("/:id")
    .get(loginCheck, checkAccess('admin'), bannerCtrl.show)
    .put(loginCheck, checkAccess("admin"),     bannerCtrl.update)
    .delete(loginCheck, checkAccess('admin'), bannerCtrl.remove)

module.exports = bannerRouter;