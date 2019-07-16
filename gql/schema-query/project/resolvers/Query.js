const { users, profiles } = require('../data/db')

module.exports = {
    loggedUser(obj) {
        console.log(obj)
        return {
            id: 1,
            name: 'Paulo Victor Vasconcelos Farias Aragão',
            email: 'paulovfaragao@hotmail.com',
            age: 22,
            real_salary: 700.00,
            vip: true
        }
    },
    featuredProduct(product) {
        return {
            name: 'Car',
            price: 9500,
            discount: 0.15
        }
    },
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
