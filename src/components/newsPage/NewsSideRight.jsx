function NewsSideRight() {
  return (
    <>
      <div className="newsSideRightCard">
        <div className="nsrCard-header">
          <h2>LinkedIn Notizie</h2>
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-info-lg"
              viewBox="0 0 16 16"
            >
              <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" />
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
