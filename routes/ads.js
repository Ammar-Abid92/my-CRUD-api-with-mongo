const express = require("express");
const router = express.Router();

const ads = [
  {
    id: 1,
    title: "Phone",
    Price: 20000,
  },
  {
    id: 2,
    title: "iPhone",
    Price: 100000,
  },
  {
    id: 3,
    title: "Android Phone",
    Price: 50000,
  },
];
router.get("/all", (req, res) => {
  res.status(200).json({
    status: "success",
    results: ads.length,
    data: {
      ads,
    },
  });
});

router.post("/new", (req, res) => {
  const newID = ads[ads.length - 1].id + 1;
  const newAd = Object.assign({ id: newID }, req.body);
  ads.push(newAd);
  res.status(201).json({
    message: "Data added successfully",
    data: newAd,
  });
});

router.put("/update/:id", (req, res) => {
  const reqId = parseInt(req.params.id);
  const data = ads.filter((each) => each.id === reqId);
  if (!data) {
    res.status(404).json({
      message: "No such data dound to be updated",
    });
  }
  console.log(data);
  if (reqId > 0) {
    ads[reqId - 1].title = req.body.title;
  } else if (reqId === 0) {
    ads[reqId].title = req.body.title;
  }
  res.status(201).json({
    message: "Data Updated Successfully",
    data: ads,
  });
});

router.delete("/delete/:id", (req, res) => {
  const reqId = req.params.id;
  const id = ads.findIndex((each) => each.id === parseInt(reqId));
  if (id >= 0) {
    ads.splice(id, 1);
  }
  res.status(200).json({
    status: "success",
    results: ads.length,
    data: {
      ads,
    },
  });
});

module.exports = router;
