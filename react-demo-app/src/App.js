
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavigation from './Components/MainNavigation/MainNavigation';
import SideBar from './Components/MainNavigation/SideBar';
import FrontPage from './Components/Pages/FrontPage';
import Items from './Components/Pages/Items';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <MainNavigation />
      <SideBar />
        <Routes>
          <Route path='/fruits' element={<Items category="fruits"/>}/>
          <Route index element={<FrontPage />}/>
          <Route path='/meat' element={<Items category="meat"/>}/>
          <Route path='/vegetable' element={<Items category="vegetable"/>}/>
          <Route path='/cleaner' element={<Items category="cleaner"/>}/>
          <Route path='/packedfoods' element={<Items category="packedfoods"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
