import { Container, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryNavbar from "../components/CategoryNavbar";
import ScrollToTop from "../router/ScrollToTop";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <CategoryNavbar display={{ base: 'none', md: 'block' }} />
      <Container maxW={'full'} p={0}>
        <ScrollToTop />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};



export default RootLayout;
