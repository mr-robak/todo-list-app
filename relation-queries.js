const { User, TodoItem, TodoList } = require("./models");

async function listsWithUsers() {
  const lists = await TodoList.findAll({
    include: [User],
  });

  return lists.map((list) => list.get({ plain: true }));
}

listsWithUsers().then((lists) => console.log(lists));
