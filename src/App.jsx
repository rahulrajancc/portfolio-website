import Home from "./comp/pages/Home"
import Mywork from "./comp/pages/Mywork";
import './comp/styles/App.css';
import Tools from "./comp/pages/Tools";
import About from "./comp/pages/About";
import Footer from "./comp/pages/Footer";
export default function App() {
 return(
    <div id="App_con">
        <section id="home">
            <Home />
        </section>
        <section id="work">
            <Mywork />
        </section>
        <section id="tools">
            <Tools />
        </section>
        <section id="about">
            <About />
        </section>
        <section id="contact">
            <Footer />
        </section>
    </div>
 )    
};
