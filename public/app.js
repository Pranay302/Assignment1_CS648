const element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h2", null, "Pranay Mhatre"), React.createElement("img", {
  src: "./Pranay.jpg",
  alt: "Head Shot"
}), React.createElement("p", null, "I am Pranay Mhatre. I am a Computer Science Graduate student at San Diego State University. My hobbies are playing guitar and reading books."), React.createElement("br", null), React.createElement("button", null, " ", React.createElement("a", {
  href: "https://github.com/Pranay302",
  target: "_blank"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('contents'));