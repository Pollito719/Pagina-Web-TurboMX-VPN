# 🚀 Guía de Despliegue Universal - TurboMX VPN

Esta aplicación está optimizada para funcionar en cualquier infraestructura de servidor. Sigue las instrucciones según tu tipo de hosting.

## 📁 Estructura para el Despliegue
Asegúrate de que los siguientes archivos estén en la raíz de tu servidor (`public_html`, `/var/www/html`, etc.):
- `index.html`
- `index.tsx`
- `.htaccess` (Fundamental para Apache)
- `ads.txt` (Fundamental para AdSense)
- `robots.txt`
- `sitemap.xml`

---

## 🛠️ Opción 1: Hosting Compartido (cPanel / HostGator / Bluehost)
1. Sube todos los archivos a la carpeta `public_html`.
2. El archivo `.htaccess` incluido configurará automáticamente:
   - Redirección a HTTPS.
   - Manejo de rutas internas de React (evita errores 404).
   - Compresión Gzip para carga rápida.
3. Verifica que `ads.txt` sea accesible en `tudominio.com/ads.txt`.

---

## 🛠️ Opción 2: Servidor VPS (Nginx - Ubuntu/Debian)
Crea o edita el archivo de configuración de tu sitio en `/etc/nginx/sites-available/turbomx`:

```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/turbomx; # Cambia esto a tu ruta real
    index index.html;

    # Soporte para React / SPA
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caché para archivos estáticos
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }

    # Asegurar ads.txt
    location = /ads.txt {
        allow all;
        log_not_found off;
        access_log off;
    }
}
```

---

## 🛠️ Opción 3: Vercel / Netlify / Firebase
- **Vercel**: El despliegue es automático gracias al archivo `vercel.json`.
- **Firebase**: Ejecuta `firebase deploy` usando el archivo `firebase.json` incluido.

---

## ⚠️ NOTA CRÍTICA PARA ADSENSE
Para que Google apruebe el sitio, **DEBES** reemplazar los IDs de ejemplo:
1. En `index.html`: Cambia `ca-pub-XXXXXXXXXXXXXXXX` por tu ID real.
2. En `ads.txt`: Cambia `pub-XXXXXXXXXXXXXXXX` por tu ID real.
3. Asegúrate de que el dominio en `sitemap.xml` y `robots.txt` sea el tuyo.

**Soporte:** alexishdzcabnas889@gmail.com