const { users } = require('../models');

const createUser = async (newUser) => {
    try {
        const user = await users.create(newUser);
        return user;
    } catch (error) {
        throw error;
    }
    }

const login = async (email) => {
    try {
        const user = await users.findOne({ where: { email } });
        return user;
    } catch (error) {
        throw error;
    }
    }

const updateUser = async (id, userData) => {
    const user = await users.update(userData, {
        where: { id }
    });
    return user;
    }

const deleteUser = async (id) => {
    const user = await users.destroy({
        where: { id },
    });
    return user;
    }

const getUserById = async (id) => {
    const user = await users.findByPk(id);
    return user;
    }


    module.exports = {
        createUser,
        updateUser,
        deleteUser,
        getUserById,
        login
    };