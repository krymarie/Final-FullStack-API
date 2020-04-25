exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "Client Name Example",
        content: "Details here...",
        phone: "801.555.5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const phone = req.body.phone;
  const insterestLevel = req.body.insterestLevel;
  // Create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
      phone: phone,
      insterestLevel: insterestLevel,
      creator: { name: "KrystalMitchell" },
      createdAt: new Date(),
    },
  });
};
