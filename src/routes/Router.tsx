import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginComponent from "../pages/Auth/Login/Login"
import NowPlayingComponent from '../pages/Home/NowPlaying/NowPlaying';
import PopularComponent from '../pages/Home/Popular/Popular';
import PrivateRoute from './PrivateRoute';
import TopRatedComponent from '../pages/Home/TopRated/TopRated';
import UpcomingComponent from '../pages/Home/Upcoming/Upcoming';

const RouterApp = (): JSX.Element => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        
        <Route element={<PrivateRoute />} >
          <Route path="/now_playing" element={<NowPlayingComponent />} />
          <Route path="/popular" element={<PopularComponent />} />
          <Route path="/top_rated" element={<TopRatedComponent />} />
          <Route path="/upcoming" element={<UpcomingComponent />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
      
  )
}

export default RouterApp;