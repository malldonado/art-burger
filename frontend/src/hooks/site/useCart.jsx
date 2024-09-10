import { useState, useEffect } from 'react';

export default function useCart() {
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Simulando a busca de produtos do carrinho (poderia vir de uma API, por exemplo)
  useEffect(() => {
    const initialProducts = [
      {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: 90.00,
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
      },
      {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: 32.00,
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      },
      // Mais produtos...
    ];

    setProducts(initialProducts);
    calculateSubtotal(initialProducts);
  }, []);

  // Função para abrir o modal do carrinho
  const openCartModal = () => setCartOpen(true);

  // Função para fechar o modal do carrinho
  const closeCartModal = () => setCartOpen(false);

  // Função para calcular o subtotal
  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, product) => sum + product.price * product.quantity, 0);
    setSubtotal(total.toFixed(2));
  };

  return {
    products,
    openCartModal,
    closeCartModal,
    cartOpen,
    subtotal,
  };
}
