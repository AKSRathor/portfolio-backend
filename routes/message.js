const express = require("express")
const router = express.Router()
const MsgEle= require("../models/Message")


router.post('/send'

, async (req, res) => {
    try {
        const { Name, Phone,Email, Message } = req.body
        
        const msg = new MsgEle({
            Name, Phone,Email,Message
        })
        const savedMsg = await msg.save()
        res.json(savedMsg)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

})
module.exports = router