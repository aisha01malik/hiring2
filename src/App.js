import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {

  function handleCallbackResponse(response) {
  console.log("encoded jwt id token" + response.credential);
  }
  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({ 
      client_id: "964065372421-010305knudb3j34k6n41pnsc1ddkdcs2.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
  
    google.accounts.id.renderButton(   
      document.getElementById("signInDiv"),   
      { theme: "outline", size: "large"} 
    );
  }, []);

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => { 
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div id="signInDiv"> </div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
