const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// "Base de datos" simple en memoria
const products = [
  {
    id: "hw-01",
    name: "Hot Wheels Pack x5",
    price: 7.99,
    category: "Coleccionables",
    description: "Pack de 5 autos Hot Wheels surtidos.",
    image: "https://picsum.photos/seed/hw01/600/400",
    rating: 4.6,
    stock: 12,
    tags: ["nuevo", "top"]
  },
  {
    id: "aud-02",
    name: "Audífonos Bluetooth",
    price: 18.5,
    category: "Electrónica",
    description: "Sonido potente, batería de larga duración.",
    image: "https://picsum.photos/seed/aud02/600/400",
    rating: 4.3,
    stock: 7,
    tags: ["oferta"]
  },
  {
    id: "cam-03",
    name: "Camiseta Oversize",
    price: 12.0,
    category: "Ropa",
    description: "Tela suave, estilo urbano, varias tallas.",
    image: "https://picsum.photos/seed/cam03/600/400",
    rating: 4.4,
    stock: 20,
    tags: ["nuevo"]
  },
  {
    id: "mug-04",
    name: "Mug minimalista",
    price: 6.25,
    category: "Hogar",
    description: "Cerámica resistente, ideal para café.",
    image: "https://picsum.photos/seed/mug04/600/400",
    rating: 4.2,
    stock: 15,
    tags: []
  },
  {
    id: "kb-05",
    name: "Teclado Mecánico Compacto",
    price: 29.99,
    category: "Electrónica",
    description: "Switches táctiles, RGB, diseño compacto.",
    image: "https://picsum.photos/seed/kb05/600/400",
    rating: 4.7,
    stock: 5,
    tags: ["top"]
  }
];

function formatMoney(value) {
  return new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value);
}

app.locals.formatMoney = formatMoney;

// HOME
app.get("/", (req, res) => {
  const featured = products.filter(p => p.tags.includes("top") || p.tags.includes("nuevo")).slice(0, 3);
  res.render("index", {
    title: "Tienda Online - Clase 007",
    storeName: "NovaShop",
    tagline: "Compra fácil, rápido y seguro",
    featured
  });
});

// LISTADO
app.get("/productos", (req, res) => {
  const q = (req.query.q || "").toLowerCase().trim();
  const category = (req.query.category || "").toLowerCase().trim();

  let filtered = products;

  if (q) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category);
  }

  const categories = [...new Set(products.map(p => p.category))];

  res.render("products", {
    title: "Productos",
    storeName: "NovaShop",
    products: filtered,
    categories,
    q: req.query.q || "",
    activeCategory: req.query.category || ""
  });
});

// DETALLE
app.get("/producto/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).send("Producto no encontrado");

  res.render("product-detail", {
    title: product.name,
    storeName: "NovaShop",
    product
  });
});

// OFERTAS
app.get("/ofertas", (req, res) => {
  const offers = products.filter(p => p.tags.includes("oferta"));
  res.render("offers", {
    title: "Ofertas",
    storeName: "NovaShop",
    offers
  });
});

// CONTACTO
app.get("/contacto", (req, res) => {
  res.render("contact", {
    title: "Contacto",
    storeName: "NovaShop"
  });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
