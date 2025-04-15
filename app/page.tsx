import OtherWorks from './sections/other_works'
import Timeline from './sections/timeline'
import Skills from './sections/skills'
import Image from 'next/image';

export default function Page() {
  return (
    <>
    <div className = "min-h-svh bg-gradient-to-br to-[#435979] from-[#314158] py-16 flex flex-col items-center">
      <div className = "flex flex-col text-center mb-[5%] w-full items-center">
        {/* Profile Picture, short intro */}
        <div className = "mt-16 lg:mt-[12vh] rounded-full p-0 w-fit h-fit">
          <Image
            src = "/images/pp.png" 
            alt = "Bryan Chandra"
            width = {150}
            height = {150}
            className = "object-contain rounded-full"
          />
        </div>
          
          <h1 className = "tracking-wider font-bold text-5xl font-center lg:font-left text-gray-200 mt-4 mb-8">Bryan Chandra</h1>
          <p className = "text-xl lg:text-2xl max-w-[86vw] lg:max-w-[56vw] text-gray-100 break-words whitespace-pre-wrap">
            I am very interested in computers, both software and hardware.
            I have assembled, repaired, and refurbished computers. I have also written several computer programs and websites.
            I am always interested in oppurtunities to expand my skillsets and also grow my current skills, so challenges are always welcome!
          </p>
      </div>
      <div className = "w-full lg:px-[24%] flex flex-row justify-center">
        {/*Qualification or other buttons*/}
        {/* <a href = "/images/pp.png" download className = "w-[30%] mx-4">
          <button className = "w-full h-16 rounded-lg border-2 border-grey-200">
            <span className = "text-white font-bold tracking-wider text-xl">Download CV</span>
          </button>
        </a> */}

        
        
      </div>
      <div className = "flex flex-col w-full items-center justify-center">
        {/* Social Media */}
        <a href = "https://www.instagram.com/_bryan_chandra?igsh=dmhkZ3Rvc284OWg0" rel = "noopener noreferrer" target = "_blank">
          <div className = "flex flex-row w-[80%] lg:w-[400px] items-center p-2 rounded-lg border-2 border-[#C13584]">
            <Image 
              src = "/images/instagram_logo.png"
              alt = ""
              width = {50}
              height = {50}
              className = "w-[50px] h-[50px]"
            />
            <span className = "ml-4 w-full -translate-x-[25px] text-center text-white text-xl">_bryan_chandra</span>
          
        </div>
      </a>
      </div>
    </div>
    <Skills />
    <OtherWorks/>
    <Timeline />
    </>
  )
}