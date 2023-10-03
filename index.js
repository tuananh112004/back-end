const express = require("express");
require("dotenv").config();
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const methodOverride = require('method-override');
const database = require("./config/database");
const routeAdmin = require("./routes/admin/index.route");
const route = require("./routes/client/index.route");
const app = express();
const port = process.env.PORT;
const systemConfig = require("./config/system");

const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



app.use(methodOverride('_method'));
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')
app.use(express.static(`${__dirname}/public`));

app.locals.prefixAdmin =systemConfig.prefixAdmin;


// Flash
app.use(cookieParser("LHNASDASDAD"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// End Flash
route(app);
routeAdmin(app);
database.connnect();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
//                     npx kill-port --port 3000

// override with POST having ?_method=DELETE
