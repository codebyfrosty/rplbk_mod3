import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Sewa extends Component {
    state = {
        Sewa: " "
    }
    componentDidMount(){
        alert('Berikut adalah List Kendaraannya')
    }
    ChangeSewa = () => {
        this.setState((state) => { 
            if (state.Sewa === "Diskon 10%") {
                return {Sewa : "Diskon 20%"}   
            } else if (state.Sewa === "Diskon 20%") {
                return {Sewa : "Cashback 10%"}                 
            }
            else if (state.Sewa === "Cashback 10%") {
                return {Sewa : "Diskon 15%"}                 
            }
            else {
                return {Sewa : "Diskon 10%"}                 
            }
        })
    }
  componentWillUnmount(){
        alert('Terima Kasih & sampai jumpa!')
    }
    render() {
        return (
            <div class="container-fluid ">  
                <h3>List Kendaraan</h3>                       
                <ul class="list">
                    <li>Toyota Avanza</li>  
                    <li>Toyota Innova</li>  
                    <li>Honda Brio</li>
                    <li>Honda Mobilio</li>
                    <li>Honda Jazz</li>
                    <li>Toyota Camry</li>
                </ul>
                <p><b>Klik tombol dibawah untuk mendapatkan Diskon!</b></p>
                <button type="button" class="btn btn-primary" onClick={this.ChangeSewa}>Klik</button>
                <br/>
                <br/>
                <p><b>{this.state.Sewa}</b></p>
            </div>
        );
    }
}
export default Sewa;
