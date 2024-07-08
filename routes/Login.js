const express =  require('express')
const router = express.Router()
router.get('/Login',(req,res,next)=>{
    res.send(`<h1>Login Here</h1>`)
})
module.exports=router;