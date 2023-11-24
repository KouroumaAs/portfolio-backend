const { Router } = require("express");
const { SendMessageController } = require("../controllers/VisitorController");

const visitorRouter = Router();

visitorRouter.post("/sendMail",SendMessageController);
visitorRouter.get("/",( req, res ) => {
    res.send("ddjdjdj")
})
module.exports = { visitorRouter }