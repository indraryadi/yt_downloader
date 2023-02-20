import './App.css';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
function App() {
  return (
    <>
      <div className='screen'>
        <div className='container'>
          <div className='user-input'>
            <InputLink/>
            <ButtonProcess/>
          </div>
          <div className='video-title'></div>
          <div className='download'></div>
        </div>
      </div>
    </>
  );
}

export default App;
