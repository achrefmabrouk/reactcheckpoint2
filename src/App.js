import Photoprofile from './components/profile/ProfilePhoto';
import Fullname from './components/profile/FullName';
import Address from './components/profile/Address'
import './CSS/app.css'

function App() {
  return (
    <div className="App">
      <Photoprofile/>
      <Fullname/>
      <Address/>
    </div>
  );
}

export default App;
