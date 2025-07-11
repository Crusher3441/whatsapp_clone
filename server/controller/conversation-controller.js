import Conversation from "../model/Conversation.js"

export const newConversation = async(req,res) =>{
    try {
        const senderId = req.body.senderId
        const receiverId = req.body.receiverId

        const exist = await Conversation.findOne({
            members:{$all:[senderId,receiverId]}
        })
        if(exist){
            return res.status(200).json("conversation already exist")
        }

        const newConversation = new Conversation({
            members:[senderId,receiverId]

        })
        await newConversation.save()
        return res.status(200).json("conversation saved successfully")
    } catch (error) {
        console.log("error in newConversation",error)
        return res.status(500).json(error.message)
    }
}