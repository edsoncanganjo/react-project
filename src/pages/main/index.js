import React,  { component, Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    componentDidMount(){
        this.loadProducts();

    }
    loadProducts = async () => {
        const response = await api.get('');
    }
    render(){
       return <h1>Olá, este é parte do início</h1>
   }
}