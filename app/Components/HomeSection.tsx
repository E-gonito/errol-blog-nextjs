import { BookmarkIcon, ListBulletIcon, VideoCameraIcon, WrenchIcon, UserGroupIcon, UserCircleIcon, PresentationChartBarIcon } from '@heroicons/react/20/solid';
import profileImage from 'public/profile/EJG.png';

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
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg flex items-center">
          <img src={profileImage.src} alt="Errolson Gonito" className="w-16 h-16 rounded-full mr-4" />
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Errolson Gonito CV Website</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomeSection;