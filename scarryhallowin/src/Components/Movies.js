import React from "react"
import axios from "axios";


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
					image: data.poster,
					title: data.title,
					synopsys: data.synopsys,
          
        });
			});		
	}
	render() {
		return (<div>
			<button>test</button>
		</div>)
	}




}


export default Movies
