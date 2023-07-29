import { useEffect, useState } from 'react';
import { getMovies } from '../../../services/movies';
import { Movie, Movies } from '../../../types/Movie';
import { Card, Pagination, Typography } from 'antd';

import SegmentedComponent from '../components/Segmented';
import Template from '../../../templates/Template';
import { moviesPerPage } from '../../../types/Utils';

const { Title } = Typography;

const PopularComponent = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Movies>();

  const [isShown, setIsShown] = useState(false);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {    

    const fetchAndSetMovies = async () => {
      const result = await getMovies('popular', currentPage);
      setMovies(result)
    };

    void fetchAndSetMovies();
  }, [currentPage])

  const handleCoverCard = (movie_id: number) => {
    console.log("cover card clicked", movie_id)
  }

  const handleMouseEnter = () => {
    console.log("Entra");
    setIsShown(true)
  };

  const handleMouseLeave = () => {
    console.log("Sale");
    setIsShown(false)
  };

  return (
    <Template>
      <div style={{ padding: 90 }}>

      <SegmentedComponent></SegmentedComponent>

      <Title className="texto_blanco" level={2} style={{ marginTop: 40, marginLeft: 5 }}>Popular</Title>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
          gridGap: '16px',
          margin: '0 auto',
        }}
        >
        {movies?.results?.map((movie : Movie) => (
          <Card key={movie.id} 
            // onMouseEnter={() => handleCoverCard(movie.id)}
            onMouseEnter={() => handleMouseEnter}
      onMouseLeave={() => handleMouseLeave}
      //onMouseOver={() => handleCoverCard(movie.id)}
            style={{ width: '180px', height: '250px', margin: '20px', marginBottom: '20px' }}
            cover={<img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />}
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
      <label>{isShown}</label>
      </div>
    </Template>
    
  )
}

export default PopularComponent