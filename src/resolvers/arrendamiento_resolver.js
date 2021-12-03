const arrendamientoResolver = {

    Query: {
        arrendamientosByUser: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.housesAPI.arrendamientosByUser(username)
            else
                return null
        }
    },
    Mutation: {
        createArrendamiento: async (_, { arrendamiento }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (arrendamiento.arrendatario == usernameToken)
                return await dataSources.housesAPI.createArrendamiento(arrendamiento)
            else
                return null
        },
        deleteArrendamiento: (_, {id}, {dataSources}) =>
            dataSources.housesAPI.deleteArrendamiento(id)
    }

}

module.exports = arrendamientoResolver