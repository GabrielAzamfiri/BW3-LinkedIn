import { Dropdown } from "react-bootstrap";

const ForBusinessDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle as="div" className="d-flex flex-column align-items-center dropdown-toggle ms-2  pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
          <path d="M2 1h3v3H2V1zm4 0h3v3H6V1zm4 0h3v3h-3V1zM2 6h3v3H2V6zm4 0h3v3H6V6zm4 0h3v3h-3V6zM2 11h3v3H2v-3zm4 0h3v3H6v-3zm4 0h3v3h-3v-3z"/>
        </svg>
        <span>For Business</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-wide">
        <div className="d-flex p-3">
          <div className="me-4">
            <h6 className="fw-bold">Visit More LinkedIn Products</h6>
            <Dropdown.Item href="#sell" className="mt-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00aaff" className="bi bi-compass me-2" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm.893 3.957-2.601.929-.001.001a.625.625 0 0 0-.393.394l-.929 2.601a.625.625 0 0 0 .8.8l2.601-.929a.625.625 0 0 0 .393-.393l.929-2.601a.625.625 0 0 0-.8-.8zm-1.066 1.066a1.25 1.25 0 1 1-1.768 1.768 1.25 1.25 0 0 1 1.768-1.768z"/>
</svg>

              Sell
            </Dropdown.Item>
            <Dropdown.Item href="#groups" className="mt-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00aaff" className="bi bi-people me-2" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm9 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM7 8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2s.9-2 2-2h2c1.1 0 2 .9 2 2zm4 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2s.9-2 2-2h2c1.1 0 2 .9 2 2zm5 4a2 2 0 0 0-2-2h-8c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"/>
              </svg>
              Groups
            </Dropdown.Item>
            <p className="ms-2">Talent</p>
            <Dropdown.Item href="#talent-insights" className="mt-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00aaff" className="bi bi-file-bar-graph me-2" viewBox="0 0 16 16">
                <path d="M4 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5.5L10.5 1H4zM3 3a1 1 0 0 1 1-1h5v4h4v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3z"/>
                <path d="M7 7v6h1V7H7zm-2 2v4h1V9H5zm4 1v3h1v-3H9zm2-2v5h1V8h-1z"/>
              </svg>
              Talent Insights
            </Dropdown.Item>
            <Dropdown.Item href="#post-job" className="mt-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00aaff" className="bi bi-sign me-2" viewBox="0 0 16 16">
                <path d="M1 4.5A.5.5 0 0 1 1.5 4h13a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6zM15 4h-1v1H2V4H1v1H0v6h1v1h14v-1h1v-6h-1V4z"/>
                <path d="M2 6h12v4H2V6z"/>
                <path d="M7 10h2v4H7v-4z"/>
              </svg>
              Post a job
            </Dropdown.Item>
            <p className="ms-2">Sales</p>
            <Dropdown.Item href="#services-marketplace" className="mt-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00aaff" className="bi bi-sign me-2" viewBox="0 0 16 16">
                <circle cx="8" cy="4" r="3" fill="#007bff"/>
                <path d="M5 8.5L7 11l4-5" stroke="#007bff" fill="none"/>
                <path d="M2 14s1-4 6-4 6 4 6 4H2z" fill="#007bff"/>
              </svg>
              Services Marketplace
            </Dropdown.Item>
            <p  className="ms-2">Marketing</p>
            <Dropdown.Item href="#advertise" className="mt-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00aaff" className="bi bi-sign me-2" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 1.5a6.5 6.5 0 1 1-6.5 6.5A6.5 6.5 0 0 1 8 1.5zm0 1a5.5 5.5 0 1 0 5.5 5.5A5.5 5.5 0 0 0 8 2.5zM8 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm0 1a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm.5 1h1.5a.5.5 0 0 1 .5.5V8h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H9.5A.5.5 0 0 1 9 10.5V9H8.5a.5.5 0 0 1-.5-.5V7.5a.5.5 0 0 1 .5-.5H9V5.5A.5.5 0 0 1 9.5 5z"/>
              </svg>
              Advertise
            </Dropdown.Item>
            <p className="ms-2">Learning</p>
            <Dropdown.Item href="#learning" className="mt-3 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#00aaff" className="bi bi-sign me-2" viewBox="0 0 16 16">
                <path d="M8 1a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a3 3 0 0 1 3-3z"/>
                <path d="M7 9v4h2V9H7z"/>
              </svg>
              Learning
            </Dropdown.Item>
          </div>
          <div className="d-flex flex-column">
            <h6 className="fw-bold">Explore more for business</h6>
            <Dropdown.Item href="#hire-on-linkedin" className="mt-2 fw-bold">Hire on LinkedIn
                <span><br /><p className="fw-normal">Find, attract and recruit talent</p></span>
            </Dropdown.Item>
            <Dropdown.Item href="#sell-with-linkedin" className="mt-2 fw-bold">Sell with LinkedIn<span><br /><p className="fw-normal">Unlock sales opportunities</p></span></Dropdown.Item>
            <Dropdown.Item href="#post-job-for-free" className="mt-2 fw-bold">Post a job for free<span><br /><p className="fw-normal">Get qualified applicants quickly</p></span></Dropdown.Item>
            <Dropdown.Item href="#advertise-on-linkedin" className="mt-2 fw-bold">Advertise on LinkedIn<span><br /><p className="fw-normal">Acquire customers and grow your business</p></span></Dropdown.Item>
            <Dropdown.Item href="#learn-with-linkedin" className="mt-2 fw-bold">Learn with LinkedIn<span><br /><p className="fw-normal">Courses to develop your employees</p></span></Dropdown.Item>
            <Dropdown.Item href="#admin-center" className="mt-2 fw-bold">Admin Center<span><br /><p className="fw-normal">Manage billing and account details</p></span></Dropdown.Item>
            <Dropdown.Item href="#create-company-page" className="mt-4 fw-bold">Create a Company Page +</Dropdown.Item>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ForBusinessDropdown;
