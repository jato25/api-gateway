const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const HousesAPI = require('./dataSources/houses_api');
const AuthAPI = require('./dataSources/auth_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    dataSources: () => ({
        housesAPI: new HousesAPI(),
        authAPI: new AuthAPI(),
    })
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

