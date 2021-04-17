import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      isLoading: true
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot){

    if(prevState.quote !== this.state.quote)
        {
         var button = document.getElementById("QuoteButton")
         var randomColor = Math.floor(Math.random()*16777215).toString(16);

         button.style.backgroundColor = "#"+randomColor;
        }

  }
  componentDidMount() {
    // alert('This component just mounted to the DOM!');
    fetch("/Random")
    .then(res => res.json())
    .then(result => {
      console.log(result);
      this.setState({
        quote: result.message,
        isLoading: false
      })
    })
  }
  _handleClick = () => {
    this.setState({
      isLoading: true
    })
    fetch("/Random")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          quote: result.message,
          isLoading: false
        })
      })
  
  }
  render() {
    // if(this.state.isLoading) {
    //   return (<div>Loading new image</div>)
    // } else {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={this.state.image} alt="logo" />
    //         <button onClick={this._handleClick}>Generate new Doggo</button>
    //       </header>
    //     </div>
    //   );
    // }
    /**
     * const isLoading = this.state.isLoading;
     * const image = this.state.image;
     */
    const {isLoading, quote} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {
          isLoading ? 
            <div>currently loading image</div> : 
    
            <p>{quote}</p>
          }
          <button id="QuoteButton" onClick={this._handleClick}>{ isLoading ? 'Loading Quote' : 'Generate new Quote' }</button>
        </header>
      </div>
    );
  }
}
export default App;