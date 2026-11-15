# Guía de Instalación y Uso: "Mi Tele" (PWA Accesible)

Esta aplicación fue diseñada específicamente para tu mamá, teniendo en cuenta sus hábitos (navegación vertical tipo WhatsApp y reproducción horizontal tipo YouTube) y su condición de **temblor esencial en la mano derecha**, ahora actualizada con **13 canales en vivo**, sistema de **múltiples fuentes automáticas** y nuevas categorías.

---

## 1. Características ergonómicas implementadas

* **Diseño adaptativo según orientación:**
  * **Modo Vertical (como WhatsApp):** Grilla ergonómica de 2 columnas con tarjetas gigantes (>140px de alto) con alto contraste, iconos claros y etiquetas grandes.
  * **Modo Horizontal (como YouTube):** Al girar la tablet para mirar la transmisión, el reproductor de video se expande automáticamente a pantalla completa.
* **Filtro de Categorías con botones grandes:**
  * **⭐ Todos (13):** Acceso rápido a toda la grilla completa.
  * **📺 Aire (6):** Telefe, El Trece, El Nueve, América TV, TV Pública, Canal Rural.
  * **📰 Noticias (5):** TN, C5N, A24, LN+, Crónica.
  * **⚽ Deportes (2):** TyC Sports, TNT Sports.
* **Filtro de temblor involuntario (Debounce & Touch Filter):**
  * Ignora pulsaciones repetidas por rebote del dedo en menos de 650 milisegundos.
  * Margen de deslizamiento de 35 px (un leve temblor al apoyar el dedo no cancela el toque ni lo confunde con un arrastre).
  * Feedback táctil con leve vibración (en dispositivos compatibles) y confirmación visual.
* **Arquitectura multi-fuente y auto-rescate:**
  * Cada canal cuenta con múltiples fuentes de respaldo (HLS directo 1080p, API Token, YouTube Live y Web Embeds).
  * Si una señal cae, el reproductor intenta la siguiente fuente automáticamente.
  * Botón gigante **"📡 CAMBIAR SEÑAL"** en el reproductor para alternar manualmente entre fuentes disponibles si una transmisión falla o se congela.
  * Auto-sincronización de señales activas en segundo plano vía listas IPTV-ORG.
* **Referrer dinámico anti-bloqueo:**
  * Configuración automática de política Referrer para evitar el Error 153 de YouTube y esquivar restricciones CORS en servidores HLS.
* **Cero publicidad y cero botones diminutos:**
  * Botón gigante **"⏭️ SALTEAR ANUNCIO"** para YouTube Live.
* **Botón "VOLVER" gigante y seguro:**
  * En color amarillo de alto contraste, ubicado en la **esquina superior izquierda**, alejado de su mano derecha para evitar toques accidentales.
* **Menú inferior táctil deslizable:**
  * Barra inferior horizontal en el reproductor para cambiar directamente entre los 13 canales sin tener que volver a la grilla principal.

---

## 2. Lista completa de canales (13 Señales)

1. **TN (Todo Noticias)** — Artear HLS Directo 1080p / Proxy IP
2. **Telefe (Canal 11)** — Token API Oficial Mediastream
3. **C5N (Noticias 24hs)** — YouTube Live Oficial con Auto-Heal
4. **El Trece (Canal 13)** — VodGC HLS Directo 1080p
5. **El Nueve (Canal 9)** — YouTube Live Oficial
6. **América TV (Canal 2)** — Señal Directa 720p / YouTube Live Oficial / Reproductor Oficial Edge-Apps
7. **A24 (América 24)** — YouTube Live Oficial
8. **TV Pública (Canal 7)** — YouTube Live Oficial / Edge-Access HLS Directo
9. **LN+ (La Nación +)** — YouTube Live Oficial
10. **Crónica TV** — YouTube Live Oficial
11. **Canal Rural** — YouTube Live Oficial
12. **TyC Sports** — VodGC Oficial 1080p (AR) / Amagi Global 1080p (Int/USA)
13. **TNT Sports** — FullTV HD 1080p

---

## 3. Cómo instalarla en la tablet de tu mamá (como App nativa)

Para que funcione como una aplicación independiente con su propio ícono en el escritorio (sin barra de direcciones ni pestañas de navegador):

### Opción A: Botón automático de 1 toque en la pantalla
Al abrir la página en Chrome en la tablet, aparecerá arriba un cartel gigante amarillo:
**📲 TOCÁ ACÁ PARA GUARDAR "MI TELE" EN TU PANTALLA**
Al tocarlo, se instala automáticamente en el escritorio.

### Opción B: Menú de Google Chrome
1. Abrí **Google Chrome** en la tablet e ingresá a la URL de la web.
2. Tocá los **tres puntos verticales (⋮)** arriba a la derecha.
3. Seleccioná **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
4. Confirmá el nombre: **"Mi Tele"**.

---

## 4. Ajustes recomendados en la tablet de tu mamá

Para complementar la aplicación y facilitarle el uso en Android:

1. Ingresá a **Ajustes > Accesibilidad > Interacción y destreza**.
2. **Retardo al mantener pulsado (Touch and hold delay):** Seleccionar "Largo" (evita que un toque tembloroso abra menús secundarios no deseados).
3. **Ignorar pulsaciones repetidas (Ignore repeated taps):** Activar y configurar en 0.4 o 0.5 segundos.
4. En **Ajustes > Pantalla**: Activar **"Giro automático"** para que rote naturalmente de vertical a horizontal cuando quiera ver el video en grande.
