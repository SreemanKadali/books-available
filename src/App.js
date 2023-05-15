import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import PostBookDetails from "./components/PostBookDetails";
// import Contact from './components/Contact'
import AvailableBooks from "./components/AvailableBooks";
import SingleBookDetails from "./components/SingleBookDetails";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  // <h1>sreeman</h1>
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={AvailableBooks} />
      <Route path="/post" component={PostBookDetails} />
      <Route path="/books/:id" component={SingleBookDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
