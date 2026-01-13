# Guía de Despliegue - TurboMX VPN

Sigue estos pasos para poner tu web en línea:

## 1. Solución al error de Build
Si `npm run build` falla, es porque faltan las dependencias locales. Ejecuta:
```bash
npm install
```

## 2. Despliegue en Firebase Hosting
Una vez que tengas Node.js instalado:

1. **Instalar Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```
2. **Login**:
   ```bash
   firebase login
   ```
3. **Build del proyecto**:
   ```bash
   npm run build
   ```
4. **Desplegar**:
   ```bash
   firebase deploy
   ```

## 3. Despliegue en Hosting Convencional (cPanel)
1. Ejecuta `npm run build`.
2. Sube todo el contenido de la carpeta `dist/` a tu servidor vía FTP o Administrador de Archivos.

---
**Nota:** Asegúrate de que tu `firebase.json` tenga `"public": "dist"` para que Firebase sepa qué archivos subir.