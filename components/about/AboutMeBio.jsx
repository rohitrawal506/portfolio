import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <Image
          src="/images/profile.jpeg"
          width={200}
          height={200}
          className="rounded-lg"
          alt="Profile Image"
        />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-normal sm:text-xl"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
        <div className="text-normal sm:text-xl">
          <h5 className="font-semibold tracking-tight text-gray-900 mb-3 dark:text-white">
            Here&apos;s a breakdown of my skillset:
          </h5>
          <div className="flex mb-1">
            <h3 className="tracking-tight me-3 text-gray-900 dark:text-white">
              Frontend : React.js, Next.js, Vue.js, HTML, CSS, JavaScript
            </h3>
          </div>
          <div className="flex mb-1">
            <h3 className="tracking-tight me-3 text-gray-900 dark:text-white">
              Backend :  Node.js, Express js, Nest.js
            </h3>
          </div>
          <div className="flex mb-1">
            <h3 className="tracking-tight me-3 text-gray-900 dark:text-white">
              Databases :  MySQL, PostgreSQL, MongoDB
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeBio;
