import React, { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import SearchField from "./components/layout/SearchField";
import PokemonListProvider from "./context/PokemonListContext";
import PokemonList from "./components/pokemon/PokemonList";
import Pokemon from "./components/pokemon/Pokemon";
import './App.css'

const App = () => {
  return (
    <Fragment>
      <PokemonListProvider>
        <Router>
          <Header />
          <div className="container mt-2">
            <div className="row">
              <SearchField />
            </div>
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route
                exact
                path="/pokemon/:pokemonIndex"
                component={Pokemon}
              />
            </Switch>
          </div>
        </Router>
      </PokemonListProvider>
    </Fragment>
  );
};

export default App;

// import React, { Component } from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
//
// import "bootstrap/dist/css/bootstrap.min.css";
//
// import "./App.css";
// import NavBar from "./components/layout/NavBar";
// import Dashboard from "./components/layout/Dashboard";
// import Pokemon from './components/pokemon/Pokemon';
//
// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <NavBar />
//           <div className="container">
//             <Switch>
//               <Route exact path='/' component={Dashboard} />
//               <Route exact path='/pokemon/:pokemonIndex' component={Pokemon} />
//             </Switch>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }
