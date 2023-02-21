import './App.css';
import ButtonProcess from './components/ButtonProcess';
import InputLink from './components/InputLink';
import RadioButton from './components/RadioButton';
function App() {
  return (
    <>
      <div className='screen'>
        <div className='container'>
          <div className='user-input-container'>
            <div className='user-input'>
              <div className='input'>
                <InputLink/>
              </div>
              <div className='radio-button'>
                <RadioButton/>
              </div>
            </div>
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
