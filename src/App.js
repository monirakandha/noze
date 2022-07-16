import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Nozemaking from './components/Nozemaking/Nozemaking';
import Anything from './components/Anything/Anything';
import Conquer from './components/Сonquer/Сonquer';
import Mold from './components/Mold/Mold';
import Seematter from './components/Seematter/Seematter';
import Moreimportant from './components/Moreimportant/Moreimportant';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div>
    <Header></Header>
    <Hero></Hero>
    <Nozemaking></Nozemaking>
    <Anything></Anything>
  <Conquer></Conquer>
  <Mold></Mold>
  <Seematter></Seematter>
  <Moreimportant></Moreimportant>
  <Faq></Faq>
   <Footer></Footer>
    </div>

  );
}

export default App;
