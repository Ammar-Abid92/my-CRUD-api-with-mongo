const express = require("express");
const router = express.Router();
const Users = require("../models/users");

const usersData = [
  {
    id: 1,
    name: "Ammar",
    age: 20,
  },
  {
    id: 2,
    name: "Umar",
    age: 20,
  },
];
router.get("/all", async (req, res) => {
  const users = await Users.find({}); // get all data from users collection
  console.log(users);
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

// dynamic query param
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await Users.findOne({ _id: id });
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

router.post("/new", async (req, res) => {
  // const newID = usersData[usersData.length - 1].id + 1;
  // const newUser = Object.assign({ id: newID }, req.body);
  // usersData.push(newUser);
  try {
    const user = new Users(req.body);
    await user.save();
    res.send({ message: "Data added success", data: req.body });
  } catch (e) {
    res.send({ message: e });
  }
});

router.put("/update/:id", (req, res) => {
  const reqId = parseInt(req.params.id);
  const data = usersData.filter((each) => each.id === reqId);
  if (!data) {
    res.status(404).json({
      message: "No such data dound to be updated",
    });
  }
  console.log(data);
  if (reqId > 0) {
    usersData[reqId - 1].name = req.body.name;
  } else if (reqId === 0) {
    usersData[reqId].name = req.body.name;
  }
  res.status(201).json({
    message: "Data Updated Successfully",
    data: usersData,
  });
});

router.delete("/delete/:id", (req, res) => {
  const reqId = req.params.id;
  const ind = usersData.findIndex((each) => each.id === parseInt(reqId));
  if (ind >= 0) {
    usersData.splice(ind, 1);
  }
  res.status(200).json({
    status: "success",
    results: usersData.length,
    data: {
      usersData,
    },
  });
});

module.exports = router;
