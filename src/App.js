import './App.css';
import { Container } from '@chakra-ui/react';
import SideBar from './Components/OwnerSideBar';
import SidebarWithHeader from './Components/AdminSidebar';
import Footer from './Components/Footer';

function App() {
  const isAdmin = window.location.pathname.includes('admin');

  return (
    <Container maxW={''}>
      {isAdmin ? <SidebarWithHeader/> : <SideBar/>}
      {/* <SideBar/> */}
    </Container>
  );
}

export default App;
