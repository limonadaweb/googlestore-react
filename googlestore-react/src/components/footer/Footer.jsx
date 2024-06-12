import "../footer/Footer.css";
const footer = () => {
  return (
    <>
      <footer>
        <div id="redesSociales">
          <img
            src="src/assets/images/icons/SM-x.svg"
            alt="logo-twitter"
            id="logoTT"
          />
          <img
            src="src/assets/images/icons/SM-instagram.svg"
            alt="logo-IG"
            id="logoIG"
          />
          <img
            src="src/assets/images/icons/SM-facebook.svg"
            alt="logo-FB"
            id="logoFB"
          />
          <img
            src="src/assets/images/icons/SM-youtube.svg"
            alt="log-YT"
            id="logoYT"
          />
          <img
            src="src/assets/images/icons/SM-tiktok.svg"
            alt="logo-TT"
            id="logoTT"
          />
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
