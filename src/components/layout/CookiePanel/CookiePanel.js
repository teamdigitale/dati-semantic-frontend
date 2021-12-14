const CookiePanel = () => {
  return (
    <div className="cookiebar">
      <p>
        Questo sito utilizza cookie tecnici, analytics e di terze parti.
        <br />
        Proseguendo nella navigazione accetti l’utilizzo dei cookie.
      </p>
      <div className="cookiebar-buttons">
        <a href="#" className="cookiebar-btn">
          Preferenze<span className="sr-only">cookies</span>
        </a>
        <button
          data-accept="cookiebar"
          className="cookiebar-btn cookiebar-confirm"
        >
          Accetto<span className="sr-only"> i cookies</span>
        </button>
      </div>
    </div>
  );
};

CookiePanel.propTypes = {};
CookiePanel.defaultProps = {};
export default CookiePanel;
