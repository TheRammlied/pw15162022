let express=require('express');
let mysql=require('mysql');
let app=express();
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor en Linea")
})

//Base de datos
//Parametros de conexion
let conexion = mysql.createConnection({
host: '192.168.64.2',
user: 'pw',
password: '12345678',
database: 'pw'
})
//Conectarnos a la base de datos
conexion.connect(function(error){
if(error){
    throw error
}else{
    console.log('Conectado a la BD');
}
})
//Rutas de acceso
app.get('/', function(req,res){
    res.send('Ruta de inicio');
})
//Todos los articulos
app.get('/api/articulos/',function(req,res){
    conexion.query("SELECT * FROM ARTICULOS WHERE id=?",function(error,filas){
        if(error){
            throw error
        }else{
         res.send(filas)
        }
    })
})
//Agregar un articulo
app.post('/api/articulos',function(req,res){
    let data={descripcion:req.body.descripcion,
              precio:req.body.precio,
              cantidad:req.body.cantidad}
              let sql = "INSERT INTO articulos SET ?"
              conexion.query(sql,data,function(error,results){
                if(error){
                    throw error
                }else{
                    res.send(results)
                }
              }
})