const express= require("express")

const db= require("../data/dbConfig")

const router = express.Router();


router.get("/", (req,res)=>{
    db.select("*")
    .from("accounts")
    .then(accounts =>{
        res.status(200).json(accounts)
    })
    .catch(error =>{
        console.log(error)
        res.status(500).json({error:"failed to get the list of accounts"})
    })
})

router.get("/:id",(req,res)=>{
getById(req.params.id)
.then(account =>{
    res.status(200).json(account)
})
.catch(error =>{
    console.log(error)
    res.status(500).json({error:"failed to get the account"})
})
})

module.exports = router;

function getById(id) {
    return db("accounts")
      .where({ id })
      .first();
  }
  