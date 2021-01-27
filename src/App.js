import './App.css';
import Top from "./Top/Top";
import About from "./About/About";
import Scroll from "./Scroll/Scroll";
import Menu from "./Menu/Menu";

function App() {
  return (
    <div className="App">
        <Top />
        <Menu />
        <About />
        <Scroll
            text='keep scrolling, there is still more to come.'
        />
    </div>
  );
}

export default App;
