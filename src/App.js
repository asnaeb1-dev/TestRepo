import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/Searchbar';
import Infobox from './Components/InfoBox/Infobox';
import ErrorMessage from './Components/ErrorMsg/ErrorMsg'

class  App extends Component {

  state ={
    searchText : "",
    title:"IFSC Code Search",
    info:{

    }
  }

  onSubmitChange(event){
    event.preventDefault();
    const text = event.target.search_box.value;
   if(text===''){
        alert('Cannot leave fields empty')
    }else if(text.length < 11 || text.length>11){
        alert('Length should be 11 characters!')
    }else if((isNaN(text.slice(0, 4)) && text.slice(4, 5) !== '0')){
        alert('Improper IFSC format. Please Enter properly!')
    }else{
      document.getElementById('loader').style.opacity = 1
      this.setState({
        searchText: text
      })
      this.lookForIFSC(text);  
    }
  }

  async lookForIFSC(searchText){
      const response = await fetch(`https://ifsc.razorpay.com/${searchText}`);
      const result = await response.json();
      if(response.status === 200){
        this.setState({
          info: result
        })  
        document.getElementById('container').style.opacity = 1;
      }else{
        document.getElementById('container').style.opacity = 0;
        alert('No such IFSC found!')
      }
    document.getElementById('loader').style.opacity = 0;
  }

  refresh(){
    this.setState({
      searchText: ""
    })
    document.getElementById('container').style.opacity = 0;
  }

  render(){
      return (
        <div className="App">
            <Header title={this.state.title}/>
            <h1 id='text'>Search</h1>
            <SearchBar onSubmitChange ={this.onSubmitChange.bind(this)} refresh={this.refresh.bind(this)} />
            <div id="loader" className="ui active centered inline loader"></div>
            <div id='container'>
              <Infobox info={this.state.info}/>
            </div>
        </div>
      );  
  }

  componentDidMount(){
    document.getElementById('container').style.opacity = 0;
  }
}

export default App;
