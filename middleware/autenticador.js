
const express = require('express');
const router = express.Router();

router.use("/privada",(req,res,next)=>{
    console.log("No ha iniciado Sección");
    res.redirect("/login")
});


module.exports = router;