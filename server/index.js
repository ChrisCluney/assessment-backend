const express = require("express");
const cors = require("cors");

const app = express();

const port = 4000

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller')
const feelinglistCtrl = require('./feelinglistCtrl')


app.get("/api/compliment", ctrl.getCompliment);
app.get("/api/fortune", ctrl.getFortune);

app.get("/api/gif", ctrl.getGif);



app.post("/api/goal", feelinglistCtrl.addItem)
app.delete("/api/goal/:id", feelinglistCtrl.deleteItem)




app.listen(4000, () => console.log("Server running on 4000"));
