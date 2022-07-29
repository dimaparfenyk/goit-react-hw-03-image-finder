import { ImgGallery } from "./ImgGallery.styled";
import {ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({hits }) => 
           <ImgGallery className="gallery" >        
           {hits.map(({ id, webformatURL, tags}) => 
               <ImageGalleryItem
                   key={id}
                   webformatURL={webformatURL}
                   tag={tags}
                   />
            )}     
        </ImgGallery>
        
   

 