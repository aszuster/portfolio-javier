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
  const [videoList, setVideoList] = useState([]);

  //Tomar eventos por fecha
  const eventsCollectionRef = query(collection(db, "events"), orderBy("fecha", "asc"));

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


    //Tomar videos por orden
    const videosCollectionRef = query(collection(db, "videos"), orderBy("order", "asc"));

    useEffect(() => {
      const getVideoList = async () => {
        try {
          const data = await getDocs(videosCollectionRef);
          const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setVideoList(filteredData)
        } catch (err) {
          console.log(err);
        }
      };
  
      getVideoList();
    }, []);

  return (
    <>
      <Header />
      <Hero />
      <Album />
      <Bio />
      <NewRelease />
      <Videos props={videoList} />
      <Events props={eventList} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
