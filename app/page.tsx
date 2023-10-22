import NavigationBar from "./components/NavigationBar"
import HomeSection from "./components/HomeSection"
import FooterSection from "./components/FooterSection"

const Home = () => {
  return (
    <main style={{ 
      position: 'relative',
    }}>
      <div style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp2062757.jpg')`, 
        backgroundSize: 'cover',
        filter: 'blur(5px) brightness(15%)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}/>
      <NavigationBar/>
      <div>
        <HomeSection/>
        <FooterSection/>
      </div> 
    </main>
  )
}

export default Home;