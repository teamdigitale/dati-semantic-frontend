import "./CookiePanel.css";

const CookiePanel = () => {
  return (
    <div className="cookiebar" role="contentinfo">
      <p>
        Questo sito utilizza cookie tecnici, analytics e di terze parti.
        Proseguendo nella navigazione accetti l’utilizzo dei cookie.
      </p>
      <div className="cookiebar-buttons">
        <button
          data-accept="cookiebar"
          className="cookiebar-btn cookiebar-confirm"
        >
          Accetto<span className="visually-hidden"> i cookies</span>
        </button>
      </div>
    </div>
  );
};

CookiePanel.propTypes = {};
export default CookiePanel;
