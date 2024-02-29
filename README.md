# MediDash
MediDash is software designed to efficiently manage medication distribution in hospital environments. This system facilitates coordination between medical staff, improves the availability of medications and reduces patient waiting times. With features ranging from inventory tracking to medication delivery optimization

## Config Node.js
puerto 3001

## Config Postgresql
password:medidash
puerto 5432

## Valida su funcionamiento


Instala el gestor de dependencias de Node.js
```bash
npm install
```

Instala dependencia para postgresql (esto en caso de que clone el repo nuevamente y no lo tengas instalado)
```bash
npm install pg
```

Ejecuta la aplicacion 

``` bash
    node server.js
```

Despues inicia el contenedor

``` bash
    docker-compose up

```
