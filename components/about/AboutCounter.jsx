import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AboutCounter() {
	const [activeTheme] = useThemeSwitcher();
console.log(activeTheme);
  //   useCountUp({ ref: "experienceCounter", end: 2, duration: 2 });
  //   useCountUp({ ref: "projectCompeleteCounter", end: 5, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-around items-center">
        <div className="sm:hidden">
          <CounterItem
            title="Years of experience"
            counter={2}
            measurement="+"
          />

          <CounterItem title="Project completed" counter={5} measurement="+" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 256 256"
            >
              <path
			  fill="white"
                // fill={`${activeTheme && activeTheme === "dark" ? "white": "blue"}`}
                d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm6.62 31.47l46.82-10.05l3.34 15.9L146 97.53Zm6.64 31.57l46.82-10.06l13.3 63.24l-46.82 10.06ZM216 197.94l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm0 32h48v96H56Zm48 128H56v-16h48z"
              />
            </svg>
            <div className="mx-2">
              <a href="#">
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  2022 - present
                </p>
                <h5 className=" text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  BCA
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Madhav University, Sirohi, Rajasthan
              </p>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.5 9h-1m5 0h-1m-3-3h-1m5 0h-1m9 9h-1m1-4h-1M14 8v14h4c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8zm0 0c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8v2m6.025 3.955a2 2 0 1 1-3.999-.002a2 2 0 0 1 3.999.002M2.07 20.21c1.058-1.628 2.739-2.238 3.955-2.237s2.847.609 3.906 2.237c.068.105.087.235.025.344c-.247.439-1.016 1.31-1.57 1.368c-.639.068-2.307.078-2.36.078s-1.773-.01-2.41-.078c-.556-.059-1.324-.929-1.572-1.368a.33.33 0 0 1 .026-.344"
                color="white"
              />
            </svg>
            <div className="mx-2">
              <a href="#">
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  2022 - 2024
                </p>
                <h5 className=" text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Icoderz Solutions
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Ahmedabad, Gujarat
              </p>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.5 9h-1m5 0h-1m-3-3h-1m5 0h-1m9 9h-1m1-4h-1M14 8v14h4c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8zm0 0c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8v2m6.025 3.955a2 2 0 1 1-3.999-.002a2 2 0 0 1 3.999.002M2.07 20.21c1.058-1.628 2.739-2.238 3.955-2.237s2.847.609 3.906 2.237c.068.105.087.235.025.344c-.247.439-1.016 1.31-1.57 1.368c-.639.068-2.307.078-2.36.078s-1.773-.01-2.41-.078c-.556-.059-1.324-.929-1.572-1.368a.33.33 0 0 1 .026-.344"
                color="white"
              />
            </svg>
            <div className="mx-2">
              <a href="#">
                <p className="font-normal text-gray-500 dark:text-gray-400">
                  2024- present
                </p>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Bitontree Solutions
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Ahmedabad, Gujarat
              </p>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden">
          <CounterItem
            title="Years of experience"
            counter={2}
            measurement="+"
          />

          <CounterItem title="Project completed" counter={5} measurement="+" />
        </div>

        {/* <CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/> */}
      </div>
    </div>
  );
}

export default AboutCounter;
