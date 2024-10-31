import NavigationBar from "./components/NavigationBar"
import HomeSection from "./components/HomeSection"
import FooterSection from "./components/FooterSection"
import BackgroundChanger from "./components/BackgroundChanger";

const Home = () => {
  return (
    <main style={{ 
      position: 'relative',
    }}>
      <BackgroundChanger />
      <NavigationBar/>
      <div>
        <HomeSection/>
        <FooterSection/>
      </div> 
    </main>
  )
}

export default Home;