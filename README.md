## Esquema de base de datos para aplicación Consunet.

### Prerrequisitos

- Instalar Node JS.
- Instalar npm.
- Instalar TypeScript.
- Instalar PostgreSQL.
- Instalar PgAdmin 4 (opcional).

### Ejecutar el proyecto

1. Clona el repositorio.

```sh
git clone git@github.com:danielRamosMencia/consunet-db.git
```

```sh
git clone https://github.com/danielRamosMencia/consunet-db.git
```

2. Instalar las dependencias del proyecto.

```sh
npm install
```

3. Generar el cliente de prisma.

```sh
npx prisma generate
```

4. Ejecutar las migraciones.

```sh
npx prisma migrate dev
```

```sh
npx prisma migrate deploy
```
