import './App.css';
import { Container } from '@chakra-ui/react';
import SideBar from './Components/OwnerSideBar';
import SidebarWithHeader from './Components/AdminSidebar';
import Footer from './Components/Footer';
import CustomerApp from './Pages/Customer/CustomerApp';

export const isAdmin = window.location.pathname.includes('admin');
export const isCustomer = window.location.pathname.includes('customer');
function App() {

  return (
    <Container w="100vw" p={0}>
      {isAdmin ? <SidebarWithHeader/> : isCustomer ? <CustomerApp/> : <SideBar/>}
      {/* <SideBar/> */}
    </Container>
  );
}

export default App;
