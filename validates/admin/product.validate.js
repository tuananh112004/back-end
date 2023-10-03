module.exports.createPost = (req,res,next)=>{
    if(!req.body.title){
        req.flash("error",`tieu de khong dc de trong`)
        res.redirect("back");
        return;
    }   
    if(req.body.title.length < 5){
        req.flash("error",`ngan`)
        res.redirect("back");
        return;
    }  
    next();
}