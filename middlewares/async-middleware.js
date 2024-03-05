module.exports = asyncMiddleware => (req,res,next) =>
{
    // console.log(req)
    Promise.resolve(asyncMiddleware(req,res,next)).catch(next);
}