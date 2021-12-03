const { gql } = require('apollo-server');
const arrendamientoTypeDefs = gql `

type Arrendamiento {
    id: String!
    id_inmueble: String!
    arrendatario: String!
}

input ArrendamientoInput {
    id_inmueble: String!
    arrendatario: String!
}

extend type Query{
    arrendamientosByUser(username: String!) : [Arrendamiento]!
}


extend type Mutation {
    createArrendamiento(arrendamiento: ArrendamientoInput!) : Arrendamiento!
    deleteArrendamiento(id: String!) : String
}

`

module.exports = arrendamientoTypeDefs;