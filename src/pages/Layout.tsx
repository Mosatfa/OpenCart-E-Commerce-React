import { Container, Stack} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryNavbar from "../components/CategoryNavbar";
const RootLayout = () => {
  return (
    <Stack spacing={0} className="root-layout">
      <Navbar />
      <CategoryNavbar display={{ base: 'none', md: 'block' }} />
      <Container maxW={'full'} p={0}>
        <Outlet />
      </Container>
      <Footer />
    </Stack>
  );
};



export default RootLayout;
