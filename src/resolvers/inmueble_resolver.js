const inmuebleResolver = {
    Query: {
        inmueblesByUser: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.housesAPI.inmueblesByUser(username)
            else
                return null
                
            },
        inmueblesDisponibles: (_, {}, {dataSources}) => dataSources.housesAPI.inmueblesDisponibles()
    },

    Mutation: {
        createInmueble: async (_, {inmueble}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (inmueble.propietario == usernameToken)
                return dataSources.housesAPI.createInmueble(inmueble)
            else
                return null
        }
    }
}

module.exports = inmuebleResolver