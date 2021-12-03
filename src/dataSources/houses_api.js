const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class HousesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.house_api_url;
    }

    async createInmueble(inmueble){
        inmueble = new Object(JSON.parse(JSON.stringify(inmueble)));
        return await this.post('/inmuebles', inmueble);
    }

    async inmueblesByUser(username){
        return await this.get(`/inmuebles/${username}`);
    }

    async inmueblesDisponibles(){
        return await this.get('/inmueblesDisponibles');
    }

    async arrendamientosByUser(username){
        return await this.get(`/arrendamientos/${username}`);
    }

    async createArrendamiento(arrendamiento){
        arrendamiento = new Object(JSON.parse(JSON.stringify(arrendamiento)));
        return await this.post('/arrendamientos', arrendamiento);
    }

    async deleteArrendamiento(id){
        return await this.delete(`/arrendamientos/${id}`)
    }
}

module.exports = HousesAPI