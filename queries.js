const User = require("./models").user;
const Dog = require("./models").dog;
const Chat = require("./models").chatMessage;
const Tag = require("./models").tag;
const Likes = require("./models").joinTableLike;

const dogWithOwner = async () => {
  try {
    const dogs = await Dog.findAll({
      include: [{ model: User, as: "owner" }],
    });
    console.log(dogs);
  } catch (e) {
    console.log("error", e.message);
  }
};

const findUser = async () => {
  try {
    const users = await User.findByPk(1, {
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
    console.log(users.get({ plain: true }));
  } catch (e) {
    console.log("error", e.message);
  }
};

const joinTableLikes = async () => {
  try {
    const likes = await Likes.findAll();
    console.log("likes", likes);
  } catch (e) {
    console.log("error", e);
  }
};

// findUser();
// dogWithOwner();

joinTableLikes();
