import express from "express";
import dotenv from "dotenv"
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"
dotenv.config();


//Connection to the DB
conn();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set('view engine', 'ejs')

// Static files middleware statik dosyalarımızın public dosyasında olduğunu göstermemize yarar.
app.use(express.static('public'))
app.use(express.json());
//Çalışmalarımız boyunca yapıcağımız her şeyin temeli burada
//Bir node js web uygulaması request ve respons dan ibarettir
app.use("/", pageRoute)
app.use("/photos", photoRoute)

app.listen(port, () => {
    console.log(`Uygulamanın Çalıştığı Port: ${port}`);
});
