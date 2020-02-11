import React from 'react';
import axios from 'axios';
import Movie from './../components/Movie';
import "./Home.css"

class Home extends React.Component{ 
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async() => { //axios 조금 오래걸림.. 그래서 await..!
    const {
      data: {
        data: { movies }
      }  // YTS사이트 -> API -> List Movies 주소가져오고,, sorting까지!!
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
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ) : (
            <div className="movies">
              {movies.map(movie =>{
              return(
                <Movie
                 key={movie.id}
                 id={movie.id}
                 year={movie.year}
                 title={movie.title}
                 summary={movie.summary}
                 poster={movie.medium_cover_image}
                 genres={movie.genres}
               />
              )
            }
            )}
            </div>
        )}
      </section>
    )  
  }
}



export default Home;
