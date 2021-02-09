
import './App.css';
import Top from "./components/Top/Top";
import About from "./components/About/About";
import Scroll from "./components/Scroll/Scroll";
import Menu from "./components/Menu/Menu";


function App(){
    return (
        <div className="App">
            <Top />
            <Menu />
            <About />
            <Scroll
                text='keep scrolling, there is still more to come.'
            />
        </div>
    )
}

export default App;

// <div className="App">
//     <Top />
//     <Menu />
//     <About />
//     <Scroll
//         text='keep scrolling, there is still more to come.'
//     />
// </div>