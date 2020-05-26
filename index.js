const express = require("express");
const app = express();
const PORT = 4000;

const { User, TodoList } = require("./models");

app.use(express.json());

// app.post("/echo", (req, res) => {
//   res.json(req.body);
// });

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).send(`No user with id:${id} found!`);
    } else {
      res.send(user);
    }
    res.send(user);
  } catch (e) {
    next(e);
  }
});

app.put("/users/:id", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send(`No USER with id:${userId} found!`);
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:id/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    if (user) {
      res.send(user.TodoLists);
    } else {
      res.status(404).send(`User with id=${id} not found`);
    }
  } catch (e) {
    next(e);
  }
});
// create a new list for a user
app.post("/users/:UserId/lists", async (req, res, next) => {
  try {
    const UserId = req.params.UserId;
    const name = req.body.name;
    const user = await User.findByPk(UserId);
    if (!user) {
      res.status(404).send(`User with id=${UserId} not found`);
    } else if (!name || name === " ") {
      res.status(400).send("Must provide a new list name");
    } else {
      const newList = await TodoList.create({ UserId, ...req.body });
      res.json(newList);
    }
  } catch (e) {
    next(e);
  }
});

// Update an existing list
app.put("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const UserId = parseInt(req.params.userId);
    const name = req.body.name;
    const user = await User.findByPk(UserId);
    const listToUpdate = await TodoList.findByPk(listId);
    if (!user) {
      res.status(404).send(`User with id=${UserId} not found`);
    } else if (!listToUpdate) {
      res.status(404).send(`No LIST with id=${listId} found!`);
    } else if (!name || name === " ") {
      res.status(400).send("Must provide a new list name");
    } else {
      const updatedList = await listToUpdate.update({ UserId, ...req.body });
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});
// Delete a user's list
app.delete("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const UserId = parseInt(req.params.userId);

    const user = await User.findByPk(UserId);
    const listToDelete = await TodoList.findByPk(listId);
    if (!user) {
      res.status(404).send(`User with id=${UserId} not found`);
    } else if (!listToDelete) {
      res.status(404).send(`No LIST with id=${listId} found!`);
    } else {
      const deleted = await listToDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});
// Delete all user's lists
app.delete("/users/:userId/lists", async (req, res, next) => {
  const UserId = parseInt(req.params.userId);
  const user = await User.findByPk(UserId, { include: [TodoList] });
  if (!user) {
    res.status(404).send(`User with id=${UserId} not found`);
  } else if (user.TodoLists.length === 0) {
    res.status(404).send(`This user has no lists!`);
  } else {
    user.TodoLists.forEach(async (list) => await list.destroy());
    res.status(204).send();
  }
});

app.get("/todolists/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const list = await TodoList.findByPk(id);
    if (!list) {
      res.status(404).send(`No TODOLIST with id:${id} found!`);
    } else {
      res.send(list);
    }
    res.send(user);
  } catch (e) {
    next(e);
  }
});

app.post("/todolists", async (req, res, next) => {
  try {
    const UserId = req.body.UserId;
    const name = req.body.name;
    if (!UserId || UserId === " ") {
      res.status(400).send("Must provide an UserId");
    } else if (!name || name === " ") {
      res.status(400).send("Must provide a name");
    } else {
      const list = await TodoList.create(req.body);
      res.json(list);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/todolists/:id", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.id);
    const listToUpdate = await TodoList.findByPk(listId);
    if (!listToUpdate) {
      res.status(404).send(`No LIST with id=${listId} found!`);
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));
