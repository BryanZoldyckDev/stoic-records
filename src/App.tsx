import { Screen } from "./components/common/Screen"
import { Carousel } from "./components/common/Carrousel"
import { ArtistSection } from "./components/common/ArtistSection"
import { motion } from "framer-motion";
import { NavBar } from "./components/common/NavBar";


import artistData from './api/artists-response.json';
import navbarData from './api/navbar-response.json'
function App() {

  return (
    <>
      <NavBar sections={navbarData}/>
      <Screen id="newrealeses" className="bg-green-800 m-0 p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}>
          <Carousel/>
        </motion.div>
      </Screen>
      <Screen id="artist" className="artistSectionScreen">
          <ArtistSection artists={artistData}/>
      </Screen>
    </>
  )
}

export default App
