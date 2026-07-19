## Estado actual

- `public/favicon.ico` existe pero es el favicon por defecto de Lovable (no el logo de la marca).
- `src/routes/__root.tsx` (línea 97) apunta a `/favicon.ico`.
- Tenemos `src/assets/logo-asesorias-transparent.png` con el logo completo (triángulo + texto).

## Plan

1. **Extraer el triángulo** del logo con `imagegen--edit_image` sobre `logo-asesorias-transparent.png`: recortar/aislar solo el triángulo dorado sobre fondo transparente, formato cuadrado (512×512), guardar como `public/favicon.png`.
2. **Actualizar `src/routes/__root.tsx`** (línea 97): reemplazar la entrada `favicon.ico` por `{ rel: "icon", type: "image/png", href: "/favicon.png" }`.
3. **Borrar** `public/favicon.ico` (obligatorio para que los crawlers no sigan sirviendo el ícono viejo).
4. **Verificar** visualmente el resultado en la pestaña del navegador.

## Nota

Los navegadores y plataformas sociales cachean el favicon; puede tardar en refrescarse aunque el archivo ya esté actualizado.
