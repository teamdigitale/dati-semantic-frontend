import PropTypes from "prop-types";

function SkipToContent({ mainRef, footerRef }) {
  return (
    <div>
      <a
        href="#main"
        className="sr-only sr-only-focusable"
        onClick={() => mainRef.current.focus()}
      >
        Vai al contenuto principale
      </a>
      <a
        href="#footer"
        className="sr-only sr-only-focusable"
        onClick={() => footerRef.current.focus()}
      >
        Vai al footer
      </a>
    </div>
  );
}

SkipToContent.propTypes = {
  mainRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  footerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default SkipToContent;
