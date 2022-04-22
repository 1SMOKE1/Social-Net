import messagesPageAntonPageReducer from "./messagesPageAntonPageReducer";
import messagesPageDarinaPageReducer from "./messagesPageDarinaPageReducer";
import messagesPageYaroslavPageReducer from "./messagesPageYaroslavPageReducer";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from './messagesPageReducer';
import navBarDataReducer from './navBarDataReducer';
// Chats Pages




let store = {
  _state: {
    // Profile MyPosts Post
    profilePage: {
      postsData: [
        { id: 1, text: "post" },
        { id: 2, text: "post" },
        { id: 3, text: "post" },
      ],
      newPostText: "write something",
    },
    // Profile MyPosts
  
    // NavBar
    navBarData: {
      links: [
      { linkText: "Profile", id: 1, to: "/profile" },
      { linkText: "Messages", id: 2, to: "./messages" },
      { linkText: "News", id: 3, to: "./news" },
      { linkText: "Music", id: 4, to: "./music" },
      { linkText: "Settings", id: 5, to: "./settings" },
    ]},
    // messages User
    messagesPage: {
      userData: [
        { userName: "Anton", userId: 1, userAge: 21 },
        { userName: "Yaroslav", userId: 2, userAge: 18 },
        { userName: "Darina", userId: 3, userAge: 17 },
      ],
      // messages ChatInfo
      chatInfo: [
        {
          messageCount: Math.round(Math.random() * 100),
          lastMessage: "Cover",
          messageId: 1,
        },
        {
          messageCount: Math.round(Math.random() * 100),
          lastMessage: "Common let`s do this",
          messageId: 2,
        },
        {
          messageCount: Math.round(Math.random() * 100),
          lastMessage: "Ok, no problem",
          messageId: 3,
        },
      ],
      pageAnton: {
        messagesData: [
        ],
        newMessageText: "empty",
      },
      pageYaroslav: {
        messagesData: [
        ],
        newMessageText: 'empty',
      },
      pageDarina: {
        messagesData: [
        ],
        newMessageText: 'empty',
      }
    },
  },
  _reRenderEntireTree(){
    console.log('state changed')
  },


  getState(){
    return this._state
  },
  subscribe(observer){
    this._reRenderEntireTree = observer; // observer - патерн
  },



  // addPost(){
  //   let newPost = {
  //     id: 4,
  //     text: `${this._state.profilePage.newPostText}`,
  //   };
  //   this._state.profilePage.postsData.push(newPost);
  //   this.updatePostText('');
  //   this._reRenderEntireTree(this._state);
  // },
  // updatePostText(updateText){
  //   this._state.profilePage.newPostText = updateText;
  //   this._reRenderEntireTree(this._state);
  // },



  // addMessageAnton(){
  //   let newMessage = {
  //     text: `${this._state.messagesPage.pageAnton.newMessageText}`,
  //     key: 2,
  //   };
  //   this._state.messagesPage.pageAnton.messagesData.push(newMessage);
  //   this.updateMessageText('');
  //   this._reRenderEntireTree(this._state);
  // },
  // addMessageYaroslav(){
  //   let newMessage = {
  //     text: `${this._state.messagesPage.pageYaroslav.newMessageText}`,
  //     key: 2,
  //   };
  //   this._state.messagesPage.pageYaroslav.messagesData.push(newMessage);
  //   this.updateMessageText('');
  //   this._reRenderEntireTree(this._state);
  // },
  // addMessageDarina(){
  //   let newMessage = {
  //     text: `${this._state.messagesPage.pageDarina.newMessageText}`,
  //     key: 2,
  //   };
  //   this._state.messagesPage.pageDarina.messagesData.push(newMessage);
  //   this.updateMessageText('');
  //   this._reRenderEntireTree(this._state);
  // },
  // updateMessageText(text){
  //   this._state.messagesPage.pageAnton.newMessageText = text;
  //   this._state.messagesPage.pageYaroslav.newMessageText = text;
  //   this._state.messagesPage.pageDarina.newMessageText = text;
  //   this._reRenderEntireTree(this._state);
  // },
  dispatch(action){ 

    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesPageReducer(this._state.messagesPageReducer, action);
    this._state.navBarData = navBarDataReducer(this._state.navBarDataReducer, action);
    this._state.messagesPage.pageAnton = messagesPageAntonPageReducer(this._state.messagesPage.pageAnton, action);
    this._state.messagesPage.pageYaroslav = messagesPageYaroslavPageReducer(this._state.messagesPage.pageYaroslav, action);
    this._state.messagesPage.pageDarina = messagesPageDarinaPageReducer(this._state.messagesPage.pageDarina, action);

    this._reRenderEntireTree(this._state);


    // if(action.type === ADD_POST){ // {type: 'ADD-POST'}
    //   let newPost = {
    //     id: 4,
    //     text: `${this._state.profilePage.newPostText}`,
    //   };
    //   this._state.profilePage.postsData.push(newPost);
    //   this._state.profilePage.newPostText = '';
    //   this._reRenderEntireTree(this._state);
    // } 
    // //=============================================
    // else if (action.type === UPDATE_NEW_POST_TEXT){ // {type: 'UPDATE-NEW-POST-TEXT}
    //   this._state.profilePage.newPostText = action.updateText;
    //   this._reRenderEntireTree(this._state);
    // }
    // //=============================================
    // else if(action.type === ADD_MESSAGE_ANTON){ // {type: 'ADD-MESSAGE-ANTON'}
    //   let newMessage = {
    //     text: `${this._state.messagesPage.pageAnton.newMessageText}`,
    //     key: 2,
    //   };
    //   this._state.messagesPage.pageAnton.messagesData.push(newMessage);
    //   this._state.messagesPage.pageAnton.newMessageText = '';
    //   this._reRenderEntireTree(this._state);
    // }
    // //==============================================
    // else if(action.type === ADD_MESSAGE_YAROSLAV){ // {type: 'ADD-MESSAGE-YAROSLAV'}
    //   let newMessage = {
    //         text: `${this._state.messagesPage.pageYaroslav.newMessageText}`,
    //         key: 2,
    //       };
    //       this._state.messagesPage.pageYaroslav.messagesData.push(newMessage);
    //       this._state.messagesPage.pageYaroslav.newMessageText = '';
    //       this._reRenderEntireTree(this._state);
    // }
    // //==============================================
    // else if(action.type === ADD_MESSAGE_DARINA){ // {type: 'ADD-MESSAGE-DARINA'}
    //     let newMessage = {
    //       text: `${this._state.messagesPage.pageDarina.newMessageText}`,
    //       key: 2,
    //     };
    //     this._state.messagesPage.pageDarina.messagesData.push(newMessage);
    //     this._state.messagesPage.pageDarina.newMessageText = '';
    //     this._reRenderEntireTree(this._state);
    // }
    // else if(action.type === UPDATE_MESSAGE_TEXT){ //{type: 'UPDATE-MESSAGE-TEXT'}
    //   this._state.messagesPage.pageAnton.newMessageText = action.text;
    //   this._state.messagesPage.pageYaroslav.newMessageText = action.text;
    //   this._state.messagesPage.pageDarina.newMessageText = action.text;
    //   this._reRenderEntireTree(this._state);
    // }
    

  }
}
// Profile MyPosts

//Chats Pages













export default store;
