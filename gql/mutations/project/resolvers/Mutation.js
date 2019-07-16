const { users, nextId } = require('../data/db')

function UserIndex(filter) {
    if (!filter) return -1
    const { id, email } = filter
    if (id) {
        return users.findIndex(u => u.id === id)
    } else if (email) {
        return users.findIndex(u => u.email === email)
    }
    return -1
}

module.exports = {
    // { name, email, age }
    newUser(_, { dados }) {
        const alreadyRegistered = users.some(u => u.email === dados.email)

        if (alreadyRegistered) {
            throw new Error('E-mail already registered!')
        }

        const newU = {
            id: nextId(),
            ...dados,
            profile_id: 1,
            stats: 'ACTIVE'
        }
        users.push(newU)
        return newU
    },
    deleteUser(_, { filter }) {
        const i = UserIndex(filter)
        if (i < 0) return null
        const removed = users.splice(i, 1)
        return removed ? removed[0] : null
    },
    changeUser(_, { filter, dados }) {
        const i = UserIndex(filter)

        if (i < 0) return null

        const user = {
            ...users[i],
            ...args
        }

        users.splice(i, 1, user)
        return user
    }
}
