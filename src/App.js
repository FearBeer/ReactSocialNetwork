import {
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";

const App = (props) => {
  return (

    <div className="app">
      <Header />
      <NavContainer store={props.store} />
      <div className="app__content">
        <Routes>
          <Route path='/profile/' element={<Profile store={props.store} />}
          />
          <Route path='/dialogs/' element={<DialogsContainer store={props.store} />}
          />
          <Route path='/news/' element={<News />} />
          <Route path='/music/' element={<Music />} />
          <Route path='/settings/' element={<Settings />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
