import App from './components/App';
import NotFound from './components/NotFound';
import Flights from "./components/Flights/Flights";

import loadData from './helpers/loadData';
import {useHistory} from "react-router-dom";

const Routes = [
  {
    path: '/',
    exact: false,
    component: Flights,
  },
  {
    component: NotFound
  }
];

export default Routes;