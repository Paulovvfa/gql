const { users, profiles } = require('../data/db')

module.exports = {
    users() {
        return users
    },
    user(_, { id }) {

        const selected = users.filter(u => u.id == id)
        return selected ? selected[0] : null
    },
    profiles() {
        return profiles
    },
    profile(_, { id }) {
        const selected = profiles.filter(p => p.id === id)
        return selected ? selected[0] : null
    }

}
