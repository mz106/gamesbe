const Order = require("./model");
const OrderedGames = require("../orderedGames/model");

const addOrder = async (req, res) => {
  console.log(req.body.basket);
  try {
    const order = await Order.create({
      totalprice: req.body.totalprice,
      UserId: req.body.UserId,
    });

    const orderedGames = await OrderedGames.bulkCreate(
      req.body.basket.map((game) => ({
        gameId: game.gameId,
        gamename: game.gamename,
        price: game.price,
        OrderId: order.id,
      }))
    );

    // async function makePostWithReactions(content, reactionTypes) {
    //   const post = await Post.create({ content });
    //   await Reaction.bulkCreate(
    //     reactionTypes.map((type) => ({ type, postId: post.id }))
    //   );
    //   return post;
    // }

    // await makePostWithReactions("Hello World", [
    //   "Like",
    //   "Angry",
    //   "Laugh",
    //   "Like",
    //   "Like",
    //   "Angry",
    //   "Sad",
    //   "Like",
    // ]);
    // await makePostWithReactions("My Second Post", [
    //   "Laugh",
    //   "Laugh",
    //   "Like",
    //   "Laugh",
    // ]);

    const retrievedOrder = await Order.findOne({
      where: { id: order.id },
      include: OrderedGames,
    });
    console.log("retrievedOrders: ", retrievedOrder);
    res.status(201).json({
      message: "order added",
      order: order,
      orderedGames,
      retrievedOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(201).json({ message: `All orders`, orders: orders });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addOrder: addOrder,
  getAllOrders: getAllOrders,
};
