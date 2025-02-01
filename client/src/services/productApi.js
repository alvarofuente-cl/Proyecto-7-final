import axios from 'axios';

//const URL_BASE = "https://aplicacion-backend-auth.onrender.com/api"; // desde aca deberiamos traer nuestros productos. desde el backend. tiene que llevar/api?????
const URL_BASE = "http://localhost:3000/api"
export const apiProductsClients = axios.create({
    baseURL: URL_BASE
})


export const getAllProducts = async () => {
    try {
        const { data } = await apiProductsClients.get('/product')
        
        return data
    } catch (error) {
        console.error(error)
    }
}


/* const objeto = {
    nombre: 'Juanito',
    apellido: 'Adasme',
    edad: 31,
    ocupacion: 'Dev'

}



const nombreObejto = objeto.nombre
const apellidoObjeto = objeto.apellido
const edadObjeto = objeto.edad
const ocupacion = objeto.ocupacion


//Destructuración o Destructuring
const { apellido } = objeto */