// ========================
// EDITAR PRODUCTOS AQUÍ
// Puedes cambiar nombre, imagen, precio y descripción fácilmente
// ========================
const productos = [
  {
    id: 1,
    nombre: "Tarta de Chocolate Belga",
    precio: 5990,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    descripcion: "Base crujiente de galleta, mousse de chocolate belga 70% cacao, virutas de chocolate amargo y crema chantilly.",
    destacado: true
  },
  {
    id: 2,
    nombre: "Cheesecake de Frutos Rojos",
    precio: 6490,
    imagen: "https://cdn0.recetasgratis.net/es/posts/1/4/9/cheesecake_de_frutos_rojos_73941_orig.jpg",
    descripcion: "Base de galleta digestive, cremoso relleno de queso crema, coulis de frutos rojos frescos y fresas.",
    destacado: true
  },
  {
    id: 3,
    nombre: "Macarons Artesanales",
    precio: 7990,
    imagen: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop",
    descripcion: "Caja con 12 macarons surtidos: vainilla, chocolate, pistache, frambuesa, caramelo y café.",
    destacado: true
  },
  {
    id: 4,
    nombre: "Pastel Tres Leches Premium",
    precio: 5490,
    imagen: "https://www.lemonblossoms.com/wp-content/uploads/2023/03/Tres-Leches-Cake-S2.jpg",
    descripcion: "Bizcocho esponjoso bañado en leche evaporada, condensada y crema, coronado con merengue tostado y canela.",
    destacado: true
  },
  {
    id: 5,
    nombre: "Eclairs de Café",
    precio: 3490,
    imagen: "https://www.recettes-de-cake.fr/wp-content/uploads/2025/11/1762906576-eclair-au-cafe-revisite-recette-gourmande-et-originale-1024x576.jpg",
    descripcion: "Masa choux rellena de crema pastelera de café arábigo, glaseado de chocolate oscuro y nuez caramelizada.",
    destacado: true
  },
  {
    id: 6,
    nombre: "Mousse de Mango Tropical",
    precio: 3990,
    imagen: "https://insanelygoodrecipes.com/wp-content/uploads/2024/03/Mango-Mousse.jpg",
    descripcion: "Mousse aireado de mango Ataulfo, base de brownie de chocolate, trozos de mango fresco y menta.",
    destacado: false
  },
  {
    id: 7,
    nombre: "Brownie con Nuez Pecana",
    precio: 3990,
    imagen: "https://lasrecetasdemiabuela.recipesown.com/wp-content/uploads/2024/07/23-27-768x768.webp",
    descripcion: "Brownie denso y húmedo con nuez pecana tostada, corazón de chocolate derretido y helado de vainilla.",
    destacado: false
  },
  {
    id: 8,
    nombre: "Crème Brûlée Clásica",
    precio: 4990,
    imagen: "https://media.a24.com/p/45cc7cae88391deb94b433b76468a0f1/adjuntos/296/imagenes/009/145/0009145351/1200x675/smart/creme-brulee-receta-el-clasico-postre-textura-suavez-y-sedosa.png",
    descripcion: "Crema de vainilla de Madagascar con yemas de huevos libres, costra de caramelo crujiente y frutos rojos.",
    destacado: false
  },
  {
    id: 9,
    nombre: "Tarta de Limón Merengue",
    precio: 4490,
    imagen: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop",
    descripcion: "Base de pasta sablé, crema de limón siciliano ácida y merengue italiano tostado con soplete.",
    destacado: false
  },
  {
    id: 10,
    nombre: "Profiteroles de Chocolate",
    precio: 4990,
    imagen: "https://media.airedesantafe.com.ar/p/ca6afa22b8a359e3ac5a7466d503be65/adjuntos/268/imagenes/003/791/0003791332/1200x0/smart/profiteroles-chocolate-la-receta-rapida-y-sencilla-preparar-el-mejor-postre-casa.png",
    descripcion: "Seis profiteroles rellenos de crema helada de vainilla, salsa caliente de chocolate belga y almendras.",
    destacado: false
  },
  {
    id: 11,
    nombre: "Pastel de Zanahoria Especiado",
    precio: 4990,
    imagen: "https://content-cocina.lecturas.com/medio/2021/07/12/pastel-de-zanahoria-con-buttercream_f8c9e717_1200x1200.jpg",
    descripcion: "Bizcocho húmedo de zanahoria fresca, nueces, canela y jengibre, betún de queso crema y nuez garapiñada.",
    destacado: false
  },
  {
    id: 12,
    nombre: "Tiramisú Tradicional",
    precio: 6990,
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    descripcion: "Capas de bizcocho savoiardi mojado en espresso, crema de mascarpone italiano y cacao amargo.",
    destacado: false
  },
  {
    id: 13,
    nombre: "Donuts Glaseadas Artesanales",
    precio: 4490,
    imagen: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
    descripcion: "Media docena de donuts de masa brioche: dos glaseadas de chocolate, dos de fresa y dos de vainilla.",
    destacado: false
  },
  {
    id: 14,
    nombre: "Cupcakes Red Velvet",
    precio: 5490,
    imagen: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop",
    descripcion: "Cuatro cupcakes de bizcocho rojo aterciopelado con cacao, betún de queso crema Philadelphia y corazones.",
    destacado: false
  },
  {
    id: 15,
    nombre: "Helado Artesanal del Día",
    precio: 4490,
    imagen: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
    descripcion: "Porción de 500g de helado artesanal: cookies & crema, stracciatella, dulce de leche o vainilla bourbon.",
    destacado: false
  }
];

// ========================
// ESTADO GLOBAL
// ========================
let carrito = [];
let historial = [];

// ========================
// REFERENCIAS AL DOM - Carrito
// ========================
const contenedorDestacados = document.getElementById('contenedorDestacados');
const contenedorProductos = document.getElementById('contenedorProductos');
const listaCarrito = document.getElementById('listaCarrito');
const carritoVacio = document.getElementById('carritoVacio');
const footerCarrito = document.getElementById('footerCarrito');
const totalCarrito = document.getElementById('totalCarrito');
const cartBadge = document.getElementById('cartBadge');
const btnCarrito = document.getElementById('btnCarrito');
const btnCerrarCarrito = document.getElementById('btnCerrarCarrito');
const sidebarCarrito = document.getElementById('sidebarCarrito');
const overlayCarrito = document.getElementById('overlayCarrito');
const btnCheckout = document.getElementById('btnCheckout');
const formularioContacto = document.getElementById('formularioContacto');
const toast = document.getElementById('toast');

// ========================
// REFERENCIAS AL DOM - Historial
// ========================
const listaHistorial = document.getElementById('listaHistorial');
const historialVacio = document.getElementById('historialVacio');
const historyBadge = document.getElementById('historyBadge');
const btnHistorial = document.getElementById('btnHistorial');
const btnCerrarHistorial = document.getElementById('btnCerrarHistorial');
const sidebarHistorial = document.getElementById('sidebarHistorial');
const overlayHistorial = document.getElementById('overlayHistorial');

// ========================
// FUNCIÓN DE SANITIZACIÓN (SEGURIDAD XSS)
// ========================
function sanitizarInput(valor) {
  if (typeof valor !== 'string') return '';
  var caracteresPeligrosos = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  return valor.replace(/[&<>"'`=/]/g, function(caracter) {
    return caracteresPeligrosos[caracter];
  });
}

// ========================
// FUNCIÓN PARA FORMATEAR PRECIO EN FORMATO CHILENO
// Ejemplo: $5.990
// ========================
function formatearPrecioCL(precio) {
  if (typeof precio !== 'number' || isNaN(precio)) return '$0';
  return '$' + precio.toLocaleString('es-CL');
}

// ========================
// FUNCIÓN PARA FORMATEAR FECHA
// Retorna una fecha legible en formato chileno
// ========================
function formatearFecha(timestamp) {
  if (!timestamp || typeof timestamp !== 'number') return 'Fecha no disponible';
  var fecha = new Date(timestamp);
  var opciones = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return fecha.toLocaleDateString('es-CL', opciones);
}

// ========================
// FUNCIÓN PARA MOSTRAR TOAST
// ========================
function mostrarToast(mensaje, tipo, esCompra) {
  var mensajeSeguro = sanitizarInput(mensaje);
  toast.textContent = mensajeSeguro;
  toast.className = 'toast ' + tipo;

  // Si es una compra exitosa, agregar clase especial para animación
  if (esCompra) {
    toast.classList.add('purchase-success');
  }

  setTimeout(function() {
    toast.classList.add('visible');
  }, 10);

  setTimeout(function() {
    toast.classList.remove('visible');
    // Limpiar clase especial después de la animación
    if (esCompra) {
      setTimeout(function() {
        toast.classList.remove('purchase-success');
      }, 300);
    }
  }, 3500);
}

// ========================
// FUNCIÓN DE CONFETI SUAVE AL COMPLETAR COMPRA
// Crea partículas decorativas que caen brevemente
// ========================
function lanzarConfeti() {
  var colores = ['#c45d3a', '#d97756', '#8b6f4e', '#5a8a5c', '#f0c987', '#e8dcd0'];
  var cantidad = 24;

  for (var i = 0; i < cantidad; i++) {
    (function(indice) {
      setTimeout(function() {
        var particula = document.createElement('div');
        particula.className = 'confetti-particle';
        particula.style.backgroundColor = colores[indice % colores.length];
        particula.style.left = (Math.random() * 80 + 10) + '%';
        particula.style.top = (Math.random() * 30 + 10) + '%';
        particula.style.width = (Math.random() * 6 + 4) + 'px';
        particula.style.height = (Math.random() * 6 + 4) + 'px';
        particula.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        document.body.appendChild(particula);

        // Remover partícula después de la animación
        setTimeout(function() {
          if (particula.parentNode) {
            particula.parentNode.removeChild(particula);
          }
        }, 1300);
      }, indice * 40);
    })(i);
  }
}

// ========================
// RENDER DE TARJETAS DE PRODUCTOS
// ========================
function renderProductos() {
  var destacados = productos.filter(function(p) { return p.destacado; });
  var normales = productos.filter(function(p) { return !p.destacado; });
  
  // Renderizar destacados
  contenedorDestacados.innerHTML = '';
  destacados.forEach(function(producto, indice) {
    var tarjeta = crearTarjetaProducto(producto, true, indice);
    contenedorDestacados.appendChild(tarjeta);
  });
  
  // Renderizar productos normales
  contenedorProductos.innerHTML = '';
  normales.forEach(function(producto, indice) {
    var tarjeta = crearTarjetaProducto(producto, false, indice);
    contenedorProductos.appendChild(tarjeta);
  });
}

// ========================
// CREAR TARJETA DE PRODUCTO (DOM SEGURO)
// ========================
function crearTarjetaProducto(producto, esDestacado, indice) {
  var article = document.createElement('article');
  article.className = 'product-card animate-fade-up stagger stagger-' + ((indice % 5) + 1);
  
  // Contenedor de imagen
  var imgWrapper = document.createElement('div');
  imgWrapper.className = 'product-img-wrapper h-44 relative';
  
  var imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;
  imagen.className = 'product-img w-full h-full object-cover';
  imagen.loading = 'lazy';
  
  imgWrapper.appendChild(imagen);
  
  // Badge de destacado
  if (esDestacado) {
    var badge = document.createElement('span');
    badge.className = 'featured-tag';
    badge.textContent = 'TOP';
    imgWrapper.appendChild(badge);
  }
  
  // Contenido
  var contenido = document.createElement('div');
  contenido.className = 'p-4';
  
  // Nombre
  var nombre = document.createElement('h3');
  nombre.className = 'text-lg font-semibold text-[var(--fg)] mb-2 line-clamp-1';
  nombre.textContent = producto.nombre;
  
  // Descripción
  var descripcion = document.createElement('p');
  descripcion.className = 'text-sm text-[var(--fg-muted)] mb-3 line-clamp-2';
  descripcion.textContent = producto.descripcion;
  
  // Fila de precio y botón
  var fila = document.createElement('div');
  fila.className = 'flex items-center justify-between gap-3';
  
  var precio = document.createElement('span');
  precio.className = 'text-xl font-bold text-[var(--accent)]';
  precio.textContent = formatearPrecioCL(producto.precio);
  
  var btnAgregar = document.createElement('button');
  btnAgregar.className = 'btn-primary px-4 py-2 rounded-lg text-sm';
  btnAgregar.textContent = 'Agregar';
  btnAgregar.setAttribute('aria-label', 'Agregar ' + producto.nombre + ' al carrito');
  btnAgregar.addEventListener('click', function() {
    agregarAlCarrito(producto.id);
  });
  
  fila.appendChild(precio);
  fila.appendChild(btnAgregar);
  
  contenido.appendChild(nombre);
  contenido.appendChild(descripcion);
  contenido.appendChild(fila);
  
  article.appendChild(imgWrapper);
  article.appendChild(contenido);
  
  return article;
}

// ========================
// LÓGICA DEL CARRITO
// ========================

// Agregar producto al carrito
function agregarAlCarrito(id) {
  var producto = productos.find(function(p) { return p.id === id; });
  if (!producto) return;
  
  var existeEnCarrito = carrito.find(function(item) { return item.id === id; });
  
  if (existeEnCarrito) {
    existeEnCarrito.cantidad += 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    });
  }
  
  guardarCarrito();
  renderCarrito();
  actualizarBadgeCarrito();
  mostrarToast('Producto agregado al carrito', 'success');
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
  carrito = carrito.filter(function(item) { return item.id !== id; });
  guardarCarrito();
  renderCarrito();
  actualizarBadgeCarrito();
  mostrarToast('Producto eliminado del carrito', 'success');
}

// Actualizar cantidad de producto
function actualizarCantidad(id, nuevaCantidad) {
  var cantidad = parseInt(nuevaCantidad);
  
  if (isNaN(cantidad) || cantidad < 1) {
    eliminarDelCarrito(id);
    return;
  }
  
  var item = carrito.find(function(i) { return i.id === id; });
  if (item) {
    item.cantidad = cantidad;
    guardarCarrito();
    renderCarrito();
  }
}

// Calcular total del carrito
function calcularTotal() {
  return carrito.reduce(function(total, item) {
    return total + (item.precio * item.cantidad);
  }, 0);
}

// Renderizar carrito en el DOM
function renderCarrito() {
  if (carrito.length === 0) {
    listaCarrito.classList.add('hidden');
    carritoVacio.classList.remove('hidden');
    footerCarrito.classList.add('hidden');
    btnCheckout.disabled = true;
    return;
  }
  
  listaCarrito.classList.remove('hidden');
  carritoVacio.classList.add('hidden');
  footerCarrito.classList.remove('hidden');
  btnCheckout.disabled = false;
  
  listaCarrito.innerHTML = '';
  
  carrito.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.className = 'flex gap-3 p-4 bg-[var(--card)] rounded-xl mb-3 border border-[var(--border)] animate-scale-in';
    
    // Información del producto
    var info = document.createElement('div');
    info.className = 'flex-1 min-w-0';
    
    var nombre = document.createElement('h4');
    nombre.className = 'font-medium text-[var(--fg)] truncate text-sm';
    nombre.textContent = item.nombre;
    
    var precio = document.createElement('p');
    precio.className = 'text-[var(--accent)] font-semibold text-sm mt-1';
    precio.textContent = formatearPrecioCL(item.precio);
    
    info.appendChild(nombre);
    info.appendChild(precio);
    
    // Controles
    var controles = document.createElement('div');
    controles.className = 'flex flex-col items-end gap-2';
    
    // Fila de cantidad
    var filaQty = document.createElement('div');
    filaQty.className = 'flex items-center gap-2';
    
    var btnMenos = document.createElement('button');
    btnMenos.className = 'qty-btn';
    btnMenos.textContent = '\u2212';
    btnMenos.setAttribute('aria-label', 'Disminuir cantidad');
    btnMenos.addEventListener('click', function() {
      actualizarCantidad(item.id, item.cantidad - 1);
    });
    
    var spanCantidad = document.createElement('span');
    spanCantidad.className = 'w-8 text-center font-medium text-sm';
    spanCantidad.textContent = item.cantidad;
    
    var btnMas = document.createElement('button');
    btnMas.className = 'qty-btn';
    btnMas.textContent = '+';
    btnMas.setAttribute('aria-label', 'Aumentar cantidad');
    btnMas.addEventListener('click', function() {
      actualizarCantidad(item.id, item.cantidad + 1);
    });
    
    filaQty.appendChild(btnMenos);
    filaQty.appendChild(spanCantidad);
    filaQty.appendChild(btnMas);
    
    // Subtotal
    var subtotal = document.createElement('p');
    subtotal.className = 'text-xs text-[var(--fg-muted)]';
    subtotal.textContent = 'Subtotal: ' + formatearPrecioCL(item.precio * item.cantidad);
    
    controles.appendChild(filaQty);
    controles.appendChild(subtotal);
    
    // Botón eliminar
    var btnEliminar = document.createElement('button');
    btnEliminar.className = 'p-2 text-[var(--fg-muted)] hover:text-[var(--error)] transition-colors self-start';
    btnEliminar.setAttribute('aria-label', 'Eliminar ' + item.nombre);
    btnEliminar.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>';
    btnEliminar.addEventListener('click', function() {
      eliminarDelCarrito(item.id);
    });
    
    itemElement.appendChild(info);
    itemElement.appendChild(controles);
    itemElement.appendChild(btnEliminar);
    
    listaCarrito.appendChild(itemElement);
  });
  
  totalCarrito.textContent = formatearPrecioCL(calcularTotal());
}

// Actualizar badge del carrito
function actualizarBadgeCarrito() {
  var totalItems = carrito.reduce(function(total, item) {
    return total + item.cantidad;
  }, 0);
  
  if (totalItems > 0) {
    cartBadge.textContent = totalItems > 99 ? '99+' : totalItems;
    cartBadge.classList.remove('hidden');
  } else {
    cartBadge.classList.add('hidden');
  }
}

// Guardar carrito en localStorage
function guardarCarrito() {
  try {
    localStorage.setItem('dulceTentacion_carrito', JSON.stringify(carrito));
  } catch (error) {
    console.warn('No se pudo guardar el carrito en localStorage');
  }
}

// Cargar carrito desde localStorage
function cargarCarrito() {
  try {
    var datos = localStorage.getItem('dulceTentacion_carrito');
    if (datos) {
      var carritoGuardado = JSON.parse(datos);
      if (Array.isArray(carritoGuardado)) {
        carrito = carritoGuardado.filter(function(item) {
          return item &&
            typeof item.id === 'number' &&
            typeof item.nombre === 'string' &&
            typeof item.precio === 'number' &&
            typeof item.cantidad === 'number' &&
            item.cantidad > 0;
        });
      }
    }
  } catch (error) {
    carrito = [];
  }
}

// ========================
// LÓGICA DE FINALIZAR COMPRA
// ========================

// Completar la compra: guardar en historial, vaciar carrito, mostrar feedback
function completarCompra() {
  // Validar que el carrito no esté vacío
  if (carrito.length === 0) {
    mostrarToast('El carrito está vacío', 'error');
    return;
  }

  // Crear registro de compra para el historial
  var compra = {
    id: Date.now(),
    fecha: Date.now(),
    items: carrito.map(function(item) {
      return {
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        imagen: item.imagen || '',
        cantidad: item.cantidad,
        subtotal: item.precio * item.cantidad
      };
    }),
    total: calcularTotal()
  };

  // Guardar la compra en el historial
  historial.unshift(compra); // Agregar al inicio (más reciente primero)
  guardarHistorial();

  // Vaciar el carrito
  carrito = [];
  guardarCarrito();
  renderCarrito();
  actualizarBadgeCarrito();

  // Cerrar el sidebar del carrito
  cerrarCarrito();

  // Actualizar badge del historial
  actualizarBadgeHistorial();

  // Mostrar toast de éxito con animación especial
  mostrarToast('Compra realizada con éxito', 'success', true);

  // Lanzar confeti decorativo
  lanzarConfeti();
}

// ========================
// LÓGICA DEL HISTORIAL DE COMPRAS
// ========================

// Guardar historial en localStorage
function guardarHistorial() {
  try {
    localStorage.setItem('dulceTentacion_historial', JSON.stringify(historial));
  } catch (error) {
    console.warn('No se pudo guardar el historial en localStorage');
  }
}

// Cargar historial desde localStorage con validación
function cargarHistorial() {
  try {
    var datos = localStorage.getItem('dulceTentacion_historial');
    if (datos) {
      var historialGuardado = JSON.parse(datos);
      if (Array.isArray(historialGuardado)) {
        historial = historialGuardado.filter(function(compra) {
          // Validar que cada compra tenga la estructura correcta
          return compra &&
            typeof compra.id === 'number' &&
            typeof compra.fecha === 'number' &&
            Array.isArray(compra.items) &&
            typeof compra.total === 'number' &&
            compra.items.length > 0;
        });

        // Validar cada item dentro de las compras
        historial = historial.map(function(compra) {
          compra.items = compra.items.filter(function(item) {
            return item &&
              typeof item.id === 'number' &&
              typeof item.nombre === 'string' &&
              typeof item.precio === 'number' &&
              typeof item.cantidad === 'number' &&
              typeof item.subtotal === 'number';
          });
          return compra;
        }).filter(function(compra) {
          return compra.items.length > 0;
        });
      }
    }
  } catch (error) {
    historial = [];
  }
}

// Obtener la imagen de un producto por su ID (para historial)
function obtenerImagenProducto(id) {
  var producto = productos.find(function(p) { return p.id === id; });
  return producto ? producto.imagen : '';
}

// Renderizar historial de compras en el DOM
function renderHistorial() {
  if (historial.length === 0) {
    listaHistorial.classList.add('hidden');
    historialVacio.classList.remove('hidden');
    return;
  }

  listaHistorial.classList.remove('hidden');
  historialVacio.classList.add('hidden');

  listaHistorial.innerHTML = '';

  historial.forEach(function(compra, indiceCompra) {
    var compraElement = document.createElement('div');
    compraElement.className = 'history-purchase mb-4 animate-scale-in';

    // Cabecera de la compra (fecha y número de orden)
    var header = document.createElement('div');
    header.className = 'history-purchase-header';

    var headerLeft = document.createElement('div');
    headerLeft.className = 'flex items-center gap-2';

    var icono = document.createElement('div');
    icono.className = 'w-7 h-7 rounded-md bg-[var(--history-accent)] flex items-center justify-center flex-shrink-0';

    var iconoSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconoSvg.setAttribute('class', 'w-4 h-4 text-white');
    iconoSvg.setAttribute('fill', 'none');
    iconoSvg.setAttribute('stroke', 'currentColor');
    iconoSvg.setAttribute('stroke-width', '1.5');
    iconoSvg.setAttribute('viewBox', '0 0 24 24');
    var iconoPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    iconoPath.setAttribute('stroke-linecap', 'round');
    iconoPath.setAttribute('stroke-linejoin', 'round');
    iconoPath.setAttribute('d', 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z');
    iconoSvg.appendChild(iconoPath);
    icono.appendChild(iconoSvg);

    var fechaTexto = document.createElement('span');
    fechaTexto.className = 'text-sm font-medium text-[var(--fg)]';
    fechaTexto.textContent = formatearFecha(compra.fecha);

    headerLeft.appendChild(icono);
    headerLeft.appendChild(fechaTexto);

    var cantidadItems = document.createElement('span');
    cantidadItems.className = 'text-xs text-[var(--fg-muted)] bg-[var(--bg-alt)] px-2 py-1 rounded-md';
    var numItems = compra.items.reduce(function(acc, item) { return acc + item.cantidad; }, 0);
    cantidadItems.textContent = numItems + (numItems === 1 ? ' producto' : ' productos');

    header.appendChild(headerLeft);
    header.appendChild(cantidadItems);

    compraElement.appendChild(header);

    // Items de la compra
    compra.items.forEach(function(item) {
      var itemElement = document.createElement('div');
      itemElement.className = 'history-purchase-item';

      // Imagen del producto
      var imgElement = document.createElement('img');
      imgElement.src = item.imagen || obtenerImagenProducto(item.id);
      imgElement.alt = item.nombre;
      imgElement.loading = 'lazy';

      // Información del item
      var itemInfo = document.createElement('div');
      itemInfo.className = 'flex-1 min-w-0';

      var itemNombre = document.createElement('p');
      itemNombre.className = 'text-sm font-medium text-[var(--fg)] truncate';
      itemNombre.textContent = item.nombre;

      var itemDetalle = document.createElement('p');
      itemDetalle.className = 'text-xs text-[var(--fg-muted)] mt-1';
      itemDetalle.textContent = formatearPrecioCL(item.precio) + ' x ' + item.cantidad;

      itemInfo.appendChild(itemNombre);
      itemInfo.appendChild(itemDetalle);

      // Subtotal del item
      var itemSubtotal = document.createElement('span');
      itemSubtotal.className = 'text-sm font-semibold text-[var(--history-accent)] whitespace-nowrap flex-shrink-0';
      itemSubtotal.textContent = formatearPrecioCL(item.subtotal);

      itemElement.appendChild(imgElement);
      itemElement.appendChild(itemInfo);
      itemElement.appendChild(itemSubtotal);

      compraElement.appendChild(itemElement);
    });

    // Barra de total de la compra
    var totalBar = document.createElement('div');
    totalBar.className = 'history-total-bar';

    var totalLabel = document.createElement('span');
    totalLabel.className = 'text-sm';
    totalLabel.textContent = 'Total de la compra';

    var totalValor = document.createElement('span');
    totalValor.className = 'text-base';
    totalValor.textContent = formatearPrecioCL(compra.total);

    totalBar.appendChild(totalLabel);
    totalBar.appendChild(totalValor);

    compraElement.appendChild(totalBar);

    listaHistorial.appendChild(compraElement);
  });
}

// Actualizar badge del historial
function actualizarBadgeHistorial() {
  var totalCompras = historial.length;

  if (totalCompras > 0) {
    historyBadge.textContent = totalCompras > 99 ? '99+' : totalCompras;
    historyBadge.classList.remove('hidden');
    // Animación de pulso al actualizar
    historyBadge.classList.remove('badge-pulse');
    // Forzar reflow para reiniciar la animación
    void historyBadge.offsetWidth;
    historyBadge.classList.add('badge-pulse');
  } else {
    historyBadge.classList.add('hidden');
  }
}

// ========================
// CONTROL DEL SIDEBAR DEL CARRITO
// ========================
function abrirCarrito() {
  sidebarCarrito.classList.add('open');
  overlayCarrito.classList.add('visible');
  document.body.style.overflow = 'hidden';
  btnCerrarCarrito.focus();
}

function cerrarCarrito() {
  sidebarCarrito.classList.remove('open');
  overlayCarrito.classList.remove('visible');
  document.body.style.overflow = '';
  btnCarrito.focus();
}

// ========================
// CONTROL DEL SIDEBAR DEL HISTORIAL
// ========================
function abrirHistorial() {
  renderHistorial();
  sidebarHistorial.classList.add('open');
  overlayHistorial.classList.add('visible');
  document.body.style.overflow = 'hidden';
  btnCerrarHistorial.focus();
}

function cerrarHistorial() {
  sidebarHistorial.classList.remove('open');
  overlayHistorial.classList.remove('visible');
  document.body.style.overflow = '';
  btnHistorial.focus();
}

// ========================
// CERRAR CUALQUIER SIDEBAR ABIERTO
// Utilidad para evitar conflictos entre carrito e historial
// ========================
function cerrarTodosLosSidebars() {
  if (sidebarCarrito.classList.contains('open')) {
    cerrarCarrito();
  }
  if (sidebarHistorial.classList.contains('open')) {
    cerrarHistorial();
  }
}

// ========================
// VALIDACIÓN DE FORMULARIO
// ========================
var reglasValidacion = {
  nombre: {
    patron: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{2,100}$/,
    mensaje: 'El nombre debe tener entre 2 y 100 caracteres (solo letras y espacios)'
  },
  email: {
    patron: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mensaje: 'Ingresa un correo electrónico válido'
  },
  telefono: {
    patron: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
    mensaje: 'Ingresa un número de teléfono válido'
  },
  mensaje: {
    patron: /^.{10,500}$/s,
    mensaje: 'El mensaje debe tener entre 10 y 500 caracteres'
  }
};

// Validar un campo individual
function validarCampo(campo) {
  var valor = campo.value.trim();
  var nombreCampo = campo.name;
  var elementoError = document.getElementById('error' + nombreCampo.charAt(0).toUpperCase() + nombreCampo.slice(1));
  
  // Verificar si está vacío
  if (!valor) {
    mostrarErrorCampo(campo, elementoError, 'Este campo es obligatorio');
    return false;
  }
  
  // Validar con patrón si existe
  var regla = reglasValidacion[nombreCampo];
  if (regla && !regla.patron.test(valor)) {
    mostrarErrorCampo(campo, elementoError, regla.mensaje);
    return false;
  }
  
  // Sanitizar y verificar caracteres peligrosos
  var valorSanitizado = sanitizarInput(valor);
  if (valorSanitizado !== valor && nombreCampo === 'mensaje') {
    mostrarErrorCampo(campo, elementoError, 'El mensaje contiene caracteres no permitidos');
    return false;
  }
  
  ocultarErrorCampo(campo, elementoError);
  return true;
}

// Mostrar error en campo
function mostrarErrorCampo(campo, elementoError, mensaje) {
  campo.classList.add('error');
  campo.classList.remove('success');
  if (elementoError) {
    elementoError.textContent = mensaje;
    elementoError.classList.add('visible');
  }
}

// Ocultar error en campo
function ocultarErrorCampo(campo, elementoError) {
  campo.classList.remove('error');
  campo.classList.add('success');
  if (elementoError) {
    elementoError.classList.remove('visible');
  }
}

// Validar formulario completo
function validarFormulario(evento) {
  evento.preventDefault();
  
  var campos = formularioContacto.elements;
  var esValido = true;
  
  // Validar campos de texto
  var camposTexto = ['nombre', 'email', 'telefono', 'mensaje'];
  camposTexto.forEach(function(nombreCampo) {
    var campo = campos[nombreCampo];
    if (campo) {
      var valido = validarCampo(campo);
      if (!valido) esValido = false;
    }
  });
  
  // Validar select
  var selectTipo = campos['tipo'];
  var errorTipo = document.getElementById('errorTipo');
  if (selectTipo && !selectTipo.value) {
    mostrarErrorCampo(selectTipo, errorTipo, 'Selecciona una opción');
    esValido = false;
  } else if (selectTipo) {
    ocultarErrorCampo(selectTipo, errorTipo);
  }
  
  // Procesar si es válido
  if (esValido) {
    var datosFormulario = {
      nombre: sanitizarInput(campos['nombre'].value.trim()),
      email: sanitizarInput(campos['email'].value.trim()),
      telefono: sanitizarInput(campos['telefono'].value.trim()),
      tipo: sanitizarInput(campos['tipo'].value),
      mensaje: sanitizarInput(campos['mensaje'].value.trim())
    };
    
    console.log('Datos del formulario:', datosFormulario);
    mostrarToast('Mensaje enviado correctamente. Te contactaremos pronto.', 'success');
    formularioContacto.reset();
    
    // Limpiar estados de los campos
    var todosLosCampos = formularioContacto.querySelectorAll('.input-field');
    todosLosCampos.forEach(function(campo) {
      campo.classList.remove('success', 'error');
    });
  } else {
    mostrarToast('Por favor corrige los errores en el formulario', 'error');
  }
}

// ========================
// INICIALIZACIÓN DE EVENTOS
// ========================
function inicializarEventos() {
  // Eventos del carrito
  btnCarrito.addEventListener('click', function() {
    // Si el historial está abierto, cerrarlo primero
    if (sidebarHistorial.classList.contains('open')) {
      cerrarHistorial();
    }
    abrirCarrito();
  });

  btnCerrarCarrito.addEventListener('click', cerrarCarrito);
  overlayCarrito.addEventListener('click', cerrarCarrito);

  // Eventos del historial
  btnHistorial.addEventListener('click', function() {
    // Si el carrito está abierto, cerrarlo primero
    if (sidebarCarrito.classList.contains('open')) {
      cerrarCarrito();
    }
    abrirHistorial();
  });

  btnCerrarHistorial.addEventListener('click', cerrarHistorial);
  overlayHistorial.addEventListener('click', cerrarHistorial);
  
  // Cerrar con Escape (cualquier sidebar abierto)
  document.addEventListener('keydown', function(evento) {
    if (evento.key === 'Escape') {
      cerrarTodosLosSidebars();
    }
  });
  
  // Eventos del formulario
  formularioContacto.addEventListener('submit', validarFormulario);
  
  // Validación en tiempo real
  var campos = formularioContacto.querySelectorAll('.input-field');
  campos.forEach(function(campo) {
    campo.addEventListener('blur', function() {
      validarCampo(campo);
    });
    
    campo.addEventListener('input', function() {
      var elementoError = document.getElementById('error' + campo.name.charAt(0).toUpperCase() + campo.name.slice(1));
      if (elementoError && elementoError.classList.contains('visible')) {
        validarCampo(campo);
      }
    });
  });
  
  // Evento de checkout - Finalizar compra
  btnCheckout.addEventListener('click', function() {
    completarCompra();
  });
  
  // Scroll reveal con Intersection Observer
  var observer = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('animate-fade-up');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section').forEach(function(seccion) {
    observer.observe(seccion);
  });
}

// ========================
// INICIALIZAR APLICACIÓN
// ========================
function inicializarAplicacion() {
  cargarCarrito();
  cargarHistorial();
  renderProductos();
  renderCarrito();
  actualizarBadgeCarrito();
  actualizarBadgeHistorial();
  inicializarEventos();
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarAplicacion);