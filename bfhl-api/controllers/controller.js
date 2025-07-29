const data = require("../models/model");

const handlePost = (req, res) => {
  try {
    const input = req.body.data;
    const finalObj = data(input);

    res.status(200).json({
      is_success: true,
      ...finalObj,
    });
  } catch (e) {
    console.log("Something went wrong:", e);
    res.status(500).json({
      is_success: false,
      message: "failed to proceed",
    });
  }
};

module.exports = handlePost ;
