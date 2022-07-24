import React, {Component} from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { Container } from "./App.styled";

 export default class App extends Component {
//   state={
    
//  }
  //  componentDidMount() {
  //    fetch('https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12')
  //      .then(res => res.json())
  //      .then(console.log);
  //  }
 
   render() {
     return (
       <Container>
         <SearchBar></SearchBar>
         <Modal></Modal>
         <ImageGallery></ImageGallery>
         <Button></Button>
       </Container>
     );
   }
};
