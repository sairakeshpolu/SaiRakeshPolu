import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//const axios = require("axios");
import axios from "axios";
import { AdditionForm } from './Addition'

const options = {
  method: 'GET',
  url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list',
  params: {id: 'markets'},
  headers: {
    'X-RapidAPI-Key': '56aa512f3amsh92bf3f1d5f13c46p1375bajsnee2d38c78d24',
    'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

class Mycomponent extends React.Component{
  render(){
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  

    return (
      <p> Successfully API connected</p>
    );
  }
}


root.render(
  <React.StrictMode>
    <App />
    <br></br>
    <br></br>
    <div className="row">
                    <AdditionForm/>
    </div>
    <div className="row">
    <Mycomponent/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
