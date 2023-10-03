const Product = require("../../models/product.model");


module.exports.index = async (req, res) => {
    const products= await Product.find({
        deleted: false,
        status: "active"
    });

    const newProducts = products.map( item => {

        item.priceNew = ((item.price*(100-item.discountPercentage))/100).toFixed(0);
        return item;
    });
    console.log(newProducts);
    res.render("client/pages/products/index",{
        pageTitle:"Danh sach san pham",
        products:newProducts
    });
}

module.exports.detail = async(req,res) =>{
    try {
        const slug = req.params.slug;
        const product = await Product.findOne({slug:slug, deleted: false, status: "active"});
    
        res.render("client/pages/products/detail",{
            pageTitle:"trang chi tiet san pham",
            product:product
        });
    } catch (error) {
        res.redirect("/");
    }
   
}