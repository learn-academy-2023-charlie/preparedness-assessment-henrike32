import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import { Util } from 'reactstrap';

Util.setGlobalCssModule( {
  btn: 'hyperspeed-btn',
} );


function App () {
  return (
    <>
      <Header />
      <br></br> 
      <body>Enter your name : 
      <br></br>
      <input name="myInput" label="Enter your name" />
      </body>
      <Footer />
    </>
  );
}

function Toolbar ( { onPlayMovie, onUploadImage } )
{
  return (
    <div>
      <Button onClick={ onPlayMovie }>
        Click Me
      </Button>
      <Button onClick={ onUploadImage }>
        Reset
      </Button>
    </div>
  );
}

function Button ( { onClick, children } )
{
  return (
    <button onClick={ onClick }>
      { children }
    </button>
  );
}


export default App;
