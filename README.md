# 🚀 Despliegue Universal - TurboMX VPN

Esta web está diseñada para ser compatible con **cualquier infraestructura**. Sigue estas instrucciones para ponerla en línea hoy mismo.

## 🛠️ Opción 1: Hosting Compartido (cPanel / HostGator / Bluehost)
1. Sube todos los archivos del directorio raíz a tu carpeta `public_html`.
2. Asegúrate de incluir el archivo `.htaccess` (es un archivo oculto, verifica que tu explorador de archivos lo muestre).
3. El `.htaccess` se encargará automáticamente de:
   - Forzar la conexión segura **HTTPS**.
   - Permitir que la navegación de la web funcione sin errores 404.
   - Activar la compresión para una velocidad de carga óptima.

---

## 🛠️ Opción 2: Servidor VPS (Nginx)
Si utilizas Nginx en Ubuntu/Debian, añade este bloque de configuración a tu sitio:

```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/turbomx;
    index index.html;

    # Manejo de rutas para React (Evita errores al refrescar)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Habilitar compresión Gzip para mayor velocidad
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
    
    # Cache para recursos estáticos
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }
}
```

---

## 🛠️ Opción 3: Plataformas Cloud (Vercel / Firebase)
- **Vercel**: Detectará automáticamente la configuración con el archivo `vercel.json` incluido.
- **Firebase**: Utiliza el archivo `firebase.json` y ejecuta `firebase deploy`.

---

**Soporte Técnico:**
- **Email:** alexishdzcabnas889@gmail.com
- **Telegram:** @internetGratisMexico