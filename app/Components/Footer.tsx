import React from "react";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
const Footer = () => {
  return (

      <div className="flex justify-between py-[10px] mt-[7vh] w-[100%]">
        <div className="flex items-center justify-center ">
          <a
            href="/"
            className="flex items-center text-[1rem] md:text-[1.5rem] lg-[2rem text-white delay-75 transition-all cursor-pointer gap-5"
          >
            <Image
              src="/Assets/logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
            <p className="font-semibold">LightDAS</p>
          </a>
        </div>
       
        <div className="flex items-center justify-center gap-4">
          <Link href={"https://twitter.com/lightdas_"} target="_blank">
            <BsTwitterX style={{ color: "white", width: 25, height: 25 }} />
          </Link>
          <Link
            href={"https://github.com/WilfredAlmeida/LightDAS"}
            target="_blank"
          >
            <FaGithubAlt style={{ color: "white", width: 25, height: 25 }} />
          </Link>

          {/* <CiLinkedin style={{color: "white", width: 30, height:30}}/> */}
        </div>
      </div>
  
  );
};

export default Footer;
