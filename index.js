const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const Dog = require("./models").dog;
const Chat = require("./models").chatMessage;
const Tag = require("./models").tag;

app.use(express.json());

app.get("/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await User.findByPk(userId, {
    include: [
      {
        model: Dog,
        as: "owner",
        include: [
          {
            model: Tag,
            as: "tagName",
          },
        ],
      },
      { model: Chat, as: "sender" },
    ],
  });

  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

app.get("/chat/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await User.findByPk(userId, {
    include: [{ model: Chat, as: "recipient" }],
  });

  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

app.get("/dogs", async (req, res) => {
  const dogs = await Dog.findAll({ include: [{ model: User, as: "owner" }] });
  res.send(dogs);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
