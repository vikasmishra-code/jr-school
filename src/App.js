import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import Content from './component/Content';
import Course from './component/Course';
import Activites from './component/Activites';
import Faq from './component/Faq';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Content/>
      <Course/>
      <Activites/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
