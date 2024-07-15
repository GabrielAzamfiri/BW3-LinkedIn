import LinkedInNavbar from './Navbar/Navbar';

const App = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDhjZTE5NmQ3YjAwMTVkNmI1MjciLCJpYXQiOjE3MjEwMzA4NjMsImV4cCI6MTcyMjI0MDQ2M30.DbVEVRqQY4phbdkLMOi3ZHqb-YzdtcDgdMhCsI9iO6k";
  localStorage.setItem('token', token);

  return (
    <div className="App">
      <LinkedInNavbar />
      <div className="content">

      </div>
    </div>
  );
};

export default App;
