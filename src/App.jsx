import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Container from './Container'
import Navigation from './Navigation'


function App() {
  return (
    
    <Navigation>
      <>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </>
      <Container>
      <h1>Vite + React</h1>
      </Container>
        <Button onClick={() => alert('Button 1 clicked')}>Button 1</Button>
        <Button onClick={() => alert('Button 2 clicked')}>Button 2</Button>
        <Button onClick={() => alert('Button 3 clicked')}>Button 3</Button>
    </Navigation>
  )
}

export default App