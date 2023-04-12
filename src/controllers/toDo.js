const Joi = require('joi');
const bcrypt = require('bcrypt');
const Users = require("./model");

const toDo = async (req, res) => {
    try {
      const { username, name, password, create_at, is_active } = req.body;
      const a = await Users.create(username, name, password, create_at, is_active);
      res.json({ a });
    } catch (error) {
      console.log(error);
    }
  };

const getToDo = async (req, res) =>{
    const {id} = req.params; 
    const user = await Users.find(id);
  res.status(200).json({ user });
};

const deleteToDo = async (req, res) =>{
    const { id } = req.params;
    // const { is_active } = req.body;

  await Users.deleteUser( id);
//   res.json({ messsage: "cvdscwdc" });
}
const updateUsers = async (req, res) => {
    const { id } = req.params;
    const { is_active,  } = req.body;
    await Users.updateToDo(is_active, id);
    
  };

const offsetLimit = (req, res) => {
   const {offset, limit} =req.query;
  await Users.offset(limit, offset)
}

const getByName = (req, res) => {
    const {name}= req.params;

    await Users.getName(name)
    res.status(200).json({name})
}
const getall = (req, res) => {
    const a = await Users.getAllUsers()
    res.status(200).json({a})
}

module.exports={
    toDo,
    getToDo,
    deleteToDo,
    updateUsers,
    offsetLimit,
    getByName,
    getall
}