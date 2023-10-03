const dashboardRoutes = require("./dashboard.route");
const systemConfig = require("../../config/system");
const productRoutes = require("./product.route");

module.exports = (app) =>{
    const Path_Admin ="/"+systemConfig.prefixAdmin;

    app.use(Path_Admin+"/dashboard", dashboardRoutes); 
    app.use(Path_Admin+"/products", productRoutes); 
   
}