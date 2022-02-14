const axios = require('axios');
const apiKeys = require('./config.js');


module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
    },
    getFortune: (req, res) => {
        const fortunes = ["You are busy, but you are happy.",
                           "You can see a lot just by looking.",
                           "You have a friendly heart and are well admired. ",
                           "You love chinese food.",
                           "You should pay for this check. Be generous. ",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
        
    },
    getGif: (req, res) => {
        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKeys.gif_api_key}&tag=funny&rating=g`)
            .then(gifRes => {
                res.status(200).send(gifRes.data.data.images.original.url)
        })
    }

    
}
