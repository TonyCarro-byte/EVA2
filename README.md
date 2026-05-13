# EVA2
# 🤖 Prompt Library

Colección de prompts utilizados para desarrollar proyectos frontend, sistemas de carrito y aplicaciones web seguras con JavaScript.

---

<details>
<summary>🍰 Prompt #1 - Tienda de postres segura con carrito</summary>

```txt
Eres un generador de código experto en desarrollo frontend con enfoque en JavaScript avanzado, manipulación segura del DOM y buenas prácticas de ciberseguridad en aplicaciones web sin backend.

## CONTEXTO

Se requiere desarrollar una aplicación web funcional basada en una tienda de postres. El objetivo principal es implementar un sistema completo de carrito de compras junto con la gestión dinámica de productos, aplicando conceptos avanzados de JavaScript.

## OBJETIVO GENERAL

Construir una aplicación web que permita:

* Visualizar productos (postres)
* Gestionar un carrito de compras funcional
* Validar y procesar un formulario de usuario
* Manipular el DOM de forma dinámica y segura
* Aplicar buenas prácticas de seguridad (XSS, sanitización, validación robusta)

## REQUISITOS FUNCIONALES OBLIGATORIOS

### 1. ESTRUCTURA GENERAL

Generar únicamente:

* index.html
* app.js

No incluir backend ni frameworks externos.

---

### 2. SISTEMA DE PRODUCTOS

* Definir un arreglo de objetos en JavaScript que contenga exactamente 15 productos.

* Cada producto debe tener la siguiente estructura:

  * id (único)
  * nombre
  * precio
  * imagen (URL o ruta)
  * destacado (booleano)

* 5 productos deben tener destacado = true (los más vendidos).

* Todos los productos deben renderizarse dinámicamente en el DOM (NO hardcodeados en HTML).

* Los productos deben ser fácilmente editables desde el código (cambiando propiedades del objeto).

---

### 3. INTERFAZ DE PRODUCTOS

* Mostrar los 15 productos en forma de tarjetas.
* Separar visualmente los productos destacados (Top 5).
* Cada producto debe incluir:

  * nombre
  * imagen
  * precio
  * botón "Agregar al carrito"

---

### 4. CARRITO DE COMPRAS (OBLIGATORIO Y COMPLETO)

Implementar un carrito funcional que permita:

* Agregar productos
* Evitar duplicados (si existe, aumentar cantidad)
* Modificar cantidad de productos
* Eliminar productos del carrito
* Calcular total dinámicamente
* Mostrar lista actualizada en el DOM

Estructura del carrito:

* Arreglo de objetos con:

  * id
  * nombre
  * precio
  * cantidad

Persistencia:

* Usar localStorage para guardar el carrito

---

### 5. FORMULARIO HTML

Crear un formulario con al menos:

* Campo de texto (nombre)
* Campo email o número
* Campo select

Validaciones obligatorias en JavaScript:

* Campos obligatorios
* Validación con expresiones regulares
* Sanitización de entradas (prevención XSS)
* Mensajes claros de error y éxito

---

### 6. SEGURIDAD (CRÍTICO)

* NO usar innerHTML con datos dinámicos
* Usar textContent o createElement
* Implementar función de sanitización de inputs
* Escapar caracteres peligrosos
* Validar todos los datos antes de procesarlos

---

### 7. MANIPULACIÓN DEL DOM

Debe incluir:

* Renderizado dinámico de productos
* Renderizado dinámico del carrito
* Actualización en tiempo real
* Eliminación y modificación de elementos

---

### 8. MODULARIDAD DEL CÓDIGO

El código debe estar organizado en funciones reutilizables, como mínimo:

* renderProductos()
* renderCarrito()
* agregarAlCarrito(id)
* eliminarDelCarrito(id)
* actualizarCantidad(id, cantidad)
* calcularTotal()
* validarFormulario()
* sanitizarInput(input)

---

### 9. CALIDAD DEL CÓDIGO

* Nivel de dificultad: medio
* Código claro y ordenado
* Nombres de variables descriptivos
* Comentarios breves SOLO para indicar la función de cada bloque (no estilo docente)

---

### 10. RESTRICCIONES

* No usar librerías externas
* No usar frameworks
* No backend
* No innerHTML inseguro
* No código innecesario

---

## RESULTADO ESPERADO

Entregar el código completo de:

* index.html
* app.js

Listo para ejecutarse directamente en navegador, funcional, seguro y optimizado.

Asegúrate de que:

* Todo el contenido dinámico provenga de JavaScript
* El carrito funcione completamente
* El formulario valide correctamente
* Se cumplan buenas prácticas de seguridad

NO agregar explicaciones fuera del código.

```

</details>

---

<details>
<summary>🛒 Prompt #2 - Renderizado dinámico y productos destacados</summary>

```txt
Eres un generador experto de aplicaciones frontend utilizando JavaScript avanzado, HTML5 y manipulación segura del DOM, con enfoque en seguridad (prevención de XSS), modularidad y claridad estructural del código.

## CONTEXTO

Se requiere desarrollar una aplicación web funcional basada en una tienda de postres con carrito de compras completamente operativo, sin uso de backend ni frameworks.

## OBJETIVO

Construir una aplicación que gestione productos dinámicos, permita interacción con un carrito de compras, valide formularios y manipule el DOM de forma segura.

---

## REQUISITOS PRINCIPALES

### 1. ARCHIVOS

Generar únicamente:

* index.html
* app.js

---

### 2. PRODUCTOS (ESTRUCTURA OBLIGATORIA)

Crear un arreglo de 15 objetos llamado `productos`.

Cada objeto debe contener:

* id
* nombre
* precio
* imagen
* descripcion (IMPORTANTE: incluir ingredientes o breve descripción del postre)
* destacado (boolean)

Ejemplo esperado:

```js
{
  id: 1,
  nombre: "Cheesecake de Fresa",
  precio: 5990,
  imagen: "ruta/imagen.jpg",
  descripcion: "Suave cheesecake con base de galleta, crema de queso y topping de fresas naturales.",
  destacado: true
}
```

IMPORTANTE:

* Incluir comentario guía encima del arreglo:

```js
// ========================
// EDITAR PRODUCTOS AQUÍ
// Puedes cambiar nombre, imagen, precio y descripción fácilmente
// ========================
```

---

### 3. RENDERIZADO DE PRODUCTOS

* Renderizar dinámicamente los productos en tarjetas (cards).
* NO hardcodear productos en HTML.

Cada tarjeta DEBE incluir:

* Imagen del postre
* Nombre
* Descripción (ingredientes)
* Precio
* Botón "Agregar al carrito"

Agregar comentario guía:

```js
// ========================
// RENDER DE TARJETAS DE PRODUCTOS
// ========================
```

---

### 4. SECCIÓN DESTACADOS

* Mostrar 5 productos con `destacado = true` en sección separada.
* Visualmente diferenciados.

---

### 5. CARRITO DE COMPRAS

Debe permitir:

* Agregar productos
* Evitar duplicados (sumar cantidad)
* Modificar cantidad
* Eliminar productos
* Calcular total en tiempo real
* Persistencia con localStorage

Estructura:

```js
{
  id,
  nombre,
  precio,
  cantidad
}
```

Agregar comentarios guía:

```js
// ========================
// LÓGICA DEL CARRITO
// ========================
```

---

### 6. MANIPULACIÓN SEGURA DEL DOM

OBLIGATORIO:

* NO usar innerHTML con datos dinámicos
* Usar:

  * createElement
  * textContent
* Escapar datos antes de mostrarlos

---

### 7. FORMULARIO

Debe incluir:

* input texto
* input email o número
* select

Validaciones:

* Campos obligatorios
* Expresiones regulares
* Sanitización de datos
* Mensajes claros de error y éxito

Agregar comentario:

```js
// ========================
// VALIDACIÓN DE FORMULARIO
// ========================
```

---

### 8. FUNCIONES MODULARES

El código DEBE incluir funciones como:

* renderProductos()
* renderCarrito()
* agregarAlCarrito(id)
* eliminarDelCarrito(id)
* actualizarCantidad(id, cantidad)
* calcularTotal()
* validarFormulario()
* sanitizarInput(input)

---

### 9. CALIDAD DEL CÓDIGO

* Nivel medio (ni muy básico ni demasiado complejo)
* Código ordenado y legible
* Variables descriptivas
* Comentarios breves SOLO como guía (NO estilo docente)

---

### 10. EXPERIENCIA DE USUARIO

Agregar:

* Mensajes tipo:

  * "Producto agregado al carrito"
  * "Error en formulario"
* Feedback visual simple

---

## RESTRICCIONES

* No usar frameworks
* No usar librerías externas
* No backend
* No usar innerHTML inseguro

---

## RESULTADO FINAL

Entregar:

* index.html completo
* app.js completo

Todo funcional, seguro, organizado y listo para ejecutar.

NO incluir explicaciones fuera del código.

```

</details>

---

<details>
<summary>✨ Prompt #3 - Historial de compras y mejoras e-commerce</summary>

```txt
Quiero que conserves TODO el contenido, diseño, estructura, animaciones, estilos y funcionalidades ya existentes del proyecto actual de la pastelería “Dulce Tentación”, manteniendo el enfoque moderno, elegante y responsivo ya implementado en HTML, CSS y JavaScript puro.

IMPORTANTE:

* NO eliminar funcionalidades existentes.
* NO modificar la identidad visual actual.
* NO romper la lógica del carrito ni del renderizado dinámico.
* Mantener compatibilidad responsive.
* Mantener las buenas prácticas de programación ya implementadas.
* Mantener código limpio, modular y bien organizado.
* Mantener validaciones, sanitización y protección XSS ya existentes.
* Mantener accesibilidad básica (atributos aria, botones accesibles, etc.).
* Mantener separación lógica entre estructura, estilos y funcionalidades.
* Mantener comentarios guía claros dentro del código para facilitar comprensión y edición futura.
* Evitar duplicación innecesaria de código.
* Mantener uso seguro y correcto del DOM.
* Mantener consistencia visual con la paleta y estilos actuales.

NUEVAS FUNCIONALIDADES A IMPLEMENTAR:

1. FINALIZAR COMPRA
   Cuando el usuario presione el botón “Proceder al pago” dentro del carrito:

* Mostrar un mensaje visual tipo toast o confirmación que diga:
  “Compra realizada con éxito”.
* Vaciar automáticamente el carrito después de completar la compra.
* Actualizar correctamente el total y el badge del carrito.
* Guardar la compra realizada en una nueva sección de historial.
* Mantener persistencia usando localStorage.
* Evitar errores si el carrito está vacío.

2. NUEVO APARTADO: HISTORIAL DE COMPRAS
   Crear un nuevo panel o sidebar similar visualmente al carrito actual, pero destinado exclusivamente a mostrar compras ya realizadas.

Este nuevo apartado debe:

* Mantener el mismo estilo visual elegante del carrito actual.
* Tener botón independiente para abrir/cerrar.
* Mostrar todas las compras realizadas previamente.
* Mostrar:

  * Imagen del producto
  * Nombre del producto
  * Cantidad comprada
  * Precio individual
  * Subtotal
  * Fecha simple de compra (opcional pero recomendable)
* Mostrar total general de cada compra realizada.
* Diferenciar visualmente el historial del carrito activo.
* Tener scroll funcional si existen muchas compras.
* Mostrar mensaje de “No hay compras realizadas” si está vacío.
* Mantener animaciones suaves y consistentes.
* Mantener formato chileno de precios:
  Ejemplo: $5.990

3. PERSISTENCIA DE DATOS
   Usar localStorage correctamente para:

* Guardar carrito
* Guardar historial de compras
* Recuperar historial al recargar la página
* Validar datos antes de renderizar

4. BUENAS PRÁCTICAS OBLIGATORIAS
   El código generado debe:

* Usar JavaScript puro (sin frameworks).
* Mantener funciones separadas y reutilizables.
* Mantener nombres claros y descriptivos.
* Evitar lógica repetida.
* Evitar innerHTML innecesario cuando sea posible.
* Mantener creación segura del DOM.
* Mantener sanitización de datos.
* Mantener validaciones antes de guardar o renderizar.
* Mantener comentarios explicativos útiles.
* Mantener estructura profesional y fácil de mantener.
* Mantener rendimiento óptimo y buena organización del código.

5. EXPERIENCIA DE USUARIO
   Agregar pequeños detalles visuales profesionales:

* Animación al completar compra.
* Transición suave al abrir historial.
* Indicadores visuales elegantes.
* Feedback visual correcto al usuario.
* Diseño limpio y consistente con el resto de la página.

El resultado final debe parecer una funcionalidad real de e-commerce artesanal premium, manteniendo la estética cálida y moderna ya existente.


```

</details>
