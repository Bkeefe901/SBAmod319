export default (err, req, res, next)=>{
    res.status(500).json({msg: `❌ Error - ${err.message}`});
}