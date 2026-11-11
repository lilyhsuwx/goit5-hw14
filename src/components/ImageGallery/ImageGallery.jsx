import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import style from "../ImageGallery/ImageGallery.module.css"

class ImageGallery extends Component{

    render(){
        const {images, onClick } = this.props
        return(
            <>
            <ul className={style.list}>
            {images.map((img) => {
                return(
                    <ImageGalleryItem onClick={onClick} key={img.id} image={img}/>
                )
            })}</ul>
            </>
        )
    }
}

export default ImageGallery