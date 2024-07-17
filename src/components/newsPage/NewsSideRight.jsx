import "../../../src/App.css";

function NewsSideRight() {
  return (
    <>
      <div className="newsSideRightCard">
        <div className="nsrCard-header">
          <h2>LinkedIn Notizie</h2>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
          </span>
        </div>
        <div className="nsrCard-content">
          <h3>Storie principali</h3>
          <ul>
            <li>
              <a href="#">Semaforo giallo per il talento elettri...</a>
              <p className="nsr-details">7 giorni fa • 6.653 lettori</p>
            </li>
            <li>
              <a href="#">Dal principio di scarsità al valore</a>
              <p className="nsr-details">1 giorno fa • 3.463 lettori</p>
            </li>
            <li>
              <a href="#">Come nasce una buona abitudine</a>
              <p className="nsr-details">2 giorni fa • 2.693 lettori</p>
            </li>
            <li>
              <a href="#">PizzAut moltiplica i suoi truckfood</a>
              <p className="nsr-details">7 giorni fa • 843 lettori</p>
            </li>
            <li>
              <a href="#">Chi ha preso la guida di IBM Italia</a>
              <p className="nsr-details">4 giorni fa • 309 lettori</p>
            </li>
          </ul>
          <a href="#" className="more">
            Vedi altro
          </a>
        </div>
        <div className="nsrCard-footer">
          <a href="#">Informazioni</a> •<a href="#">Accessibilità</a> •
          <a href="#">Centro assistenza</a> •
          <a href="#">Privacy e condizioni</a> •
          <a href="#">Opzioni per gli annunci pubblicitari</a> •
          <a href="#">Pubblicità</a> •<a href="#">Servizi alle aziende</a> •
          <a href="#">Scarica l app LinkedIn</a> •<a href="#">Altro</a>
          <p>
            {" "}
            <img src="/linkedin.svg"></img> LinkedIn Corporation © 2024
          </p>
        </div>
      </div>
    </>
  );
}

export default NewsSideRight;
