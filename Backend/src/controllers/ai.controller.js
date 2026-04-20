const aiService = require("../services/ai.service")


async function getReview (req, res){
    const code = req.body.code;

    if(!code) {
        return res.status(400).json({
            message : "please send the prompt in the input"
        })
    }
    
    try{
    const response = await aiService(code);
    res.send(response);;
    }
    catch(error) {
        return res.send(`Error Occured ${error.message}`);
    }
};


module.exports = {getReview};