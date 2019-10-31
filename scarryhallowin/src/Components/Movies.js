import React from "react"
import axios from "axios"
import './Movies.css'
import Navbar from "./Navbar"
import MovieCards from './MovieCards'


class Movies extends React.Component {
	constructor(props){
    super(props);
    this.state = {
		image: null,
		title: null,
		synopsys: null,
		arrayMovies: [],
		input: ''				
			
		}
		this.getMovies = this.getMovies.bind(this)
		this.searchField=this.searchField.bind(this)
		this.getOneMovies = this.getOneMovies.bind(this)	
					
  }

  //componentDidMount() {
	//this.getMovies();
	//}    
	
  getMovies() {
    axios
      .get('https://api.betaseries.com/movies/search?key=b33f5713e631&title=halloween')
      .then(response => response.data)
      .then(data => {
        this.setState({
			
			arrayMovies: data.movies,

        });
			});	
				
	}

	getOneMovies() {
		axios
		  .get('https://api.betaseries.com/movies/search?key=b33f5713e631&title='+this.state.input)
		  .then(response => response.data)
		  .then(data => {
			  console.log(data.movies)
			this.setState({
					
				arrayMovies: data.movies,

			});
				});	
					
		}

		searchField = (event)=>{
			this.setState({input: event.target.value})
			console.log(event.target.value)
		}

		listOfMovies = (movie)=>{
			return(
				<MovieCards image={movie.poster} title={movie.title} year={movie.production_year} director={movie.director}
				synopsis={movie.synopsis} trailer={movie.trailer} />
			)
		}
	
	render() {
		
		console.log(this.state.arrayMovies)
		
		return (
		<div>
			<Navbar getOneMovies={this.getOneMovies} getMovies={this.getMovies} searchField={this.searchField} input={this.state.input} />
			<div className='MoviesContainer'>
			{this.state.arrayMovies.map(this.listOfMovies)}
			
			</div>
			
			
		</div>
		)
	}




}


export default Movies
