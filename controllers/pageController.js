const getindexPage=(req,res)=>{
    res.render("index")
}

const getAboutPage=(req,res)=>{
    res.render("about")
};

export{getAboutPage,getindexPage};