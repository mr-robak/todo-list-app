const TodoItem = require("./models").TodoItem;
const User = require("./models").User;
const { Op } = require("sequelize");
//const Sequelize = require("sequelize");

async function findAllUsers() {
  try {
    const allUsers = await User.findAll();
    // console.log(allUsers.map((item) => item.get({ plain: true })));
    return allUsers.map((item) => item.get({ plain: true }));
  } catch (error) {
    console.log(error);
  }
}

// findAllUsers().then((result) => console.log(result));

async function findAllTodoItems() {
  try {
    const allTodoItems = await TodoItem.findAll();
    // console.log(allTodoItems.map((item) => item.get({ plain: true })));
    return allTodoItemsallTodoItems.map((item) => item.get({ plain: true }));
  } catch (error) {
    console.log(error);
  }
}

// findAllTodoItems().then((result) => console.log(result));

async function findUserByPk() {
  try {
    const userByPk = await User.findByPk(1);
    // console.log(userByPk.get({ plain: true }));
    return userByPk.get({ plain: true });
  } catch (error) {
    console.log(error);
  }
}

// findUserByPk().then((result) => console.log(result));

async function createUser() {
  try {
    const newUser = await User.create({
      name: "Orion",
      email: "orion@nasa.com",
      phone: 66666666,
    });
    // console.log(newUser).get({ plain: true });
    return newUser.get({ plain: true });
  } catch (error) {
    console.log(error);
  }
}

// createUser().then((result) => console.log(result));

async function findImportantTodoItems() {
  try {
    // const Op = Sequelize.Op // use this if Op is not imported by require
    const importantTodo = await TodoItem.findAll({
      where: {
        important: { [Op.is]: true },
        // important: true , // the same as above
      },
    });

    // console.log(importantTodo.map((item) => item.get({ plain: true })));
    return importantTodo.map((item) => item.get({ plain: true }));
  } catch (error) {
    console.log(error);
  }
}

// findImportantTodoItems().then((result) => console.log(result));
