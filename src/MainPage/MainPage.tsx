import AboutUs from "../components/AboutUs/AboutUs";
import CalendarOfEvents from "../components/CalendarOfEvents/CalendarOfEvents";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeartRazom from "../components/HeartRazom/HeartRazom";
import OurProjects from "../components/OurProjects/OurProjects";

const MainPage = () => {
  return (
    <>
      <Header />

      <main>
        <CalendarOfEvents />
        <AboutUs />
        <OurProjects />
        <HeartRazom />
      </main>

      <Footer />
    </>
  );
};

export default MainPage;
