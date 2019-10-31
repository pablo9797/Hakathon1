import React from "react"
import axios from "axios"
import Navbar from "./Navbar"


class Movies extends React.Component {
	constructor(props){
    super(props);
    this.state = {
		image: null,
		title: null,
		synopsys: null,				
			
		}
		this.getMovies = this.getMovies.bind(this)				
  }

  componentDidMount() {
	this.getMovies();
	}    
	
  getMovies() {
    axios
      .get('https://api.betaseries.com/movies/random?key=b33f5713e631&nb=1')
      .then(response => response.data)
      .then(data => {
        this.setState({
					image: data.movies[0].poster,
					title: data.movies[0].title,
					synopsis: data.movies[0].synopsis,
          
        });
			});	
				
	}

	getRandomMovies() {
		axios
		  .get('https://api.betaseries.com/movies/random?key=b33f5713e631&nb=5')
		  .then(response => response.data)
		  .then(data => {
			this.setState({
						image: data.movies[0].poster,
						title: data.movies[0].title,
						synopsis: data.movies[0].synopsis,
			  
			});
				});	
					
		}
	
	render() {
		return (
		<div>
			<Navbar />
			<img src={this.state.image} style={{width:'20%'}}></img>
			<p  style={{color: '#fab937'}}>{this.state.title}</p>
			<p style={{color: '#fab937'}}>{this.state.synopsis}</p>
		</div>
		)
	}




}


export default Movies
