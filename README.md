# Despliegue

Generar build corriendo `ng build --output-path docs`

Copiar archivo index.html autogenerado y renombrarlo como `404.html`. Revisar que su basePath sea "/"

Incluir un archivo `CNAME` dentro del directorio "docs" con el siguiente contenido `phantasmagorics-interiors.com`

Pushear rama main y dejar que el pipeline genere el deploy
