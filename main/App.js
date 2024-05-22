import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import './App.css';

function App() {
  const [mode, setMode] = React.useState('light');
  const [currText, setText] = React.useState('Enable Dark Mode');
  const [alert, setAlert] = React.useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode is Enabled', 'success');
    } else {
      setMode('light');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled', 'success');
    }
  };

  return (
    <Router>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} currText={currText} />
      <div className="container my-3">
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Textform heading="Enter the Text to analyze" mode={mode} alert={alert} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
