// components/home-photos/BackgroundChanger.tsx
'use client'

import { useState, useEffect, useMemo } from 'react';

const BackgroundChanger = () => {
  // Array of background image paths
const images: string[] = useMemo(() => [
    '/homephotos/EJG2129.JPG',
    '/homephotos/EJG2824.JPG',
    '/homephotos/EJG4425.JPG',
    '/homephotos/EJG5061.JPG',
    '/homephotos/EJG5083.JPG',
    '/homephotos/EJG6591.JPG',
    '/homephotos/EJG6634.JPG',
    '/homephotos/EJG7264.JPG',
    '/homephotos/EJG7358.JPG',
    '/homephotos/EJG7428.JPG',
    '/homephotos/EJG7456.JPG',
    '/homephotos/EJG7760.JPG',
], []);

  const [currentImage, setCurrentImage] = useState<string>(images[0]);
  const [nextImage, setNextImage] = useState<string | null>(null);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Select a random image that's different from the current one
      let newImage = images[Math.floor(Math.random() * images.length)];
      while (newImage === currentImage) {
        newImage = images[Math.floor(Math.random() * images.length)];
      }
      setNextImage(newImage);
      setFade(true);

      // After the fade transition, update the current image
      setTimeout(() => {
        setCurrentImage(newImage);
        setNextImage(null);
        setFade(false);
      }, 1000); // Duration should match the CSS transition duration
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentImage, images]);

return (
    <>
        {/* Current Background Image */}
        <div
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                fade ? 'opacity-50' : 'opacity-100'
            }`}
            style={{
                backgroundImage: `url(${currentImage})`,
                filter: 'blur(1px) brightness(80%)',
                zIndex: -2,
                transform: 'translateY(-20%)', // Move the image up by 10%
            }}
        ></div>

        {/* Next Background Image for Fade Transition */}
        {nextImage && (
            <div
                className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-50`}
                style={{
                    backgroundImage: `url(${nextImage})`,
                    filter: 'blur(1px) brightness(80%)',
                    zIndex: -1,
                    transform: 'translateY(-20%)', // Move the image up by 10%
                }}
            ></div>
        )}
    </>
);
};

export default BackgroundChanger;