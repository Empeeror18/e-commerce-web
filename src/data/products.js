const products = [
  {
    id: 1,
    name: "PlayStation 5 Slim",
    category: "Consoles",
    price: 499.99,
    image:
      "https://store.sony.co.nz/media/catalog/product/p/l/playstation5wslim.png",
    description:
      "The PlayStation 5 Slim delivers next-generation gaming with ultra-fast SSD loading and stunning 4K graphics.",
    rating: 4.8,
    stock: 12,
  },
  {
    id: 2,
    name: "Xbox Series X",
    category: "Consoles",
    price: 499.99,
    image:
      "https://media.cdn.kaufland.de/product-images/1024x1024/0ec669be9811b9b470618a225214a878.jpg",
    description:
      "Experience powerful next-generation gaming with 4K resolution and high frame rates.",
    rating: 4.7,
    stock: 8,
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    category: "Consoles",
    price: 349.99,
    image:
      "https://d30u9wim1barf6.cloudfront.net/Custom/Content/Products/10/02/1002357_nac011484_l4_638170896476225092.jpg",
    description:
      "Enjoy handheld and docked gaming with a vibrant 7-inch OLED display.",
    rating: 4.6,
    stock: 15,
  },
  {
    id: 4,
    name: "DualSense Wireless Controller",
    category: "Accessories",
    price: 69.99,
    image:
      "https://gamestore.com.kw/shop/s676776-ps5-dualsense-wireless-controller-white-5932",
    description:
      "Feel immersive haptic feedback and adaptive triggers with the PlayStation 5 DualSense controller.",
    rating: 4.8,
    stock: 25,
  },
  {
    id: 5,
    name: "Xbox Wireless Controller",
    category: "Accessories",
    price: 59.99,
    image:
      "https://media.cdn.kaufland.de/product-images/1024x1024/0ec669be9811b9b470618a225214a878.jpg",
    description:
      "Comfortable wireless controller compatible with Xbox consoles and PC.",
    rating: 4.5,
    stock: 20,
  },
  {
    id: 6,
    name: "Logitech G502 HERO",
    category: "Gaming Mice",
    price: 49.99,
    image:
      "https://resource.logitech.com/content/dam/logitech/en/products/mice/g502-hero/gallery/g502-hero-gallery-1.png",
    description:
      "High-performance gaming mouse featuring the HERO sensor and customizable buttons.",
    rating: 4.7,
    stock: 18,
  },
  {
    id: 7,
    name: "Razer DeathAdder V3",
    category: "Gaming Mice",
    price: 69.99,
    image:
      "https://assets2.razerzone.com/images/pnx.assets/6f7d6a0e8f6d8f3e8d5c7c1e7c4c7d0f/deathadder-v3-pro-black.png",
    description:
      "Lightweight ergonomic gaming mouse designed for competitive gaming.",
    rating: 4.8,
    stock: 10,
  },
  {
    id: 8,
    name: "SteelSeries Apex Pro",
    category: "Gaming Keyboards",
    price: 179.99,
    image: "https://steelseries.com/cdn/shop/files/apex-pro.png",
    description:
      "Premium mechanical gaming keyboard with adjustable actuation switches and RGB lighting.",
    rating: 4.7,
    stock: 7,
  },
  {
    id: 9,
    name: "HyperX Alloy Origins",
    category: "Gaming Keyboards",
    price: 89.99,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6407/6407585ld.jpg",
    description:
      "Durable mechanical gaming keyboard with RGB lighting and responsive switches.",
    rating: 4.6,
    stock: 14,
  },
  {
    id: 10,
    name: "SteelSeries Arctis Nova 7",
    category: "Gaming Headsets",
    price: 149.99,
    image: "https://m.media-amazon.com/images/I/61bM3jM8pYL.jpg",
    description:
      "Wireless gaming headset with high-quality audio and multi-platform support.",
    rating: 4.7,
    stock: 9,
  },
  {
    id: 11,
    name: "HyperX Cloud III",
    category: "Gaming Headsets",
    price: 99.99,
    image: "https://m.media-amazon.com/images/I/61e7b7k5YHL.jpg",
    description:
      "Comfortable wired gaming headset with detailed audio and a noise-cancelling microphone.",
    rating: 4.8,
    stock: 16,
  },
];

export function getProducts() {
    return products;
}
