

function HomeSection() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl tracking-tight text-blue-200 sm:text-4xl">Welcome!</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Dive deep into the world of ideas, stories, and insights with Errol Blog. Here, we curate a collection of thought-provoking articles, 
              compelling narratives, and inspiring tales that resonate with curious minds. 
              Whether you're seeking knowledge, inspiration, or a momentary escape, you're in the right place.
              <br></br>
              <br></br>
              Discover topics that matter to you, from technology and travel to self-improvement and culture. 
              With fresh content added regularly, there's always something new to spark your interest.
              Join our community of readers and thinkers. Browse, engage, and let your curiosity lead the way. Your next favorite read is just a click away.
              </p>
            </div>
          </div>
          <img
            src="../EJG_2863.JPG"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeSection;