import axios from "axios";

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;

  const response = await axios.get("https://randomuser.me/api/?results=10");

  res.status(201).json(response.data);
};

export default createUserController;
