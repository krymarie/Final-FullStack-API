exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "Mary Jane",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "2",
        title: "Dean Damajio",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "3",
        title: "Frank Santino",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "4",
        title: "Bobby Delarentes",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "5",
        title: "Kate Natuir",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "6",
        title: "Aretha Francis",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "7",
        title: "Franklin Rosanto",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "8",
        title: "Dannette Damajio",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "9",
        title: "Francisco Santion",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "10",
        title: "Bruce Delarentes",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "11",
        title: "Francico Santino",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "12",
        title: "Katherine Naturi",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "14",
        title: "Arron Francis",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "15",
        title: "Franny Rosannto",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "16",
        title: "Melanie Francis",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "17",
        title: "Melissa Jane",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "18",
        title: "Dan Damajio",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "19",
        title: "Flow Santino",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "20",
        title: "Bennett Delarentes",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "21",
        title: "Kate Naturi",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "22",
        title: "Alison Francis",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "23",
        title: "Frosty Rosanto",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "24",
        title: "Marty Francis",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
        insterestLevel: "3",
        creator: {
          name: "KrystalMitchell",
        },
        createdAt: new Date(),
      },
      {
        _id: "25",
        title: "Georgio Pultine",
        content: "Buyer seems very interested but need space to decide",
        phone: "801-555-5555",
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
      _id: new Date().toISOString(),
      title: title,
      content: content,
      phone: phone,
      insterestLevel: insterestLevel,
      creator: { name: "KrystalMitchell" },
      createdAt: new Date(),
    },
  });
};

exports.updatePost = async (req, res, next) => {
  const postId = req.params.postId;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  const phone = req.body.phone;
  const insterestLevel = req.body.insterestLevel;
  try {
    const post = await Post.findById(postId).populate("creator");
    if (!post) {
      const error = new Error("Could not find post.");
      error.statusCode = 404;
      throw error;
    }
    if (post.creator._id.toString() !== req.userId) {
      const error = new Error("Not authorized!");
      error.statusCode = 403;
      throw error;
    }
    if (imageUrl !== post.imageUrl) {
      clearImage(post.imageUrl);
    }
    post.title = title;
    post.content = content;
    post.phone = phone;
    post.insterestLevel = insterestLevel;
    const result = await post.save();
    io.getIO().emit("posts", { action: "update", post: result });
    res.status(200).json({ message: "Post updated!", post: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error("Could not find post.");
      error.statusCode = 404;
      throw error;
    }
    if (post.creator.toString() !== req.userId) {
      const error = new Error("Not authorized!");
      error.statusCode = 403;
      throw error;
    }
    // Check logged in user
    await Post.findByIdAndRemove(postId);

    const user = await User.findById(req.userId);
    user.posts.pull(postId);
    await user.save();
    io.getIO().emit("posts", { action: "delete", post: postId });
    res.status(200).json({ message: "Deleted post." });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
