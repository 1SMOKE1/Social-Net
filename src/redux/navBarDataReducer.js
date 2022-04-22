
let initialState = {
  links: [
  { linkText: "Profile", id: 1, to: "/profile" },
  { linkText: "Messages", id: 2, to: "./messages" },
  { linkText: "News", id: 3, to: "./news" },
  { linkText: "Music", id: 4, to: "./music" },
  { linkText: "Settings", id: 5, to: "./settings" },
  ]
}

const navBarDataReducer = (state = initialState,action) => (state);

export default navBarDataReducer;