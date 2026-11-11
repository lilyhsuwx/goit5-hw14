import { Component } from "react";
import style from "./Modal.module.css"

class Modal extends Component {

    componentDidMount = () => {
        window.addEventListener("keydown", this.handleEscapeModalClose)
    }

    componentWillUnmaunt = () => {
        window.removeEventListener("keydown", this.handleEscapeModalClose)
    }

    handleEscapeModalClose = (evt) => {
        if(evt.code === "Escape"){
            this.props.onClose()
        }
    }

    handleBackdropClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.props.onClose()
        }
    }

    render(){
        const {largeImage} = this.props
        return(
            <>
                <div className={style.backdrop} onClick={this.handleBackdropClick}>
                    <div className={style.modal}>
                        <img className={style.img} src={largeImage} alt="" />
                    </div>
                </div>
            </>
        )
    }
}

export default Modal