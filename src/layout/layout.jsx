import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import Earbuds from "../views/earbuds/earbudsView.jsx";
import Smartwatch from "../views/smartwatch/smartwatchView.jsx";

const Layout = () => {
return(
    <div>
        <div>
            <Navbar />
            <main>
                <Earbuds/>
                <Smartwatch/>
            </main>
        </div>
        < Footer/>
    </div>
);
};
export default Layout;