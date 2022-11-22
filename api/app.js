let express=require('express');
let mysql=require('mysql');
// Que el cliente Frontend pueda usar la API
let cors = requiere('cors')
let app=express();
// Recibir datos JSON
app.use(express.json())
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
              })
})
// Ruta para actualizar un articulo
app.put('/api/articulos/:id',function(req,res){
    let id = req.params.id
    let descripcion = req.body.descripcion
    let precio = req.body.precio
    let cantidad = req.body.cantidad
    let sql = "UPDATE articulos SET descripcion = ?,precio = ?, cantidad = ? WHERE id = ?";
    conexion.query(sql,[descripcion,precio,cantidad,id],
    function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
})
})
//Ruta para eliminat un articulo
app.delete('/api/articulos/:id',function(req,res){
    let id = req.params.id
    conexion.query('DELETE FROM articulos WHERE id = ?',[id],function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})