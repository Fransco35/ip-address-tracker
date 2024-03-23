import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="firstContainer">
        <div className="">
          <h1>IP Address Tracker</h1>
          <div class="formbox">
            <form action="#" class="form_input">
              <input
                type="text"
                class="input_field"
                placeholder="Search for any IP address or domain"
              />
              <button class="input_btn">
                <img src="/images/icon-arrow.svg" alt="icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="secondContainer">
        <div className="secondContainerDetail">
          <span>IP ADDRESS</span>
          <h2>192.212.174.101</h2>
        </div>
        <div className="secondContainerDetail">
          <span>LOCATION</span>
          <h2>Brooklyn, NY 10001</h2>
        </div>
        <div className="secondContainerDetail">
          <span>TIMEZONE</span>
          <h2>UTC -05:00</h2>
        </div>
        <div className="secondContainerDetail">
          <span>ISP</span>
          <h2> SpaceX Starlink</h2>
        </div>
      </div>
      <div className="thirdContainer"></div>
    </div>
  );
}

export default App;
