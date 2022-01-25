import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import data from "./data";

function App() {
  const cards = data.map((item, idx, arr) => {
    return <Card key={item.title} {...item} lastItem={idx === arr.length - 1} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="card-container">{cards}</section>
    </div>
  );
}

export default App;
