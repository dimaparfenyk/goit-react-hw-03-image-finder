import  { Component } from "react";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchApi } from "fetchApi/fetch";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { Loader } from "components/Loader/Loader";
import { Container } from "./App.styled";

 export  class App extends Component {
  state={
    itemName: '',
    hits: [],
    totalHits:0,
    page: 1,
    preLoading: false,
    error:null,
  }
   
   componentDidUpdate(_, prevState) {
     const {itemName,page}=this.state
     console.log('outside')
     console.log(SearchApi())
     if (prevState.itemName !== itemName && prevState.page!==page) {
      console.log('inside')
       this.setState({ preLoading: true });
    
        SearchApi(itemName, page).then(({ hits, totalHits }) => {
             console.log('first then')
          this.setState({ totalHits:totalHits});
          if (prevState.page !== page) {
            this.setState(prevState => ({
              hits: [...prevState.hits, ...hits],
            }));
          }
          if (prevState.itemName !== itemName) {
            this.setState({ hits:hits });
          }
        })
        .catch(error =>this.setState({error}))
        .finally(()=>this.setState({ preLoading:false}))
     }
   }

   handleFormSubmit = itemName => {
       this.setState({ itemName })  
   }
   
   onLoadMore = () => {
     this.setState(prevState => ({ page: prevState.page + 1 }));
  };
 
   render() {
     const { itemName, hits, preLoading } = this.state;
     
     return (
       <Container>
         <SearchBar
           onSubmit={this.handleFormSubmit} />
         
         <ToastContainer
              position="top-right"
              autoClose={3000}
              closeOnClick/>
         <Modal/>
         <ImageGallery
            itemName={itemName}
            hits={hits}/>
          {!hits.length ||
           <Button onClick={this.onLoadMore} />}
         {preLoading && <Loader/>}
       </Container>
     );
   }
}
