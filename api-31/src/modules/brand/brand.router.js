const { loginCheck } = require("../../middleware/auth.middleware");
const { checkAccess } = require("../../middleware/rbac.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const { bodyValidator } = require("../../middleware/validator.middleware");
const { BrandCreateDTO, BrandUpdateDTO } = require("./brand.contract");
const brandCtrl = require("./brand.controller");

const brandRouter = require("express").Router();

brandRouter.get('/list-home', brandCtrl.listForHome);

// /brand => get => list all brands
brandRouter.route('/')
    .get(loginCheck, checkAccess('admin'), brandCtrl.index)
    .post(loginCheck, checkAccess('admin'), setPath('brands'), uploader.single("image"), bodyValidator(BrandCreateDTO), brandCtrl.store)

brandRouter.route("/:id")
    .get(loginCheck, checkAccess('admin'), brandCtrl.show)
    .put(loginCheck, checkAccess("admin"), setPath('brands'), uploader.single("image"), bodyValidator(BrandUpdateDTO), brandCtrl.update)
    .delete(loginCheck, checkAccess('admin'), brandCtrl.remove)

module.exports = brandRouter;