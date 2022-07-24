import React, { Component } from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { Container } from "./App.styled";

 export default class App extends Component {
  state={
    itemName:''
 }
   handleFormSubmit = itemName => {
     this.setState({ itemName:itemName });
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
         <Modal></Modal>
         <ImageGallery></ImageGallery>
         <Button></Button>
       </Container>
     );
   }
};
