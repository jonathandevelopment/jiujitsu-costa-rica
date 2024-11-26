import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-sky-600 p-4">
            <div className="flex justify-between container mx-auto  text-white font-bold">
                <span>Jiujitsu Costa Rica</span>
                <ul className="hidden md:flex space-x-6">
                    <li className="hover:underline"><Link href="/">Inicio</Link></li>
                    <li className="hover:underline"><Link href="/">Nosotros</Link></li>
                    <li className="hover:underline"><Link href="/">Tienda</Link></li>
                    <li className="hover:underline"><Link href="/">Academias</Link></li>
                    <li className="hover:underline"><Link href="/">Blog</Link></li>
                    <li className="hover:underline"><Link href="/">Noticias</Link></li>
                    <li className="hover:underline"><Link href="/">Contacto</Link></li>
                </ul>
                <div className="md:hidden">
                    <button  className="text-white focus:outline-none">
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                            
                        </svg>
                    </button>


                </div>
            </div>

            {/* menu on mobile */}
            <div className="bg-slate-400 absolute top-0 left-0 right-0 bottom-0  z-50 ">
                <button
                    // onClick={toggleMenu}
                    className="absolute top-4 right-4 text-white hover:text-emerald-600 focus:outline-none"
                >
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                <span>Jiujitsu Costa Rica</span>
                <ul className="space-y-6 text-left">
            <li>
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                // onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                // onClick={toggleMenu}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                // onClick={toggleMenu}
              >
                Tienda
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                // onClick={toggleMenu}
              >
                Academias
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                // onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-emerald-600"
                // onClick={toggleMenu}
              >
                Noticias
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="px-6 py-3 bg-orange-900 text-white text-lg font-semibold rounded-full hover:bg-orange-700 transition duration-300"
                // onClick={toggleMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>

            </div>
        </nav>
    );
}