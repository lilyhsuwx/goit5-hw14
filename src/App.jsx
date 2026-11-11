import { Component } from 'react'
import './App.css'
import ImageGallery from "./components/ImageGallery/ImageGallery" 
import Searchbar from './components/Searchbar/Searchbar'
import {fetchImages} from "./services/api"
import Modal from "./components/Modal/Modal"
import Button from "./components/Button/Button"
import Loader from './components/Loader/Loader'

class App extends Component{
  state = {
    images: [],
    loading: false,
    searchValue: "",
    largeImageURL: "",
  }

  handleCloseModal = () => {
    this.setState({
      largeImage: "",
    })
  }

  handleBigImage = (img) => {
    this.setState({
      largeImage: img,
    })
  }

  handleSearchSubmit = (searchValue) => {
    this.setState({
      loading: true,
      page: 1,
      searchValue: searchValue,
      images: [],
    })
    fetchImages(searchValue, 1).then((images) => {
      this.setState({
        images: images,
        loading: false,
      })
    })
  }

  handleLoadMore = () => {
    this.setState((prev) => {
      return{
        page: prev.page + 1,
        loading: true,
      }
    })
    fetchImages(this.state.searchValue, this.state.page).then((images) => {
      this.setState((prev) => {
        return {
          images: [...prev.images, ...images],
          loading: false,
        }
      })
    })
  }

  render(){
    return(
      <>
        <Searchbar onSubmit={this.handleSearchSubmit}/>
        {this.state.loading && <Loader/>}
        <ImageGallery images={this.state.images} onClick={this.handleBigImage}/>
        {this.state.images.length > 0 && <Button onClick={this.handleLoadMore}/>}
        {this.state.largeImage && <Modal onClick={this.handleBigImage} largeImage={this.state.largeImage} onClose={this.handleCloseModal}/>}
      </>
    )
  }
}

export default App
