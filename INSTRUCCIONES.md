# Guía de Instalación y Uso: "Mi Tele" (PWA Accesible)

Esta aplicación fue diseñada específicamente para tu mamá, teniendo en cuenta sus hábitos (navegación vertical tipo WhatsApp y reproducción horizontal tipo YouTube) y su condición de **temblor esencial en la mano derecha**.

---

## 1. Características ergonómicas implementadas

* **Diseño adaptativo según orientación:**
  * **Modo Vertical (como WhatsApp):** Muestra una cuadrícula de 2 columnas x 3 filas con los 6 canales exactos (*TN, Telefe, C5N, El Trece, TV Pública y Canal Rural*). Las tarjetas son gigantes (>140px de alto) y caben enteras en pantalla sin obligarla a hacer scroll.
  * **Modo Horizontal (como YouTube):** Al girar la tablet para mirar la transmisión, el reproductor de video se expande automáticamente a pantalla completa.
* **Filtro de temblor involuntario (Debounce & Touch Filter):**
  * Ignora pulsaciones repetidas por rebote del dedo en menos de 650 milisegundos.
  * Margen de deslizamiento de 30 px (un leve temblor al apoyar el dedo no cancela el toque ni lo confunde con un arrastre).
  * Feedback táctil con leve vibración (en tablets compatibles) y borde blanco que confirma visualmente que el canal fue presionado.
* **Cero publicidad y cero botones diminutos:**
  * No existen banners ni ventanas emergentes con "X" microscópicas.
* **Botón "VOLVER" gigante y seguro:**
  * Mide casi 80px de alto, en color amarillo de alto contraste.
  * Ubicado en la **esquina superior izquierda**, completamente alejado de su mano derecha para evitar toques accidentales mientras sostiene la tablet.

---

## 2. Cómo probar la aplicación de inmediato

Puedes abrir directamente el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Edge, Firefox) para probar el diseño y la reproducción de canales.

Ruta del proyecto:
`C:\Users\aehansen\.gemini\antigravity\scratch\tele-mama\`

---

## 3. Cómo instalarla en la tablet de tu mamá (como App nativa)

Para que funcione como una aplicación independiente con su propio ícono en el escritorio (sin barra de direcciones ni pestañas de navegador):

### Paso A: Subirla a un servidor web gratuito (en 2 minutos)
Las PWAs requieren HTTPS para instalarse en Android. Las formas más fáciles y 100% gratuitas son:
1. **Opción Netlify Drop (La más rápida, sin comandos):**
   * Ingresá a [app.netlify.com/drop](https://app.netlify.com/drop).
   * Arrastrá la carpeta `tele-mama` completa al recuadro de la página.
   * En 10 segundos te dará un enlace seguro (por ejemplo: `https://mi-tele-mama.netlify.app`).
2. **Opción GitHub Pages:**
   * Creá un repositorio público en GitHub con los 4 archivos de la carpeta (`index.html`, `manifest.json`, `icon.svg`, `sw.js`) y activá GitHub Pages en los ajustes del repositorio.

### Paso B: Instalarla en la tablet
1. Abrí **Google Chrome** en la tablet de tu mamá e ingresá a la URL generada en el paso anterior.
2. Tocá los **tres puntos verticales** del menú de Chrome (arriba a la derecha).
3. Seleccioná **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
4. Confirmá el nombre: **"Mi Tele"**.
5. ¡Listo! En el escritorio de la tablet aparecerá el ícono de la televisión. Al tocarlo se abrirá a pantalla completa como cualquier aplicación instalada.

---

## 4. Ajustes recomendados en la tablet de tu mamá

Para complementar la aplicación y facilitarle el uso en todo el sistema operativo Android:

1. Ingresá a **Ajustes > Accesibilidad > Interacción y destreza**.
2. **Retardo al mantener pulsado (Touch and hold delay):** Seleccionar "Largo" (evita que un toque tembloroso abra menús secundarios no deseados).
3. **Ignorar pulsaciones repetidas (Ignore repeated taps):** Activar y configurar en 0.4 o 0.5 segundos.
4. En **Ajustes > Pantalla**: Activar **"Giro automático"** para que rote naturalmente de vertical a horizontal cuando quiera ver el video.
