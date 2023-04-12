const {fetch, fetchOne} = require("../utils/pg");

const createToDo = "insert into users( user_username, user_name, user_password, create_at, is_active )values($1, $2, $3, $4, $5)"
const getUsers = "select * from users where user_id = $1 "
const getByName = 'select * from users where user_name = $1'
const updateUser = "update users SET is_active =$1  where user_id=$2"
const deleteUserById = "delete from users where user_id = $1 "
const limitOffset = "SELECT * FROM users offset $1 limit $2"
const all = 'select *from users'
const create = ( username,name, password, create_at, is_active ) => fetchOne(createToDo, username,name, password, create_at, is_active)
const find = (id) => fetchOne(getUsers, id)
const getAllUsers = ()=>fetch(all)
const deleteUser = (id) => fetchOne(deleteUserById , id)
const updateToDo = (is_active, id) => fetchOne(updateUser, is_active, id)
const offset = (offset, limit) =>(limitOffset, offset, limit)
const getName = (name) => fetchOne(getByName, name)
module.exports ={
    create,
    find,
    updateToDo,
    deleteUser,
    offset,
    getName,
    getAllUsers,
}