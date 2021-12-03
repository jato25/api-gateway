const inmuebleResolver = require('./inmueble_resolver');
const arrendamientoResolver = require('./arrendamiento_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(inmuebleResolver, arrendamientoResolver, authResolver);

module.exports = resolvers;