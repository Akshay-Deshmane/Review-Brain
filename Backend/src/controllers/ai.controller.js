const aiService = require("../services/ai.service")


async function getResponse (req, res){
    const prompt = req.query.prompt;

    if(!prompt) {
        return res.status(400).json({
            message : "please send the prompt in the input"
        })
    }

    const response = await aiService(prompt);

    res.send(response);
};


module.exports = {getResponse};