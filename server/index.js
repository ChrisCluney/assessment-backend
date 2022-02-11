const express = require("express");
const cors = require("cors");

const ctrl = require('./controller')


const app = express();

const port = 4000

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
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
  
});

app.get('/api/goals', ctrl.getGoals)

app.post('/api/goals', ctrl.createGoals)

app.put('/api/goals/:id', ctrl.updateGoals)

app.delete('/api/goals/:id', ctrl.deleteGoals)








app.listen(4000, () => console.log("Server running on 4000"));
