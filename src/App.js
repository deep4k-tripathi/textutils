import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#11375e'
      showAlert("Dark Mode has been activated", "success")
      document.title = "TextUtils-Dark Mode"
      // setInterval(() => {
      //   document.title="Download Opera mini"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Abhi Virus Hataye"
      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been activated", "success")
      document.title = "TextUtils-Light Mode"
    }
  }

  return (
    <>
      <BrowserRouter>
        {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text below" showAlert={showAlert} mode={mode} />} />
          </Routes>
          {/* <TextForm heading="Enter your text below" showAlert={showAlert} mode={mode} /> */}
          {/* <About /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
