import './App.css'
import CustomerReview from './components/CustomerReview/CustomerReview';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        <CustomerReview/>
      </div>
    </div>
  );
}
        
          

export default App;
