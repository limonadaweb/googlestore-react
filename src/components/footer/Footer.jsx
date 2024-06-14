import "../footer/Footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <>
      <footer>
        <div id="redesSociales">
          <Link to="https://x.com/madebygoogle"><img
            src="src/assets/images/icons/SM-x.svg"
            alt="logo-twitter"
            id="logoTT"
          /></Link>
          <Link to="https://www.instagram.com/madebygoogle/"><img
            src="src/assets/images/icons/SM-instagram.svg"
            alt="logo-IG"
            id="logoIG"
          /></Link>
          <Link to ="https://www.facebook.com/madebygoogle"><img
            src="src/assets/images/icons/SM-facebook.svg"
            alt="logo-FB"
            id="logoFB"
          /></Link>
          <Link to="https://www.facebook.com/madebygoogle"><img
            src="src/assets/images/icons/SM-youtube.svg"
            alt="log-YT"
            id="logoYT"
          /></Link>
          <Link to="https://www.facebook.com/madebygoogle"><img
            src="src/assets/images/icons/SM-tiktok.svg"
            alt="logo-TT"
            id="logoTT"
          /></Link>
        </div>
        <div id="espacio-derecha">
          <div id="espanha">
            {" "}
            <img
              src="src/assets/images/icons/Spain.svg"
              alt="logo-espana"
              id="logoSp"
            />
            Spain
          </div>
          <p id="privacy">Privacy</p>
          <p id="gNC">Google Nest Commitment to Privacy</p>
          <p id="salesTerm">Sales term</p>
          <p id="TermService">Term of Service</p>
        </div>
      </footer>
    </>
  );
};
export default footer;
