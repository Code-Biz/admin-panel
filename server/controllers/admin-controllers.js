const Users = require('../models/user-model.js');


//to use the error-middleware u must have to pass the next parameter and then you can use that next can be used to pass the error to your error-middleeware
const getAllUsers_Admin = async (req, res, next) => {
    try {
        const users = await Users.find({}, { pass: 0 });
        console.log(users);

        if (!users || users.length === 0) {
            return res.status(404).json({ msg: "User not found! => getAllUsers" })
        }
        return res.status(200).json(users)
    } catch (error) {
        //sending error to error Middleware
        next(error)
        console.log("Error Found at Catch Part => getAllUsers", error);

    }

};

const patchUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const { username, email, phone } = req.body;

        const updatedUser = await Users.findByIdAndUpdate(
            userId,
            { username, email, phone }, { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('PATHCUSER===> Error updating user:', error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("User Id to delete: ", id);

        await Users.deleteOne({ _id: id });

        return res.status(200).json({ msg: `User with id: ${id} has been deleted => admin-controllers` })

    } catch (error) {

        console.log(error);
    }
};

module.exports = { getAllUsers_Admin, deleteUser, patchUser }

