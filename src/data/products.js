import headphones from "../images/headphones.jpg";
import laptopstand from "../images/laptopstand.jpg";
import monitorstand from "../images/monitorstand.jpg";
import mouse from "../images/mouse.jpg";
import watch from "../images/watch.jpg";
import webcam from "../images/webcam.jpg";
import usb from "../images/usb.jpg";
import keyboard from "../images/keyboard.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: headphones,
    description: "premium wireless headphones with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image: watch,
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and smartphone connectivity",
  },
  {
    id: 3,
    name: "Laptop stand",
    price: 49.99,
    image: laptopstand,
    description:
      "Ergonomic aluminium laptop stand that improves posture and enhances airflow for better cooling",
  },
  {
    id: 4,
    name: "Mechanical keyboard",
    price: 249.99,
    image: keyboard,
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches for fast and responsive typing ",
  },
  {
    id: 5,
    name: "USB-C-HUB",
    price: 39.99,
    image: usb,
    description: "Multi-port USB-C hub with HDMI, USB 3.0 and SD card",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image: mouse,
    description:
      "Ergonomic wireless mouse with precision tracking and long-lasting battery life",
  },
  {
    id: 7,
    name: "Monitor stand",
    price: 79.99,
    image: monitorstand,
    description: "Dual monitor stand with adjustable height and tilt.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image: webcam,
    description:
      "1080p HD webcam with auto-focus and built-in microphone for crystal-clear video calls ",
  },
];

export function getProducts() {
  return products;
}
export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
