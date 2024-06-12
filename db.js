import mongoose from "mongoose";

const conn = () => {
    mongoose
        .connect(process.env.DB_URL, {
            dbName: "PhotoWebsite",
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("DataBase Bağlandı.")
        }).catch((err) => {
            console.log(`Database Hata aldı: ${err}`)
        });
};

export default conn;