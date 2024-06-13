import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main id="container">
        <h1 id="welcomeMessage">Bienvenido a Google Store!</h1>
          <blockquote id="quote">
            "Debes hacer cosas que realmente sean importantes, pero también
            debes divertirte, porque si no, no tendrás éxito."
            <cite>Larry Page</cite>
          </blockquote>
      </main>
      <Footer />
    </div>
  );
};


export default Layout;
