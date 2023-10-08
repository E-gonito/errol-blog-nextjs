import NavigationBar from "app/components/NavigationBar"
import FooterSection from "app/components/FooterSection"
import MainSection from "./components/MainSection"

const Teams = () => {
  return (
    <main style={{ 
      position: 'relative',
    }}>
      <div style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp2062757.jpg')`, 
        backgroundSize: 'cover',
        filter: 'blur(4px) brightness(30%)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}/>
      <NavigationBar/>
      <div>
        <MainSection/>
        <FooterSection/>
      </div> 
    </main>
  )
}

export default Teams;