import React from 'react';
import './App.css';
import Home from "./rental/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div id = "wrapper" className="App container border">
        <div class="container">                     
            <h1 class="mt-5"> Website Sewa Kendaraan</h1>
            <img src='https://www.bastianrental.com/wp-content/uploads/2018/05/Banner-rental-mobil-murah-1.png' alt=''></img>
            <h3 class="mt-5">Tugas Kelompok IV </h3>        
                <Home />
        </div>
      </div>
    )
  }
}

export default App;
