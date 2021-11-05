const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           "People find it difficult to resist your persuasive manner.",
           "Rest has a peaceful effect on your physical and emotional health.",
           "Savor your freedom – it is precious.",
  ];

  
  //choose random compliment

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  
  
  res.status(200).send(randomCompliment);
  
});

app.get("/api/motivation", (req, res) => {
  const motivation = ["Red", "Blue", "Black", "Green", "Purple", "Yellow", "White", "Gold"
  ];
  let randomIndex = Math.floor(Math.random() * motivation.length);
  let randomMovtivation = motivation[randomIndex];

  res.status(200).send(randomMovtivation);
});

app.post("/api/subscribe", (req, res) => {
  let confirmationMsg = document.createElement("p")
  confirmationMsg.textContent = "Thank you for selling your soul to my company!" + subBtn.value;
  subBtn.remove();

  res.status(200).send(confirmationMsg)
});

// app.get("/api/submit", (req, res) => {

// ;})

app.listen(4000, () => console.log("Server running on 4000"));
