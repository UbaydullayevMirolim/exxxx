const {Router} = require("express");
const { toDo, getToDo, deleteToDo, updateUsers, offsetLimit, getByName, getall } = require("../controllers/toDo");


const router = new Router();
router.post("/user", toDo)
.get("/get/:id", getToDo)
.delete("/user/:id", deleteToDo)
.put("/put/:id", updateUsers)
.get(["/limit", "/limit/:id"] ,offsetLimit )
.get("/get/:name", getByName)
.get("get/all", getall)
// .get()




module.exports = router;