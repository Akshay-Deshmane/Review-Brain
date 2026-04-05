const aiService = require("../services/ai.service")


async function getReview (req, res){
    const code = req.body.code;

    if(!code) {
        return res.status(400).json({
            message : "please send the prompt in the input"
        })
    }

    const response = await aiService(code);

    res.send(response);
};


module.exports = {getReview};