
import Home from './pages/Home';
import New from './pages/New';
import { BrowserRouter,Routes ,  Route  } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/new' Component={New}/>
        <Route path='/blog/:id' Component={BlogDetails}   />
        <Route path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}
export default App;
