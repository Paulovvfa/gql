let id = 1
function nextId() {
  return id++
}

const profiles = [
    { id: 1, name: 'Comum' },
    { id: 2, name: 'Administrador' }
]

const users = [{ 
      id: nextId(), 
      name: 'Paulo Aragão', 
      email: 'paulo.aragao@cod3r.com.br', 
      age: 23, 
      real_salary: 8400, 
      profile_id: 2,
      stats: 'ACTIVE'
    }, { 
      id: nextId(), name: 'Lucas Galdino', 
      email: 'lucas.galdino@cod3r.com.br', 
      age: 22, 
      real_salary: 1, 
      profile_id: 1,
      stats: 'BLOCKED'
    }, { 
      id: nextId(), name: 'Arthur Bandeira', 
      email: 'arthur.bandeira@cod3r.com.br', 
      age: 23, 
      real_salary: 12300, 
      profile_id: 1,
      stats: 'INACTIVE'
    }
]

module.exports = { users, profiles, nextId }