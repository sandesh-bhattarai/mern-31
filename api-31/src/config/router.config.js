const router = require('express').Router()
const authRouter = require('../modules/auth/auth.router')
const bannerRouter = require('../modules/banners/banner.router')
const brandRouter = require('../modules/brand/brand.router')

// http://localhost:9005/api/v1/health
router.use("/health", (req, res) => {
    res.end("This is healthcheck url")
})

router.use('/auth', authRouter)
router.use("/banner", bannerRouter);
router.use("/brand", brandRouter);

// http://localhost:9005/api/v1/
router.use("/", (request, response) => {
    response.end("Hello world")
})



module.exports = router;