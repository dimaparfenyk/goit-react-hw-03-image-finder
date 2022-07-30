import React from "react";
import { ImgGallery } from "./ImgGallery.styled";
import {ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"

export function ImageGallery  ({hits, openModal }) 
          {return (<ImgGallery className="gallery" >        
           {hits.map(({ id, webformatURL, tags, largeImageURL}) => 
               <ImageGalleryItem
                   key={id}
                   webformatURL={webformatURL}
                   tag={tags} 
                   openModal={openModal}
                   largeImageURL={largeImageURL}
                   />
            )}     
        </ImgGallery>)}
        
   

 