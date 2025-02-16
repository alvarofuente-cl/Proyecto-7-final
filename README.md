# Proyecto-7-final
# PROYECTO 7: Backend con Autenticación y método de pago.

Este proyecto es una API REST diseñada para gestionar usuarios y productos, incorporando autenticación mediante JWT, documentación con Swagger y conexión a MongoDB para el almacenamiento de datos.

---

## Descripción del Proyecto

El objetivo principal fue crear una aplicación backend que gestione la autenticación y autorización de usuarios utilizando JWT (JSON Web Tokens) en un entorno Node.js.

La aplicación está estructurada con dos modelos principales: uno para **Usuario** y otro para **Producto**. Los usuarios pueden registrarse, iniciar sesión, verificar y actualizar sus datos. Para los productos, se implementó el conjunto completo de operaciones CRUD (Crear, Leer, Actualizar, Eliminar). MongoDB y Mongoose se utilizaron para la persistencia y gestión de datos.

La documentación de la API se realizó utilizando Swagger para facilitar su comprensión y uso.

---

## Estructura del Proyecto

```bash
Proyecto/
├── .gitignore              # Especifica archivos y carpetas a ignorar en el control de versiones.
├── node_modules/           # Directorio generado por npm con las dependencias instaladas.
├── package.json            # Contiene las dependencias y metadatos del proyecto.
├── package-lock.json       # Asegura la consistencia de las dependencias instaladas.
├── index.js                # Archivo principal que inicia el servidor.
├── .env                    # Variables de entorno (PORT, MONGO_URI, JWT_SECRET, MERCADOPAGO_ACCESS_TOKEN).
├── config/
│   ├── db.js               # Configuración de la conexión a MongoDB.
│   └── mercadopago.js      # Configuración del cliente de MercadoPago.
├── controllers/
│   ├── userController.js    # Lógica de negocio para usuarios.
│   ├── productController.js # Lógica de negocio para productos.
│   └── paymentController.js # Lógica de negocio para pagos con MercadoPago.
├── middleware/
│   └── authMiddleware.js    # Middleware para autenticación de usuarios.
├── models/
│   ├── userModel.js         # Modelo de datos para usuarios.
│   └── productModel.js      # Modelo de datos para productos.
├── routes/
│   ├── userRoutes.js        # Rutas relacionadas con usuarios.
│   ├── productRoutes.js     # Rutas relacionadas con productos.
│   └── paymentRoutes.js     # Rutas relacionadas con pagos.

```
## Requisitos
Para ejecutar este proyecto, requieres:

-Node.js (versión 14 o superior)

-NPM (gestor de paquetes de Node.js)

-MongoDB Atlas (base de datos en la nube de MongoDB)

-Un editor de código (Visual Studio Code)


---

## Configuracion de MongoDB Atlas
1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Crea un nuevo clúster y una base de datos.
3. Añade un usuario con permisos de lectura y escritura para la base de datos.
4. Copia la URL de conexión y configúrala en el archivo `.env` 

---

## Instalacion del Proyecto

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/alvarofuente-cl/Proyecto-7-final.git
   cd Aplicacion-Backend-Auth
   ```

2. Instala las dependencias:

* Npm: npm install
*	Express : npm i express
*	Dotenv:  npm i dotenv
*	Cors: npm i cors
*	Jsonwbtoken:  npm i jsonwebtoken
*	Bcript: npm i bcryptjs
*	Mongoose: npm i mongoose
*	Swagger: npm i swagger-jsdoc swagger-ui-express
* Instalacion SDK de MercadoPago: npm i mercadopago 



3. Configura las variables de entorno creando un archivo `.env`
```
PORT=5000
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta
MERCADOPAGO_ACCESS_TOKEN= TU_ACCESS_TOKEN
```
- Asegúrate de proporcionar un URI válido para MONGO_URI y una clave segura para JWT_SECRET 
- Reemplaza `<username>` y `<password>` con tus credenciales de MongoDB Atlas.
- 
---

## Instrucciones para Ejecutar el Proyecto

1. Inicia el servidor:

```bash
node index.js
```
- El servidor esta corriendo
- Documentación disponible en http://localhost:3000/api-docs    
- Conectado a la base de datos: autenticacion_db

## Documentacion de la API
La API utiliza Swagger para su documentación

## Rutas principales

### Usuarios
- **Descripcion**: Registrar un usuario. 
- **Ruta**: /api/user/register   
- **Método**: POST
- **Body** (JSON):
```bash
{
  "nombre": "Alvaro Fuentes",
  "email": "alvarofuente@example.com",
  "password": "12345678"
}
```

- **Descripcion**: inicio de sesion. 
- **Ruta**: /api/user/login   
- **Método**: POST
- **Body** (JSON):
```bash
{
  "email": "alvarofuente@example.com",
  "password": "12345678"
}
```
Respuesta esperada: "inicio de sesion exitoso"
"Token": Tu Token copiado del inicio de sesion. 
Luego se copia el token para usarlo en las siguientes solicitudes    

{ 
  "email": "fuentes@example.com",
  "password": "123456789"
}

- **Descripcion**: Verificar token. 
- **Ruta**: /api/user/verify   
- **Método**: GET
- **Header**:
    - Key: x-auth-token
    - Value: insertar token copiado previamente

- **Descripcion**: Actualizar un usuario. 
- **Ruta**: /api/user/update  
- **Método**: PUT
- **Headers**:
    - Key: x-auth-token
    - Value: insertar token copiado previamente
- **Body** (JSON):
```bash
{
  "nombre": "Alvaro Fuentes",
  "email": "alvarofuente@example.com",
  "password": "newpassword123"
}
```

### Productos
**Descripcion**: Crear un nuevo producto. 
- **Ruta**: /api/product/   
- **Método**: POST
- **Headers**:
    - Key: x-auth-token
    - Value: insertar token copiado previamente
- **Body** (JSON):
```bash
{
  "name": "bicicleta mtb",
  "description": "Bicicleta Cross Country elite",
  "price": 1.800.000
}
```

**Descripcion**: Obtener todos los productos
- **Ruta**: /api/product/   
- **Método**: GET


**Descripcion**: Obtener un producto por ID
- **Ruta**: /api/product/:id  (pegar el id del producto copiado previamente) 
- **Método**: GET


**Descripcion**: Actualizar un producto 
- **Ruta**: /api/product/:id (pegar el id del producto copiado previamente)   
- **Método**: PUT
- **Headers**:
    - Key: x-auth-token
    - Value: insertar token copiado previamente cuando inicie la sesion
- **Body** (JSON):
```bash
{
  "name": "Producto A actualizado",
  "description": "Descripción actualizada",
  "price": 1500.75
}
```

**Descripcion**: Eliminar un producto 
- **Ruta**: /api/product/:id (pegar el id del producto copiado previamente)   
- **Método**: DELETE
- **Headers**:
    - Key: x-auth-token
    - Value: insertar token copiado previamente cuando inicie la sesion

**Descripcion**
- **Ruta**: /api/paymen/create_preference
- **Metodo**: POST
- **Body**:
  ```bash
  {
    "cart":[
        {
            "nombre": "producto1",
            "precio": 100,
            "quantity": 3
        }
    ]
  }
  ```
## Implementacion mercadopago:
   - npm i mercadopago
   - config/mercadopago.js
   - copio Access Token en archivo  .env 
 - crear controlador: 
    - estructura de cart debe ser igual a al carrito de front
    - estructura de url deben comunicarse con el front

- errores
- controlados por middlewares

- crear rutas para el controlador
- copio ruta en el index
-Para probar con postman
{
    "cart":[
        {
            "nombre": "producto1",
            "precio": 100,
            "quantity": 3
        }
    ]
}

name (tipo Text): bicicleta Trek Elite
description (tipo Text): Bicicleta Cross Country elite
price (tipo Text): 1800000
photos (tipo File): adjunta la imagen.

Ahora en el front 
- npm i @mercadopago/sdk-react

- en config creo archivo mercadopago..js
- variables de entorno VITE_MP_PUBLIC_KEY= public key
## Licencia

Este proyecto está bajo la Licencia MIT.
## Autor

Proyecto desarrollado por [Alvaro Fuentes Keim](https://github.com/alvarofuente-cl)
