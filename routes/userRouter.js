const express=require("express");
const{
    getAllUsers
    // createUser,
    // updateUser,
    // deleteUser,
}=require("../controllers/usercontrollers");

const router=express.Router();

router.get("/",getAllUsers);
// router.post("/",createUser);
// router.patch("/:id",updateUser);
// router.delete("/:id",deleteUser);

module.exports=router;