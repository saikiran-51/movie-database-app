import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'

import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Upcoming from './pages/Upcoming'
import MovieDetails from './pages/MovieDetails'
import SearchResults from './pages/SearchResults'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
      <Route exact path="/" component={Popular} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Route exact path="/search/:query" component={SearchResults} />
    </Switch>
  </BrowserRouter>
)

export default App
