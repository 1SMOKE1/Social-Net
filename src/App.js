import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// main content
import Profile from './components/AppContent/Profile/Profile';
import News from "./components/AppContent/News/News";
import Music from "./components/AppContent/Music/Music";
import Settings from "./components/AppContent/Settings/Settings";
// messages users
import YaroslavContainer from "./components/AppContent/Messages/User/UserChatGroup/Yaroslav/YaroslavContainer";
import MessagesContainer from "./components/AppContent/Messages/MessagesContainer";
import AntonContainer from "./components/AppContent/Messages/User/UserChatGroup/Anton/AntonContainer";
import DarinaContainer from "./components/AppContent/Messages/User/UserChatGroup/Darina/DarinaContainer";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar state={props.store.getState().navBarData}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route
              exact
              path='/profile'
              element={
                <Profile
                  store={props.store}
                />
              }
              id={1}
              key={1}
              
            />
            <Route
              exact
              path='/messages'
              element={
                <MessagesContainer
                  store={props.store}
                />
              }
              id={2}
              key={2}
              state={props.state}
            />
            <Route
              exact
              path='/news'
              element={
                <News
                />
              }
              id={3}
              key={3}
            />
            <Route
              exact
              path='/music'
              element={
                <Music
                />
              }
              id={4}
              key={4}
            />
            <Route
              exact
              path='/settings'
              element={
                <Settings
                />
              }
              id={5}
              key={5}
            />
            {/* Users Chats */}
            <Route
              exact
              path={`/messages/user1`}
              element={
                <AntonContainer
                  // chatInfo={props.state.chatInfo}
                  // userData={props.state.userData}
                  // pageAnton={props.state.messagesPage.pageAnton}
                  store={props.store}
                />
              }
              key={1}
            />
            <Route
              exact
              path={`/messages/user2`}
              element={
                <YaroslavContainer
                  store={props.store}
                />
              }
              key={2}
            />
            <Route
              exact
              path={`/messages/user3`}
              element={
                <DarinaContainer
                  store={props.store}
                />
              }
              key={3}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
