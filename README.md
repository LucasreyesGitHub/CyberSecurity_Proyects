# 🔐 Portafolio de Ciberseguridad – Despliegue Seguro de Sitio Web Estático

## 📌 Descripción del Proyecto

Este proyecto consiste en un sitio web estático, minimalista y responsive diseñado para mostrar proyectos de ciberseguridad.

Además de funcionar como portafolio profesional, el objetivo principal fue implementar medidas de seguridad defensiva desde el diseño, aplicando principios de **Secure by Design** y reducción de superficie de ataque.

---

# 🎯 Objetivos de Seguridad

El endurecimiento del sitio se enfocó en:

- Prevenir ataques de Cross-Site Scripting (XSS)
- Mitigar ataques de Clickjacking
- Evitar MIME Sniffing
- Forzar el uso de HTTPS
- Reducir superficie de ataque
- Mitigar abuso por automatización o spam
- Evitar exposición de datos sensibles

---

# 🛡 Controles de Seguridad Implementados

## 1️⃣ Content Security Policy (CSP)

Implementado mediante cabecera:

Content-Security-Policy: default-src 'self';


### ✔ Previene:
- Inyección de scripts externos maliciosos
- Ataques XSS
- Exfiltración de datos hacia dominios externos

Al permitir únicamente recursos del propio dominio (`'self'`), se elimina la confianza en fuentes externas.

---

## 2️⃣ Protección contra Clickjacking

X-Frame-Options: DENY


### ✔ Previene:
- Que el sitio sea embebido dentro de iframes
- Ataques de UI Redressing

---

## 3️⃣ Protección contra MIME Sniffing

X-Content-Type-Options: nosniff


### ✔ Previene:
- Interpretación incorrecta de tipos de contenido
- Ejecución accidental de archivos maliciosos

---

## 4️⃣ Referrer Policy

Referrer-Policy: no-referrer


### ✔ Previene:
- Filtrado de información de navegación
- Exposición de rutas internas

---

## 5️⃣ Enforzamiento de HTTPS

El despliegue se realiza sobre Vercel, que provee HTTPS automático.

### ✔ Previene:
- Ataques Man-in-the-Middle
- Interceptación de tráfico
- Ataques de downgrade

---

## 6️⃣ Mitigación básica de abuso (Rate Limiting en cliente)

Se implementó una lógica de cooldown de 2 segundos entre interacciones para evitar automatización simple o abuso de clics repetitivos.

### ✔ Mitiga:
- Automatización básica
- Intentos de abuso masivo
- Spam de solicitudes

⚠ Nota: Esta medida complementa, pero no reemplaza, un rate limiting del lado servidor.

---

## 7️⃣ Reducción de Superficie de Ataque

El sitio fue diseñado bajo el principio de mínima exposición:

- No utiliza CDN externos
- No usa librerías de terceros innecesarias
- No procesa formularios
- No almacena datos
- No expone APIs
- No utiliza base de datos

Esto elimina vectores como:

- SQL Injection
- API abuse
- Exposición de credenciales
- Inyección de dependencias vulnerables

---

# 🔍 Amenazas Consideradas y Mitigaciones

| Amenaza | Mitigación Aplicada |
|----------|--------------------|
| XSS | Content Security Policy |
| Clickjacking | X-Frame-Options |
| MIME Sniffing | X-Content-Type-Options |
| Intercepción de tráfico | HTTPS obligatorio |
| Abuso automatizado | Cooldown en cliente |
| Exposición de datos | Referrer-Policy + sin backend |

---

# 🧠 Filosofía de Seguridad Aplicada

El diseño del sitio se basó en:

> Minimizar dependencias.  
> Minimizar confianza.  
> Minimizar exposición.

Al tratarse de un sitio completamente estático, el riesgo estructural se reduce significativamente en comparación con aplicaciones dinámicas con backend.

---

# 🚀 Arquitectura de Despliegue

1. Código fuente alojado en GitHub
2. Pipeline de despliegue automático
3. Hosting estático en Vercel
4. HTTPS forzado
5. Headers de seguridad configurados

Esta arquitectura elimina riesgos asociados a:
- Configuraciones incorrectas de servidores
- Gestión insegura de bases de datos
- Manejo de sesiones
- Exposición de secretos

---

# 📊 Competencias Demostradas

Este proyecto demuestra conocimiento en:

- Seguridad en aplicaciones web
- Implementación de cabeceras HTTP de seguridad
- Modelado básico de amenazas
- Principios de hardening
- Despliegue seguro en entornos cloud
- Mentalidad defensiva orientada a Blue Team

---

# 🔐 Posibles Mejoras Futuras

- Implementación de rate limiting real del lado servidor
- Integración de WAF
- Monitorización de tráfico y análisis de logs
- Implementación de Subresource Integrity (SRI)
- Configuración avanzada de HSTS

---

# 🏁 Conclusión

Este proyecto no es únicamente un portafolio visual.

Es una demostración práctica de:

- Pensamiento orientado a seguridad
- Aplicación de controles defensivos reales
- Diseño con enfoque en reducción de riesgo
- Comprensión de amenazas web comunes


