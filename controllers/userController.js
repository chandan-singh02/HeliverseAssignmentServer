const User = require("../model/userModel");

exports.user = async (req, res, next) => {
  try {
    let result = await User.create(req.body);
    res.send(result);
  } catch (error) {
    // Handle errors
    res.status(500).send("Error creating product: " + error.message);
  }
};

exports.getallusers = async (req, res) => {
  const search = req.query.search || "";
  const gender = req.query.gender || "";
  const available = req.query.available || "";
  const page = req.query.page || 1;
  const ITEM_PER_PAGE = 20;

  const query = {};

  // Add search conditions
  if (search) {
    query.$or = [
      { first_name: { $regex: search, $options: "i" } },
      { last_name: { $regex: search, $options: "i" } },
    ];
  }

  if (gender) {
    query.gender = gender;
  }

  if (available) {
    query.available = available;
  }

  try {
    const skip = (page - 1) * ITEM_PER_PAGE;

    const count = await User.countDocuments(query);
    // console.log(query);

    const usersdata = await User.find(query).limit(ITEM_PER_PAGE).skip(skip);

    const pageCount = Math.ceil(count / ITEM_PER_PAGE);

    res.status(200).json({
      Pagination: {
        count,
        pageCount,
        currentPage: page,
      },
      usersdata,
    });
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.singleuser = async (req, res, next) => {
  try {
    let result = await User.findOne({ _id: req.params.id });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ result: "No Record Found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.deleteuser = async (req, res, next) => {
  try {
    // Use findById to find a single user by ID
    let result = await User.findById(req.params.id);
    if (result) {
      // If the user is found, delete it
      await User.deleteOne({ _id: req.params.id });
      res.json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "No Record Found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.updateuser = async (req, res, next) => {
  try {
    let result = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (result) {
      res.json({ message: "Product updated successfully" });
    } else {
      res.status(404).json({ error: "No Record Found or no changes made." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.searchuser = async (req, res, next) => {
  try {
    let result = await User.find({
      $or: [
        { first_name: { $regex: req.params.key } },
        {
          last_name: { $regex: req.params.key },
        },
      ],
    });
    res.status(201).json({ status: "success", data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
