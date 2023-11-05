import { PrismaClient } from "@prisma/client";
import { getPosts, createPosts } from 'app/api/Prisma'
import { prisma } from 'app/api/Prisma'
import ProfileInformation from "./ProfileInformation";

const MainSection = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Profile</p>
              <div className="mt-6 text-lg leading-8 text-gray-200">
                <ProfileInformation/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection;