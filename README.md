# MediDash

MediDash es un software diseñado para gestionar eficientemente la distribución de medicamentos en entornos hospitalarios. Este sistema facilita la coordinación entre el personal médico, mejora la disponibilidad de medicamentos y reduce los tiempos de espera de los pacientes. Con características que van desde el seguimiento de inventario hasta la optimización de la entrega de medicamentos.

## Configuración

## Docker

Para ejecutar la aplicación en contenedores Docker, sigue estos pasos:

1. Asegúrate de tener Docker instalado en tu sistema.

2. Clona este repositorio:

```bash
git clone https://github.com/isaac1409/MediDash.git
```

3. Navega al directorio del repositorio clonado:

```bash
cd MediDash
```

4. Descarga las dependencias necesarias para que levante Node.js:
Instala las dependencias del backend:

```bash
cd backend
npm install
```

```bash
cd medidash
npm install
```


5. Ejecuta el siguiente comando para iniciar los contenedores Docker:

```bash
docker-compose up
```

Esto iniciará los contenedores Docker para el backend, frontend y PostgreSQL.

### PostgreSQL

Asegúrate de tener PostgreSQL instalado en tu sistema.

El servicio de PostgreSQL estará disponible en el puerto 5433.

Si es primera vez que ejecutas el contenedor en este equipo, sera necesario que sigas la siguiente serie de pasos para validacion del contenedor de Postgresql y creacion de usuarios.

1. Accede al contenedor de PostgreSQL:

``` bash
docker exec -it medidash-postgres bash
```

2. Conéctate a la base de datos como el usuario predeterminado postgres:

``` bash
psql -U postgres
```

3. Creacion de Usuarios en la base de datos:

Ejecuta el siguiente comando segun el usuario deseado:

``` bash
CREATE ROLE nombre_usuario WITH LOGIN PASSWORD 'contraseña';
```

4. Verificar la conexion del usuario:

Puedes verificar que el usuario pueda conectarse a la base de datos ejecutando el siguiente comando.

``` bash
psql -U nombre_usuario -d medidash_db -h localhost -p 5433
```


5. Asignacion de privilegios:

Asigna los privilegios al usuario:

``` bash
GRANT ALL PRIVILEGES ON DATABASE medidash_db TO nombre_usuario;
```

6. Sal de la consola de PostgreSQL y luego del contenedor:

``` bash
\q
exit
```

Con estos pasos, has creado un nuevo usuario en tu instancia de PostgreSQL dentro del contenedor Docker y le has otorgado los permisos necesarios para acceder y trabajar con la base de datos medidash_db. Ahora puedes usar este usuario para conectarte a la base de datos desde aplicaciones u otras herramientas de administración.

**Nota: Si asi lo deseas, puedes instalar un cliente grafico como lo es DBeaver, para evitar el uso de comandos directos en terminal**

**Nota: Para instalacion de DBeaver ir al final**

## Validación de la App

Una vez que hayas completado los pasos anteriores, puedes validar que la aplicación esté funcionando correctamente.

Abre un navegador web y visita las siguientes URL:

- Backend: [http://localhost:3001](http://localhost:3001)
- Frontend: [http://localhost:3002](http://localhost:3002)

Si todo está configurado correctamente, deberías ver la aplicación funcionando en tu navegador.

### Validaion manual
Para para validar de manera manual cada dependencia tanto del Backend como del Frontend, sigue los siguientes pasos:

### Node.js

Asegúrate de tener Node.js instalado en tu sistema.

### Backend

El backend se ejecutará en el puerto 3001.

Instala las dependencias del backend:

```bash
cd backend
npm install
```

Ejecuta el backend:

```bash
npm start
```

### Frontend

El frontend se ejecutará en el puerto 3002.

Instala las dependencias del frontend:

```bash
cd medidash
npm install
```

Ejecuta el frontend:

```bash
npm start
```

### Instalacion DBeaver

1. Descargar e instalar DBeaver: Si aún no tienes DBeaver instalado, puedes descargarlo desde el sitio web oficial: [DBeaver.io.](https://dbeaver.io/) Sigue las instrucciones de instalación para tu sistema operativo.

2. Abrir DBeaver: Una vez instalado, abre DBeaver en tu computadora.

3. Crear una nueva conexión a PostgreSQL:

    * Haz clic en el menú "Database" en la parte superior de la ventana.
    * Selecciona "New Database Connection".
    * En el cuadro de diálogo que aparece, selecciona "PostgreSQL" como el tipo de base de datos.

4. Configurar la conexión:

    * En la pestaña "General", introduce un nombre para la conexión (por ejemplo, "Mi Base de Datos PostgreSQL").
    * En la pestaña "Connection", ingresa los detalles de la conexión:
    * Host: localhost o la dirección IP de tu servidor de base de datos.
    * Port: 5433 o el puerto en el que se está ejecutando PostgreSQL (según tu configuración).
    * Database: medidash_db o el nombre de tu base de datos.
    * Username: isaacmun o el nombre de usuario que has creado en tu base de datos.
    * Password: Ingresa la contraseña del usuario que has creado.

5. Probar la conexión: Haz clic en el botón "Test Connection" para verificar si la conexión se establece correctamente. Si todo está configurado correctamente, deberías ver un mensaje indicando que la conexión fue exitosa.

6. Guardar la conexión: Si la conexión se establece correctamente, haz clic en "Finish" para guardar la configuración de la conexión.

Una vez que hayas completado estos pasos, deberías poder ver tu conexión en el panel izquierdo de DBeaver y expandirla para explorar las tablas y ejecutar consultas SQL en tu base de datos PostgreSQL.
