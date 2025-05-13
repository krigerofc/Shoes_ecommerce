import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // ícones de redes sociais

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4 text-aing-center">
      <div className="max-w-screen-xl mx-auto">
        {/* Seção de navegação */}
        <div className="flex justify-center space-x-24 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre</h3>
            <ul>
              <li><a href="/" className="hover:text-yellow-500">Quem Somos</a></li>
              <li><a href="/" className="hover:text-yellow-500">Política de Privacidade</a></li>
              <li><a href="/" className="hover:text-yellow-500">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul>
              <li><a href="mailto:contato@loja.com" className="hover:text-yellow-500">Email: contato@loja.com</a></li>
              <li><a href="tel:+123456789" className="hover:text-yellow-500">Telefone: +12 3456 789</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shoestore. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
