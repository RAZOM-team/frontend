import { useEffect, useMemo, useState } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import CalendarOfEvents from "../components/CalendarOfEvents/CalendarOfEvents";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeartRazom from "../components/HeartRazom/HeartRazom";
import OurProjects from "../components/OurProjects/OurProjects";
import type { eventsInfo, events } from "../types/dataInfo";

const MainPage = () => {
  const [data, setData] = useState<events | {}>({});

  useEffect(() => {
    fetch('http://localhost:5173/mockData/data.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  console.log(Array.isArray(data));

  const eventsData: eventsInfo[] | [] = useMemo(() => {
    return 'events' in data ? data.events : [];
  }, [data]);

  return (
    <>
      <Header />

      <main>
        <div id="calendar">
          <CalendarOfEvents data={eventsData} />
        </div>

        <AboutUs />

        <div id="projects">
          <OurProjects />
        </div>

        <div id="partners">
          <HeartRazom />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MainPage;
