import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  
  return (
    <Router>
      <div className="app">
        <Header />
        <Nav state={props.state.sidebar}/>
        <div className="app__content">
          <Routes>
            <Route path='/profile/' element={<Profile state={props.state.profilePage}
                                             addPost={props.addPost}
                                             updateNewPostText={props.updateNewPostText}/>} />
            <Route path='/dialogs/' element={<Dialogs state={props.state.messagesPage}
                                              addMessage={props.addMessage}
                                              updateNewMessageText={props.updateNewMessageText}/>} />
            <Route path='/news/' element={<News />} />
            <Route path='/music/' element={<Music />} />
            <Route path='/settings/' element={<Settings />} />                      
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
