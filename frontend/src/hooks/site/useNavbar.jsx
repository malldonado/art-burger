
import { useState, useEffect} from "react";
const products = [
  // Produtos fictícios para o modal do carrinho
];

const useNavbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isRegisterOpen) {
      setIsLoginOpen(false);
    }
  }, [isRegisterOpen, setIsLoginOpen]);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const openCartModal = () => setIsCartOpen(true);
  const closeCartModal = () => setIsCartOpen(false);
  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);
  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);
  const openSearchModal = () => setIsSearchOpen(true);
  const closeSearchModal = () => setIsSearchOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return { 
    isCartOpen,
    isLoginOpen,
    isRegisterOpen,
    isSearchOpen,
    isMenuOpen,
    isChecked,
    openCartModal,
    closeCartModal,
    openLoginModal,
    closeLoginModal,
    openRegisterModal,
    closeRegisterModal,
    openSearchModal,
    closeSearchModal,
    toggleMenu,
    handleChange,
    products
  }
}

export default useNavbar;