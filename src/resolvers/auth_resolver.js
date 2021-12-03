const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null
        },
    },
    Mutation: {
        signUpUser:(_, { userInput }, { dataSources }) => 
             dataSources.authAPI.createUser(userInput),
        logIn: (_, { credentials }, { dataSources }) => 
            dataSources.authAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),
    }
};

module.exports = usersResolver;