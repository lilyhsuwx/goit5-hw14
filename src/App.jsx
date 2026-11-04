import { Component } from 'react'
import './App.css'
import ImageGallery from "./components/ImageGallery/ImageGallery" 
import Searchbar from './components/Searchbar/Searchbar'

class App extends Component{
  state = {
    images: [{
      id: 1,
      webformatURL: "https://hermes.media.static.aol.com/media/2026/11/03/822f5c14-78f5-3de7-9f3e-2629881cf806/82b7f646-721d-4e01-a913-2cdaf518f0bb.jpg",
      tags: "picture",
    }, {
      id: 2,
      webformatURL: "https://www.sciencesetavenir.fr/assets/img/2018/10/17/cover-r4x3w1000-5c3332d80aca7-skye-meaker-wildlife-photographer-of-the-year.jpg",
      tags: "picture"
    }],
  }

  handleSearchSubmit = (searchValue) => {
    
  }

  render(){
    return(
      <>
        <Searchbar onSubmit={this.handleSearchSubmit}/>
        <ImageGallery images={this.state.images}/>
      </>
    )
  }
}

export default App
