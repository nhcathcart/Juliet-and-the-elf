import "./App.css";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="playlist-container">
        <div className="playlist-container-inner">
          <iframe
            src="https://open.spotify.com/embed/playlist/7fe24pHseJUwlnAb54I4qK"
            width="100%"
            height="380"
            allow="encrypted-media"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/playlist/0vrBiiUhCWPDOCUb6jdnvN"
            width="100%"
            height="380"
            allow="encrypted-media"
            style={{marginTop: "5px"}}
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/playlist/28QWTTUAS5tKYUl0y272nI"
            width="100%"
            height="380"
            allow="encrypted-media"
            style={{marginTop: "5px"}}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
