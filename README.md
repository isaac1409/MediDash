# MediDash

MediDash es un software diseñado para gestionar eficientemente la distribución de medicamentos en entornos hospitalarios. Este sistema facilita la coordinación entre el personal médico, mejora la disponibilidad de medicamentos y reduce los tiempos de espera de los pacientes. Con características que van desde el seguimiento de inventario hasta la optimización de la entrega de medicamentos.

## Configuración

### Node.js

Asegúrate de tener Node.js instalado en tu sistema.

#### Backend

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

#### Frontend

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

### PostgreSQL

Asegúrate de tener PostgreSQL instalado en tu sistema.

El servicio de PostgreSQL estará disponible en el puerto 5432.

## Docker

Si prefieres ejecutar la aplicación en contenedores Docker, sigue estos pasos:

1. Asegúrate de tener Docker instalado en tu sistema.

2. Clona este repositorio:

```bash
git clone https://github.com/TuUsuario/TuRepositorio.git
```

3. Navega al directorio del repositorio clonado:

```bash
cd TuRepositorio
```

4. Ejecuta el siguiente comando para iniciar los contenedores Docker:

```bash
docker-compose up
```

Esto iniciará los contenedores Docker para el backend, frontend y PostgreSQL.

## Validación

Una vez que hayas completado los pasos anteriores, puedes validar que la aplicación esté funcionando correctamente.

Abre un navegador web y visita las siguientes URL:

- Backend: [http://localhost:3001](http://localhost:3001)
- Frontend: [http://localhost:3002](http://localhost:3002)

Si todo está configurado correctamente, deberías ver la aplicación funcionando en tu navegador.
