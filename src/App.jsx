import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header";
import Hero from "./components/hero";
import Album from "./components/album";
import Bio from "./components/bio";
import NewRelease from "./components/newRelease";
import Videos from "./components/videos";
import Events from "./components/events";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { db } from "./config/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);
  const [eventList, setEventList] = useState([]);

  //ordena por ciudad
  const eventsCollectionRef = query(collection(db, "events"), orderBy("ciudad", "asc"));

  useEffect(() => {
    const getEventList = async () => {
      try {
        const data = await getDocs(eventsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEventList(filteredData)
      } catch (err) {
        console.log(err);
      }
    };

    getEventList();
  }, []);




  


  return (
    <>
      <Header />
      <Hero />
      <Album />
      <Bio />
      <NewRelease />
      <Videos />
      <Events props={eventList} />
      <Contact />
      <Footer />
      {/* <div>
        {eventList.map((event) => (
          <div>
            <h1>
              {event.fecha}
            </h1>
            <p>{event.hora}</p>
            <p>{event.espacio}</p>
            <p>{event.ciudad}</p>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default App;
