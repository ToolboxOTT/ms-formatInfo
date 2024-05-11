# MS-formatinfo

Es proyecto toma información de unas API's externas y realiza un formateo sobre la información recibida.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Rutas y Endpoints](#rutas-y-endpoints)
4. [Ejemplos](#ejemplos)
5. [Contribución](#contribución)
6. [Licencia](#licencia)
7. [Contacto](#contacto)

## Instalación

    1. Clona el repositorio:
    
    git clone https://github.com/ToolboxOTT/ms-formatInfo.git

    2. Instala las dependencias:

    npm install

## Uso
    Para iniciar el servidor, ejecuta el siguiente comando:

    npm start    

    o por medio de Docker Compose
    
    docker compose up --build 

    El servidor estará disponible en http://localhost:3000.

## Rutas y Endpoints
    Aquí se describen las rutas y endpoints de tu API. Por ejemplo:

    /api/v1/files/data: Obtiene información de un API externa y la reformatea la información recibida.
    /api/v1/files/data?fileName=test1.csv: se agrega un filtro por queryparam para poder pedir los datos de un archivo especifico.
    /api/v1/files/list: Obtiene lista de archivos disponibles. 

## Ejemplos
    Ejemplo de como podemos usar las API's: 

    // Ejemplo de solicitud HTTP utilizando fetch API
    fetch('http://localhost:3000/api/v1/files/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

## Contribución
    Si quieres contribuir al proyecto, sigue estos pasos:

        1. Haz un fork del repositorio.
        2. Crea una nueva rama (git checkout -b feature)
        3. Haz tus cambios y confirma (git commit -am 'Agrega una nueva función')
        4. Empuja a la rama (git push origin feature)
        5. Crea una nueva solicitud de extracción.

## Contacto
    Para cualquier pregunta o comentario, no dudes en contactarme a través de betobustamante.ef@gmail.com o visita mi perfil en [https://github.com/betobustamante].
