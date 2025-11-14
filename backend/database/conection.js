const mongose = require ('mongoose');

const conection = async()=>{
    console.log('Desde conection, Intentando conectar');
    try {
        await mongose.connect("mongodb://127.0.0.1:27017/RegistroExp");
        console.log('::: EXITO , conectado a la BD :::')
    } catch (error) {
        console.log('Error', error);
        throw new error('::: ERROR No se ha podido establecer la conexión con la BD :::');
    }
}

module.exports = conection