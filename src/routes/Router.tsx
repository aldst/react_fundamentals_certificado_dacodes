import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginComponent from "../pages/Auth/Login/Login"
import NowPlayingComponent from '../pages/Home/NowPlaying/NowPlaying';
import PopularComponent from '../pages/Home/Popular/Popular';
import PrivateRoute from './PrivateRoute';

const RouterApp = (): JSX.Element => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        
        <Route element={<PrivateRoute />} >
          <Route path="/now_playing" element={<NowPlayingComponent />} />
          <Route path="/popular" element={<PopularComponent />} />
          <Route path="/top_rated" element={<LoginComponent />} />
          <Route path="/upcoming" element={<LoginComponent />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
      
  )
}

export default RouterApp;