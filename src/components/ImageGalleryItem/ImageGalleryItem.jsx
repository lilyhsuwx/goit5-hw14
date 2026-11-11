import { Component } from "react";

class ImageGalleryItem extends Component{

    handleImageClick = (img) => {
        this.props.onClick(img)
    }

    render() {
        const {image} = this.props
        return(
            <>
            <li>
                <img onClick={() => this.handleImageClick(image.largeImageURL)} src={image.webformatURL} alt={image.tags} />
            </li>
            </>
        )
    }
}

export default ImageGalleryItem