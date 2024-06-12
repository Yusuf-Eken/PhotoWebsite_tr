import express from "express";
const app= express();
const port=4000;

//Çalışmalarımız boyunca yapıcağımız her şeyin temeli burada
app.get("/", (req,res)=>{
    res.send(`Index Sayfasi`);
});

//Bir node js web uygulaması request ve respons dan ibarettir

app.listen(port,()=>{
    console.log(`Uygulamanın Çalıştığı Port: ${port}`);
});
