// ============================================================
// TODO EL CONTENIDO DE LA PÁGINA ESTÁ ACÁ.
// Cambiá textos, precios y fotos en este archivo, sin tocar los componentes.
//
// FOTOS: guardalas en la carpeta  public/fotos/  y poné acá el nombre,
// por ejemplo  foto: '/fotos/damian.jpg'.
// Si dejás  foto: null  se muestra una caja de color con la descripción.
// ============================================================

export const marca = {
  nombre: 'Damián Racco',
  bajada: 'Cocina privada',
  monograma: 'DR',
  ciudad: 'Buenos Aires',
  // Número con código de país, sin +, sin espacios ni guiones. Ej: 5491112345678
  whatsapp: '5491124987923',
  instagram: 'damianracco',
}

export const hero = {
  etiqueta: 'Chef privado · Buenos Aires',
  titulo: ['Tu mesa.', 'Nuestra cocina.'],
  texto: 'Un chef y un servicio de sala en tu casa, para que vos solo te ocupes de disfrutar con tu gente.',
  puntos: ['Menú a medida', 'Chef + servicio de sala', 'Vos no lavás nada'],
  foto: null,
  fotoDescripcion: 'Retrato de Damián: medio cuerpo, chaqueta de chef, luz cálida de costado',
  destacado: { titulo: 'Cena íntima', texto: 'Desde [PRECIO] por persona' },
}

export const experiencias = [
  {
    titulo: 'Cena íntima',
    texto: 'Para 2 a 8 personas. Un menú de pasos pensado para la ocasión, servido en tu mesa.',
    precio: 'Desde [PRECIO] por persona',
    foto: null,
    fotoDescripcion: 'Mesa puesta para pocos, velas, plato principal servido',
  },
  {
    titulo: 'Celebración',
    texto: 'Cumpleaños, aniversarios y reuniones de hasta [N] invitados, con servicio de sala completo.',
    precio: 'Desde [PRECIO] por persona',
    foto: null,
    fotoDescripcion: 'Mesa larga con amigos brindando, desenfocados',
  },
  {
    titulo: 'Degustación',
    texto: 'Una noche de varios pasos chicos, explicados por el chef en cada plato.',
    precio: 'Desde [PRECIO] por persona',
    foto: null,
    fotoDescripcion: 'Plato de autor en primer plano, manos del chef',
  },
]

export const pasos = [
  { titulo: 'Elegís la experiencia', texto: 'Nos contás la fecha, cuántos son y qué quieren celebrar.' },
  { titulo: 'Armamos el menú', texto: 'Damián te propone un menú a medida de tus gustos y restricciones.' },
  { titulo: 'Ustedes disfrutan', texto: 'Cocinamos, servimos y dejamos la cocina limpia.' },
]

// tono: 'oliva' | 'pimenton' | 'dorado'  (color de la tapa si no hay foto)
// link: dónde se compra (Mercado Pago, Hotmart, etc.). Si es null, abre WhatsApp.
export const ebooks = [
  { titulo: '[Título del e-book 1]', precio: '[PRECIO]', tapa: null, tono: 'oliva', link: null },
  { titulo: '[Título del e-book 2]', precio: '[PRECIO]', tapa: null, tono: 'pimenton', link: null },
  { titulo: '[Título del e-book 3]', precio: '[PRECIO]', tapa: null, tono: 'dorado', link: null },
]

export const historia = {
  titulo: 'De la cocina del restaurante a tu mesa',
  texto: '[Trayectoria de Damián: dónde se formó, dónde cocinó, qué tipo de cocina hace y por qué decidió llevarla a las casas.]',
  foto: null,
  fotoDescripcion: 'Los dos trabajando: él emplatando, ella sirviendo la mesa',
  equipo: [
    { nombre: 'Damián Racco', rol: 'Chef' },
    { nombre: 'Malena Vidal', rol: 'Servicio de sala' },
  ],
}