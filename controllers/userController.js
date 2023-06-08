exports.create = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "signup successfull",
  });
};

exports.create_session = (req, res) => {
    res.status(200).json({
      status: 200,
      message: "login successfull",
    });
  };
