const model = require('../models/userTurnos')


// Trae todos los turnos de la db
const getUsers = async () => {
    
    const user = await model.find()
    
    return user
}

// Trae todos los turnos dias viernes. Para mostrarlos en la tabla viernes
const getUsersByDayViernes = async () => {
    
    const response = await model.find({
        dia: 'Viernes'
    });

    return response
};

// Trae todos los turnos dias sabados. Para mostrarlos en la tabla sabado
const getUsersByDaySabado = async () => {
    
    const response = await model.find({
        dia: 'Sabado'
    });

    return response
};

// Trae un registro por el id (CONTROLADOR SIN USO)
const getUserById = async (id) => {
    
    const user = await model.find({
        _id: id
    })

    return user
}

// Crea un turno nuevo
const postUser = async (data) => {
    
    const { name, lastName, number, dia, hora } = data;
    
    const user = await model.create({ name, lastName, number, dia, hora })
    
    return user
}

// Elimina un turno por el id
const deleteUser = async (id) => {
    
    const result = await model.deleteOne({
        _id: id
    })

    return {deleted: true}
}


module.exports = {
    getUsers,
    getUsersByDayViernes,
    getUsersByDaySabado,
    getUserById,
    postUser,
    deleteUser
};