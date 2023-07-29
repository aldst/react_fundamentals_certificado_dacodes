import { useEffect, useState } from 'react';
import { getMovies } from '../../../services/movies';
import { Movie, Movies } from '../../../types/Movie';
import { Card, Pagination, Typography } from 'antd';

import SegmentedComponent from '../components/Segmented';
import Template from '../../../templates/Template';
import { moviesPerPage } from '../../../types/Utils';

const { Title } = Typography;

const NowPlayingComponent = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Movies>();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {    

    const fetchAndSetMovies = async () => {
      const result = await getMovies('now_playing', currentPage);
      setMovies(result)
    };

    void fetchAndSetMovies();
  }, [currentPage])

  return (
    <Template>
      <div style={{ padding: 90 }}>

      <SegmentedComponent selectedSegmented="now_playing"></SegmentedComponent>

      <Title className="texto_blanco" level={2} style={{ marginTop: 40, marginLeft: 5 }}>Now Playing</Title>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
          gridGap: '16px',
          margin: '0 auto',
        }}
        >
        {movies?.results?.map((movie : Movie) => (
          <Card key={movie.id} style={{ width: '180px', height: '250px', margin: '20px', marginBottom: '20px', borderRadius: 50 }}
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
      </div>
    </Template>
    
  )
}

export default NowPlayingComponent