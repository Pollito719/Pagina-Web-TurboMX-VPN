# Guía de Despliegue - TurboMX VPN

Si el comando `npm run build` no funciona, sigue estos pasos:

1. **Instalar Node.js**: Descárgalo en [nodejs.org](https://nodejs.org/).
2. **Abrir Terminal**: Abre la terminal en la carpeta del proyecto.
3. **Instalar dependencias**:
   ```bash
   npm install
   ```
4. **Construir el proyecto**:
   ```bash
   npm run build
   ```
5. **Subir al Hosting**: Copia todo el contenido de la carpeta `dist/` que se acaba de crear y súbelo a tu hosting (dentro de `public_html` o similar).

¡Tu web ya estará en línea!