import './App.css';
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Information from './components/Information/Information'
import Abilities from './components/Abilities/Abilities'
import SideLink from './components/SideLink/SideLink'
import Hobby from './components/Hobby/Hobby'
import Footer from './components/Footer/Footer'
import Final from './components/Final/Final'

function App() {
  return (
    <div className="App">
      <SideLink></SideLink>
      <Navbar></Navbar>
      <Banner></Banner>
      <Information></Information>
      <Abilities></Abilities>
      <Hobby></Hobby>
      <Final></Final>
      <Footer></Footer>
    </div>
  );
}

export default App;
