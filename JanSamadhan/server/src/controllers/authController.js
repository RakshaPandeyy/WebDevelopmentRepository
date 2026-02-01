export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  res.status(201).json({
    success: true,
    message: "User registered",
  });
};
