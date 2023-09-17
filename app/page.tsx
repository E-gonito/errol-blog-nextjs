import NavigationBar from "./components/NavigationBar"
import HomeSection from "./components/HomeSection"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex"> 
      <h1>
        <span className="text-4xl font-bold text-white-900">Errol Blog</span>
      </h1>
      <NavigationBar/>
      </div>
      <div>
        <HomeSection/>
      </div> 
    </main>
  )
}
