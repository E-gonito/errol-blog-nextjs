import { PrismaClient } from "@prisma/client";
import { getPosts, createPosts } from 'app/api/Prisma'
import { prisma } from 'app/api/Prisma'

const MainSection = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Characters</p>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Welcome to the Star Rail Realm! This is a community based website for the game 'Honkai: Star Rail' where you can discuss and theorycraft with fellow users, 
                see the latest information, share fan made content and more! <br/>
                We also have a plethora of tools for you to use, such as a team builder, tier list maker and a wrap simulator!
              </p>
              {posts.map((post) => (
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection;