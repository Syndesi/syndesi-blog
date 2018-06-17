import React from 'react';
import { Link } from 'react-router-dom';


export default class Footer extends React.Component {

    render(){
        return (
            <footer class="footer bg-dark py-4">
                <div class="container">
                    <span class="text-light">Created by <a href="https://www.syndesi.de" target="_blank">Syndesi</a></span>
                </div>
            </footer>
        );
    }
}