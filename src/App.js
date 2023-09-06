import './App.css';
import { Container } from '@chakra-ui/react';
import SideBar from './Components/OwnerSideBar';
import SidebarWithHeader from './Components/AdminSidebar';
import Footer from './Components/Footer';

export const isAdmin = window.location.pathname.includes('admin');
function App() {

  return (
    <Container maxW={''}>
      {isAdmin ? <SidebarWithHeader/> : <SideBar/>}
      {/* <SideBar/> */}
    </Container>
  );
}

export default App;
