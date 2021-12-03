const { gql } = require('apollo-server');
const inmuebleTypeDefs = gql `
type Inmueble {
    id: String!
    propietario: String!
    area: Int!
    precio: Int!
    categoria: String!
    descripcion: String!
    disponible: Boolean!
}

input InmuebleInput {
    propietario: String!
    area: Int!
    precio: Int!
    categoria: String!
    descripcion: String!
    disponible: Boolean!
}
extend type Query {
    inmueblesByUser(username: String!) : [Inmueble]!
    inmueblesDisponibles : [Inmueble]!
}
extend type Mutation {
    createInmueble(inmueble: InmuebleInput!) : Inmueble!
}
`;
module.exports = inmuebleTypeDefs;