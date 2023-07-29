import { useEffect, useState } from 'react';
import { getMovies } from '../../../services/movies';
import { Movie, Movies } from '../../../types/Movie';
import { Card, Pagination, Typography } from 'antd';

import SegmentedComponent from '../components/Segmented';
import Template from '../../../templates/Template';
import { moviesPerPage } from '../../../types/Utils';

const { Title } = Typography;

const PopularComponent = () => {

  return (
    <Template>
      
    </Template>
    
  )
}

export default PopularComponent