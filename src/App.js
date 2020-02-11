import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{ 
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async() => { //axios 조금 오래걸림.. 그래서 await..!
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading: false})
  }

  componentDidMount(){
    this.getMovies()

    // setTimeout(() => {  // 자바스크립트꺼임.. 오!
    //   this.setState({isLoading: false});
    // }, 6000); //6초 후에!
  }
  render(){
    const {isLoading, movies} = this.state; // es6문법! 
    return(
      <div>
        {isLoading ? "Loading..." : movies.map(movie =>{
          return(
            <Movie
             key={movie.id}
             id={movie.id}
             year={movie.year}
             title={movie.title}
             summary={movie.summary}
             poster={movie.medium_cover_image}
           />
          )
        })}
      </div>
    )  
  }
}



export default App;
