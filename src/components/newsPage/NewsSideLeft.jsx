import { Link } from "react-router-dom";
import "../../../src/App.css";
import { useSelector } from "react-redux";

function NewsSideLeft() {
  const profile = useSelector(state => state.profile.profile);

  return (
    <>
      {profile && (
        <div className="newsSideLeftCard">
          <div className="nslHeader">
            <div className="nslAvatar">
              <img src={profile.image} alt="Profile Picture" />
            </div>
          </div>
          <div className="nslContent">
            <Link className="text-dark fw-bold link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to={"/"}>
              {profile.name} {profile.surname}
            </Link>
            <p>{profile.title}</p>
          </div>
          <div className="nslFooter">
            <div className="nslSection">
              <p>Collegamenti</p>
              <a href="#">Espandi la tua rete</a>
              <a href="#">
                {" "}
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="nslSection">
              <p>Sblocca strumenti e informazioni Premium</p>
              <a href="#" className="premium">
                Prova Premium per 0 EUR
              </a>
            </div>
            <div className="nslSection">
              <span className="icon2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                </svg>
              </span>
              <a href="#">Elementi salvati</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewsSideLeft;
