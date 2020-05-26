const { User, TodoItem, TodoList, Tag } = require("./models");

async function listsWithUsers() {
  const lists = await TodoList.findAll({
    include: [{ model: User, attributes: ["name"] }],
  });

  return lists.map((list) => list.get({ plain: true }));
}

// listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  const allUsers = await User.findAll({
    include: { model: TodoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users.map((usr) => usr.TodoLists)));
// getUsers().then((users) => console.log(users));

async function getUserById(id) {
  const userById = await User.findByPk(id, { include: [TodoList] });
  // console.log(userById.get({ plain: true }));
  return userById.get({ plain: true });
}

// getUserById(1).then((user) => console.log(user));

async function getImportantTodo() {
  const importantTodo = await TodoItem.findAll({
    where: {
      important: true,
    },
  });
  return importantTodo.map((item) => item.get({ plain: true }));
}

// getImportantTodo().then((todo) => console.log(todo));

async function getTodoItemswithTag() {
  const items = await TodoItem.findAll({
    include: [Tag],
  });
  return items.map((item) => item.get({ plain: true }));
}

getTodoItemswithTag().then((item) => console.log(item));
