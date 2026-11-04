import { Component } from "react";

class ImageGalleryItem extends Component{

    render() {
        const {image} = this.props
        return(
            <>
            <li key={image.id}>
                <img src={image.webformatURL} alt={image.tags} />
            </li>
            </>
        )
    }
}

export default ImageGalleryItem