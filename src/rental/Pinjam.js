import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Pinjam extends Component {
    state = {
        isi: 0
    }
    componentDidMount(){
        alert('Silakan tentukan berapa lama anda ingin menyewa kendaraan')
    }
    tambahisi = () => {
        this.setState((state) => { return { isi: state.isi + 1 } })
    }
    kurangiisi = () => {
        this.setState((state) => { return { isi: state.isi - 1 } })
    }
    componentWillUnmount(){
        alert('Terima kasih sudah menggunakan jasa kami')
    }
    render() {
        return (
            <div class="container">
                <h3>Daftar harga sewa kendaraan</h3>
                <ul class="list">
                    <li>Avanza  : Rp 350.000 / hari</li>  
                    <li>Innova  : Rp 450.000 / hari</li>
                    <li>Brio    : Rp 350.000 / hari</li>
                    <li>Mobilio : Rp 370.000 / hari</li>
                    <li>Jazz    : Rp 400.000 / hari</li>
                    <li>Camry   : Rp 900.000 / hari</li>
                </ul>
                <h4>Total waktu sewa : {this.state.isi} hari</h4>
                <button class="btn btn-danger" onClick={this.kurangiisi}><b>-</b></button>
                <button class="btn btn-success ms-1" onClick={this.tambahisi}><b>+</b></button>
                
                <br/>
            </div>
        );
    }
}
export default Pinjam;
