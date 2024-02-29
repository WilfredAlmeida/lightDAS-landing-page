import React from "react";
import { founders } from "../utils/Data/founders";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa6";
const AboutFounders = () => {
  return (
    <div className=" shadow-inner mb-[5vh] mt-[5vh] w-full py-[15px] flex flex-col items-center">
      <h1 className="text-[2.8rem] mt-[3vh]  text-white">Team</h1>
      <p className="text-gray-200 mb-[5vh]">Humans at LightDAS</p>

      <div className="flex flex-col md:flex-row text-white gap-[2vw]  mt-5 ">
        {founders.map((founder, index) => (
          <>
            <div className="md:w-[24w] lg:w-[28vw] relative sm:w-[40vw] xs:w-[70vw]  mt-5   bg-[#121212B2] border-[#2A2427] border shadow-spotlight border-solid border-1 transition-transform duration-300 h-auto md:h-[18rem]  rounded-[18px] flex flex-col p-6">
              <div className="absolute mt-[2px] text-[1.6rem] text-[#FF7B15]">
                {founder.name}
              </div>
              <div className="absolute mt-[38px] text-gray-500">
                {founder.intro}
              </div>
              {
                <>
                  <Image
                    src={founder.image}
                    width={60}
                    height={60}
                    alt="founder's profile"
                    className=" w-[60px] h-[60px] relative bottom-[60px] rounded-md object-cover border-[#2A2427] border shadow-spotlight border-solid border-1"
                  />
                  <div className="flex py-4  px-2 lg:px-6 gap-4  lg:gap-4 absolute top-0 right-0">
                    <Link href={founder.twitter} target="_blank">
                      <BsTwitterX style={{ color: "white" }} />
                    </Link>
                    <Link href={founder.github} target="_blank">
                      <FaGithubAlt style={{ color: "white" }} />
                    </Link>

                    {/* <CiLinkedin style={{color: "white", width: 30, height:30}}/> */}
                  </div>
                  <div className="flex flex-col gap-2 mt-[5vh]">
                    {founder.about.map((each, index) => (
                      <div
                        key={index}
                        className="flex gap-4  text-wrap items-center text-md text-gray-300"
                      >
                        {each.icon}
                        <p>{each.point}</p>
                      </div>
                    ))}
                  </div>
                </>
              }
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AboutFounders;
