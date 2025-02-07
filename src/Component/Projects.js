import React from "react";
import youtubeClone from "../youtube-clone.png";
import npmjsclone from "../npmjsclone.png";
import megastructure from "../megastructure.png";
import kaari from "../kaari.png";
import notch from "../notch.png";
import moistflower from "../moistflower.png";

const Projects = () => {
  return (
    <div className=" bg-gray-50 py-10 md:py-14" id="project">
      <h1 className=" text-4xl font-bold text-center pb-6 underline">
        Projects
      </h1>
      {/* After creating more than one project wrap in a div tag from below here and make it flex */}
      <div>
        <div className="md:flex md:place-content-between md:px-8 md:items-center pb-4">
          {/* First Project */}
          <div className=" md:flex md:flex-col md:items-start md:justify-center">
            <div>
              <img
                alt="clone-snippet"
                src={megastructure}
                className=" w-96 mx-auto border border-black rounded-2xl"
              ></img>
            </div>
            <div>
              <h1 className=" text-2xl font-bold p-2 text-center">
                Mega Structure
              </h1>
              <div className="flex gap-4 justify-center text-sm underline underline-offset-1 font-medium md:pb-4">
                <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                  <a
                    href="https://megastructure.co.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </span>
              </div>
              <p className=" text-center px-4 text-base pb-8 md:w-96 md:p-0  md:text-justify">
                This is a live project developed for the organisation Mega
                Structure. This website is build on WordPress using elementor. I
                am proud to say that this project has been successfully
                delivered to the client, and they are absolutely delighted with
                the outcome!
              </p>
            </div>
          </div>
          {/* Second Project Start */}
          <div className=" md:flex md:flex-col md:items-start md:justify-center">
            <div>
              <img
                alt="clone-snippet"
                src={youtubeClone}
                className=" w-96 mx-auto border border-black rounded-2xl"
              ></img>
            </div>
            <div>
              <h1 className=" text-2xl font-bold p-2 text-center">
                Youtube Clone
              </h1>
              <div className="flex gap-4 justify-center text-sm underline underline-offset-1 font-medium md:pb-4">
                <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                  <a
                    href="https://utpal-youtube-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </span>
                <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                  <a
                    href="https://github.com/utpalkumar567/youtube-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Link
                  </a>
                </span>
              </div>
              <p className=" text-center px-4 text-base pb-8 md:w-96 md:p-0  md:text-justify">
                This project is a frontend clone of YouTube built using ReactJS,
                Tailwind CSS, React Router DOM, and Redux Toolkit. It aims to
                provide a familiar user interface similar to YouTube, allowing
                users to browse videos, search for content, and view video
                details.
              </p>
            </div>
          </div>
          {/* Third Project starts */}
          <div className=" md:flex md:flex-col md:items-start md:justify-center">
            <div>
              <img
                alt="clone-snippet"
                src={npmjsclone}
                className=" w-96 mx-auto border border-black rounded-2xl"
              ></img>
            </div>
            <div>
              <h1 className=" text-2xl font-bold p-2 text-center">
                NPMJS Clone
              </h1>
              <div className="flex gap-4 justify-center text-sm underline underline-offset-1 font-medium md:pb-4">
                <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                  <a
                    href="https://npmjsclone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </span>
                <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                  <a
                    href="https://github.com/utpalkumar567/npmjs-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Link
                  </a>
                </span>
              </div>
              <p className=" text-center px-4 text-base pb-8 md:w-96 md:p-0  md:text-justify">
                This project is a clone of NPMJS.com built using ReactJS,
                Tailwind CSS, and React Router DOM. It aims to provide
                information about Package Name, Description, Versions which are
                available in npm registry.
              </p>
            </div>
          </div>
        </div>
        {/* 2nd Row of Project starts here */}
        <div className="md:flex md:place-content-between md:px-8 md:items-center">
          {/* First Project */}
          <div className=" md:flex md:flex-col md:items-start md:justify-center">
            <div>
              <img
                alt="clone-snippet"
                src={kaari}
                className=" w-96 mx-auto border border-black rounded-2xl"
              ></img>
            </div>
            <div>
              <h1 className=" text-2xl font-bold p-2 text-center">
                Kaari Resin
              </h1>
              <div className="flex gap-4 justify-center text-sm underline underline-offset-1 font-medium md:pb-4">
                <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                  <a
                    href="https://kaariresin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </span>
              </div>
              <p className=" text-center px-4 text-base pb-8 md:w-96 md:p-0  md:text-justify">
                This is a live project developed for Kaari Resin. This website
                is build on WordPress using elementor. The whole layout has been
                designed and developed according to the need of the client. The
                end product is upto the mark as per the client feedback.
              </p>
            </div>
          </div>
          {/* Second Project Start */}
          <div className=" md:flex md:flex-col md:items-start md:justify-center">
            <div>
              <img
                alt="clone-snippet"
                src={notch}
                className=" w-96 mx-auto border border-black rounded-2xl"
              ></img>
            </div>
            <div>
              <h1 className=" text-2xl font-bold p-2 text-center">
                The Digital Notch
              </h1>
              <div className="flex gap-4 justify-center text-sm underline underline-offset-1 font-medium md:pb-4">
                <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                  <a
                    href="https://thedigitalnotch.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </span>
              </div>
              <p className=" text-center px-4 text-base pb-8 md:w-96 md:p-0  md:text-justify">
                This project is developed for the Digital Marketing Agency. The
                website showcase their protfolio and services which they
                provide. I also got the chance to work for them as a developer
                after they were satisfied with my work as a freelancer.
              </p>
            </div>
          </div>
          {/* Third Project starts */}
          <div className=" md:flex md:flex-col md:items-start md:justify-center">
            <div>
              <img
                alt="clone-snippet"
                src={moistflower}
                className=" w-96 mx-auto border border-black rounded-2xl"
              ></img>
            </div>
            <div>
              <h1 className=" text-2xl font-bold p-2 text-center">
                NPMJS Clone
              </h1>
              <div className="flex gap-4 justify-center text-sm underline underline-offset-1 font-medium md:pb-4">
                <span className=" cursor-pointer  hover:text-blue-600 md:text-base">
                  <a
                    href="https://moistflower.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </span>
              </div>
              <p className=" text-center px-4 text-base pb-8 md:w-96 md:p-0  md:text-justify">
                This is a E-commerce project developed in WordPress with
                elementor. I have worked at this site by customizing and adding
                features which are the requirement by the client. The feedback
                were positive and client was very happy with the outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
