import { Link, Outlet } from "react-router-dom";
import logo from "./assets/yumify.png";
import Button from "./components/Button";
import { useAuth } from "./hooks/useAuth";
import "./styles/App.css";

export default function App() {
  const { user } = useAuth();

  if (user?.role !== "user") {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4 bg-neutral-100 ">
        <h1 className="text-2xl font-bold text-neutral-700">Bienvenue sur Yumify 🥦</h1>
        <p className="text-neutral-600">Se simplifier la vie, pour manger mieux !</p>
        <div className="flex space-x-4 mt-4">
          <Button theme="bordered">Se connecter</Button>
          <Button>S'inscrire</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-6 lg:p-8 lg:grid lg:grid-cols-3 bg-green-400 text-neutral-50  ">
        <div className="w-fit">
          <Link to="/" className="flex items-center space-x-2 lg:space-x-4">
            <figure className="size-8 lg:size-12 bg-white rounded-full flex justify-center items-center ">
              <img src={logo} alt="Logo" className="lg:size-8  size-5" />
            </figure>
            <h1 className="text-xl lg:text-4l  font-extrabold">Yumify</h1>
          </Link>
        </div>

        <nav className="flex items-center justify-center text-base space-x-4 font-bold  lg:text-xl">
          <ul>
            <Link to="/">
              <li>Accueil</li>
            </Link>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="p-10 bg-gray-700 text-neutral-50 text-center text-sm">
        <p>© 2025 Yumify. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
