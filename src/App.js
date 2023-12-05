
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Asses from './subject';
import Chapter from './chapter';
import Asses1 from './chapter1';
import Sign from './signup';
import Login from './login ';
import Completedashboard from './completedashboard';
import Learning from './lerning';
import Create from './create';
import Learningpath from './learningpath';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Asses />} />
      <Route exact path='/chapter' element={<Chapter />} />
      <Route exact path='/chapter1' element={<Asses1 />} />
      <Route exact path='/signup' element={<Sign />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/completedashboard' element={<Completedashboard />} />
      <Route exact path='/lerning' element={<Learning />} />
      <Route exact path='/create' element={<Create />} />
      <Route exact path='/learningpath' element={<Learningpath />} />
     
     
     



      </Routes>
      
    </div>
  );
}

export default App;
