
let initialState = {
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
  ]
}

const messagesPageReducer = (state = initialState, action) => {
  return state
};

export default messagesPageReducer;