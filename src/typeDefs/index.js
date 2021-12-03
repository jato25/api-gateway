const inmuebleTypeDefs = require('./inmueble_type_defs');
const arrendamientoTypeDefs = require('./arrendamiento_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, inmuebleTypeDefs, arrendamientoTypeDefs];
//Se exportan
module.exports = schemasArrays;