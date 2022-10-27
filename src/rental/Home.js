import { Component } from "react";
import React from "react";
import Pinjam from "./Pinjam";
import Sewa from "./Sewa";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    state = {
        component1: false,
        component2: false,
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Jangan Sungkan!`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('SELAMAT DATANG!');
    }
    changecomponent1 = () => {
        this.setState((state) => {
            return { component1: !this.state.component1 }
        })
    }
    changecomponent2 = () => {
        this.setState((state) => {
            return { component2: !this.state.component2 }
        })
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        {this.state.component2 ? <Sewa /> : ''}
                        <button class="button btn btn-lg btn-primary" onClick={this.changecomponent2}>{this.state.component2 ? 'Tutup' : 'Lihat'} Menu List Kendaraan</button>
                    </div>
                    <div class="col-sm">
                    {this.state.component1 ? <Pinjam /> : ''}
                        <button class="button btn btn-lg btn-primary"  onClick={this.changecomponent1}>{this.state.component1 ? 'Tutup' : 'Lihat'} Menu Harga Sewa </button>
                    </div>
                </div>               
            </div>
        );
    }
}
export default Home;
