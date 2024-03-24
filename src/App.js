import "./App.css";
import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const apiKey = process.env.REACT_APP_API_KEY;

// function App() {
//   const [ipData, setIpData] = useState();
//   const [searchResult, setSearchResult] = useState();

//   const searchRef = useRef();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // This is the initial function that will be called when the page is initially loaded to get your ip address
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch");
//       }

//       const ip = await response.json();
//       setIpData(ip);
//     } catch (error) {
//       throw new Error(error);
//     }
//   };

//   // When the search form is submitted this function receives the value and conducts some checks on it before passing it to the next function that will make the Api call
//   function handleSubmit(e) {
//     e.preventDefault();
//     const value = searchRef.current.value;

//     // For the input to be valid it should meet two conditions.
//     // It should have values present when the white space is removed.
//     // Both IP addresses and domain names have a "." included so the input value should have one
//     const isInputValid = value.trim().length > 0 && value.includes(".");

//     if (isInputValid) {
//       // If the input is valid then it is passed on to the startSearch function
//       startSearch(value);
//       searchRef.current.value = "";
//     } else {
//       // If the input is not valid it should return an alert stating so
//       return alert("Enter a valid search input");
//     }
//   }

//   // Search for Ip address or domain name
//   async function startSearch(value) {
//     try {
//       const response = await fetch(
//         `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${value}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch");
//       }
//       const responseData = await response.json();
//       setSearchResult(responseData);
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   // If there is a search made then the page data will be set to the search result else the page data will be the initial location data
//   const pageData = searchResult ? searchResult : ipData;

//   return (
//     <div className="App">
//       {!pageData && <h1>Loading</h1>}
//       {pageData && (
//         <div>
//           <div className="firstContainer">
//             <div className="">
//               <h1>IP Address Tracker</h1>
//               <div className="formbox">
//                 <form action="#" className="form_input" onSubmit={handleSubmit}>
//                   <input
//                     type="text"
//                     className="input_field"
//                     ref={searchRef}
//                     placeholder="Search for any IP address or domain"
//                   />
//                   <button className="input_btn">
//                     <img src="/images/icon-arrow.svg" alt="button_icon" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="secondContainer">
//             <div className="secondContainerDetail">
//               <span>IP ADDRESS</span>
//               <h2>{pageData.ip}</h2>
//             </div>
//             <div className="secondContainerDetail">
//               <span>LOCATION</span>
//               <h2>
//                 {pageData.location.city}, {pageData.location.country}
//                 {pageData.location.postalCode}
//               </h2>
//             </div>
//             <div className="secondContainerDetail">
//               <span>TIMEZONE</span>
//               <h2>{pageData.location.timezone}</h2>
//             </div>
//             <div className="secondContainerDetail">
//               <span>ISP</span>
//               <h2> {pageData.isp} </h2>
//             </div>
//           </div>
//           <div className="thirdContainer">
//             <div>
//               <MapContainer
//                 style={{
//                   height: 536,
//                   width: "100%",
//                 }}
//                 center={[pageData.location.lat, pageData.location.lng]}
//                 zoom={13}
//                 scrollWheelZoom={false}
//               >
//                 <TileLayer
//                   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker
//                   position={[pageData.location.lat, pageData.location.lng]}
//                 >
//                   <Popup>Your IP Location</Popup>
//                 </Marker>
//               </MapContainer>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <div>
        <div className="firstContainer">
          <div>
            <h1>IP Address Tracker</h1>
            <div className="formbox">
              <form action="#" className="form_input">
                <input
                  type="text"
                  className="input_field"
                  placeholder="Search for any IP address or domain"
                />
                <button className="input_btn">
                  <img src="/images/icon-arrow.svg" alt="button_icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="secondContainer">
          <div className="secondContainerDetail">
            <span>IP ADDRESS</span>
            <h2>197.211.58.101</h2>
          </div>
          <div className="secondContainerDetail">
            <span>LOCATION</span>
            <h2>Oroke, NG</h2>
          </div>
          <div className="secondContainerDetail">
            <span>TIMEZONE</span>
            <h2>+01:00</h2>
          </div>
          <div className="secondContainerDetail">
            <span>ISP</span>
            <h2>Globacom Limited</h2>
          </div>
        </div>
        <div className="thirdContainer">
          <div>
            <MapContainer
              className="mapContainer"
              center={[6.43333, 3.41667]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[6.43333, 3.41667]}>
                <Popup>Your IP Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
