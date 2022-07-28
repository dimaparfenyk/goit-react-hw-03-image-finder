import React, { Component } from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { Container } from "./App.styled";

 export  class App extends Component {
  state={
    itemName: '',
    hits:[]
  }
   
   componentDidUpdate(prevProps, prevState) {
     if (prevState.itemName !== this.state.itemName) {
       fetch(`https://pixabay.com/api/?key=27652237-fecf1e648e251b2f1d2bb2568&q=${this.state.itemName}&page=1&image_type=photo&orientation=horizontal&per_page=12`)
         .then(res => res.json())
         .then(({ hits })=>this.setState({hits}))
     }
   }
   handleFormSubmit = itemName => {
       this.setState({ itemName })  
   };
 
   render() {
     return (
       <Container>
         <SearchBar
           onSubmit={this.handleFormSubmit}
         />
           <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                />
         <Modal/>
         <ImageGallery
           itemName={this.state.itemName}
            hits={this.state.hits}>
         </ImageGallery>
         <Button></Button>
       </Container>
     );
   }
};
