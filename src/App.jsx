import "./App.css";
import Accordian from "./components/Accordian";
const items = [
  {
    title: "What is React",
    content: "React is a front end javascript library",
  },
  {
    title: "Why use React",
    content: "React is a favorite JavaScript library among developers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating creating components",
  },
];
function App() {
  return (
    <div className="App">
      <h1>Widget App</h1>
      <Accordian items={items} />
    </div>
  );
}

export default App;
