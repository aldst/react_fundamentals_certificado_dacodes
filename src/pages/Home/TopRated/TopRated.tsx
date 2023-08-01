import { useEffect, useState } from 'react';
import { getMovieDetail, getMovies } from '../../../services/movies';
import { Movie, Movies } from '../../../types/Movie';
import { Card, Pagination, Rate, Typography } from 'antd';

import SegmentedComponent from '../components/Segmented';
import Template from '../../../templates/Template';
import { getGenresName, getMovieDuration, getRatedValue, getYear, moviesPerPage } from '../../../types/Utils';
import { MovieDetail } from '../../../types/MovieDetail';

const { Title } = Typography;

const TopRatedComponent = () => {

  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(-1);

  const [currentPage, setCurrentPage] = useState(1);

  const [movies, setMovies] = useState<Movies>();
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {    
    void fetchAndSetMovies();
  }, [currentPage])

  const fetchAndSetMovies = async () => {
    const result = await getMovies('top_rated', currentPage);
    setMovies(result)
  };

  const fetchAndSetMoviesDetail = async (movieId : number) => {
    const result = await getMovieDetail(movieId);
    setMovieDetail(result)
  };

  const handleMouseEnter = (movieId : number) => {
    fetchAndSetMoviesDetail(movieId);    
    setSelectedCardIndex(movieId);
  };

  const handleMouseLeave = () => {
    setSelectedCardIndex(-1);
  };

  return (
    <Template>
      <div style={{ padding: 90 }}>

      <SegmentedComponent selectedSegmented="top_rated"></SegmentedComponent>

      <Title className="texto_blanco" level={2} style={{ marginTop: 40, marginLeft: 5, marginBottom: 40 }}>Top Rated</Title>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1.5fr))`,
          gridGap: '16px',
          margin: '0 auto',
        }}
        >
        {movies?.results?.map((movie : Movie) => (
          <Card
            className={`${selectedCardIndex === movie.id ? 'activeCard' : ''}`}
            key={movie.id} 
            style={{ margin: '20px', marginBottom: '20px', borderRadius: 50 }}
            cover={
              <>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
                {selectedCardIndex === movie.id  && movieDetail !== undefined? (
                  <div className="content-overlay texto_blanco">
                    <Title level={3}>{movieDetail.title}</Title>
                    <Title level={5}>{getYear(movieDetail.release_date)} . {getGenresName(movieDetail?.genres)} . {getMovieDuration(movieDetail?.runtime)}</Title>
                    <Title level={4}>{movieDetail.overview}</Title>
                    <Rate disabled 
                      style={{color: 'white', display: 'flex' , alignItems: 'center', justifyContent: 'center' }}
                      defaultValue={getRatedValue(movieDetail.vote_average)}
                      />
                  </div>
                ) : (
                  <></>
                )
              }
              </>
              
            }
            onMouseEnter={ () => handleMouseEnter(movie.id)} 
            onMouseLeave={ handleMouseLeave }
            >
          </Card>
        ))}
      </div>
      <Pagination
          style={{ marginTop: 70 , textAlign: 'center', color: 'white' }}
          simple
          current={currentPage}
          total={movies?.total_results}
          pageSize={moviesPerPage}
          onChange={onPageChange}
        />
      </div>
    </Template>
    
  )
}

export default TopRatedComponent