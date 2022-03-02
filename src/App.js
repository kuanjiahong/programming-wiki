// import logo from './logo.svg';
// import './App.css';
import Content from './Content';
import Intro from './Intro';
import Footer from './Footer';
import NavBar from './NavBar';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
    <Intro />
    <NavBar />
    <Content />
    <Footer />
    </>
  )
}

export default App;
