import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
function App() {
  return (
    
    <div className="App">
      <NavigationBar></NavigationBar>
      <Banner></Banner> 
      <ProductCard></ProductCard> 
      <Footer></Footer>
    </div> 
  );
}

export default App;
