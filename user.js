const users = [
    {
        user: "mf1", password: "1234", activo: true, roles: [
            { id: 1, name: "rol1" },
            { id: 2, name: "rol2" }
        ]
    },
    {
        user: "mf2", password: "4321", activo: true, roles: [
            { id: 3, name: "rol3" },
            { id: 4, name: "rol4" }
        ]
    }
]

function list() {
    return users
}

function find(usuario, password) {
    return users.find(q => q.user === usuario && q.password == password)
}

module.exports = { list, find }