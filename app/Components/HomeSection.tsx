import { BookmarkIcon, ListBulletIcon, VideoCameraIcon, WrenchIcon, UserGroupIcon, UserCircleIcon, PresentationChartBarIcon} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Characters:',
    description:
      'See guides, information and discuss anything related about your favorite characters.',
    icon: UserCircleIcon,
  },
  {
    name: 'Light Cones:',
    description: 'Look at information about all light cones and talk and their recommend usage',
    icon: BookmarkIcon,
  },
  {
    name: 'Teams:',
    description: 'Create teams and share them with other users.',
    icon: UserGroupIcon,
  },
  {
    name: 'Tier List:',
    description: 'See tier lists made by other users and create your own.',
    icon: ListBulletIcon,
  },
  {
    name: 'Videos:',
    description: 'Share and view user made videos.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Art:',
    description: 'Share and view user made art.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Tools:',
    description: 'Play the game in the browser, Gacha away on the simulator and more.',
    icon: WrenchIcon,
  },
  
]
const HomeSection = () => {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Star Rail Realm</p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Welcome to the Star Rail Realm! This is a community based website for the game 'Honkai: Star Rail' where you can discuss and theorycraft with fellow users, 
                see the latest information, share fan made content and more! <br/>
                We also have a plethora of tools for you to use, such as a team builder, tier list maker and a wrap simulator!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-100">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <video 
                src="https://cdn.now.gg/apps-content/com.HoYoverse.hkrpgoversea/videos/desktop/honkai-star-rail.mp4" 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection;