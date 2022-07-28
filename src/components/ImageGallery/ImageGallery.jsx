import { ImgGallery } from "./ImgGallery.styled";
import {ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({hits }) => {
   
    return (
        <ImgGallery className="gallery" >        
           {hits.map(({ id, webformatURL}) => {
            return (
                <ImageGalleryItem key={id} webformatURL={webformatURL} />
            )
        })}     
        </ImgGallery>
        )};
   

 