# 🚀 Guía de Despliegue - TurboMX VPN

Esta página está optimizada para funcionar en cualquier servidor VPS moderno.

## 🛠️ Opción A: VPS con Nginx (Altamente Recomendado)

Nginx es más eficiente para aplicaciones de alto tráfico como una VPN.

### 1. Preparar el servidor
```bash
sudo apt update
sudo apt install nginx -y
```

### 2. Subir tus archivos
Sube el contenido de la carpeta `dist` (que obtienes al correr `npm run build`) a la ruta: `/var/www/turbomx`

### 3. Configurar el bloque de servidor
Crea el archivo `/etc/nginx/sites-available/turbomx`:
```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com;
    root /var/www/turbomx;
    index index.html;

    # Manejo de rutas SPA (Importante para React/Vite)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Soporte para ads.txt
    location = /ads.txt {
        allow all;
        log_not_found off;
        access_log off;
    }

    # Optimización de archivos estáticos
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }

    # Seguridad: No permitir acceso a archivos ocultos
    location ~ /\. {
        deny all;
    }
}
```

### 4. Activar y reiniciar
```bash
sudo ln -s /etc/nginx/sites-available/turbomx /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🛠️ Opción B: VPS con Apache (cPanel / LAMP)

Si tu VPS usa Apache, el archivo `.htaccess` que he incluido en la carpeta `public` ya tiene todo lo que necesitas configurado automáticamente.

**Pasos:**
1. Genera la build: `npm run build`
2. Sube todo el contenido de `dist/` a tu carpeta `public_html`.
3. El archivo `.htaccess` se encargará de:
   - Forzar HTTPS.
   - Arreglar las rutas de la página.
   - Comprimir los archivos para que carguen más rápido.

---

**Contacto de Soporte:** alexishdzcabnas889@gmail.com