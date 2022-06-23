function notFound(res,req,next){
next({
    status: 404, message: `Request ${req.path} does not exist`
})
}
module.exports = notFound