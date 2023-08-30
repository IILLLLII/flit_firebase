import './App.css';
import { Container } from '@chakra-ui/react';
import SideBar from './Components/SideBar';

function App() {
  return (
    <Container maxW={'container.xl'}>
      <SideBar/>
    </Container>
  );
}

export default App;
