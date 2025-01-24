import OtherWorks from './other_works/other_works'
// Palette #FEF3C7
export default function Page() {
  return (
    <>
    <div className = "h-svh bg-gradient-to-br to-[#435979] from-[#314158] pt-16 flex flex-col lg:grid lg:grid-cols-3">
      <div className = "lg:col-start-1 lg:h-full w-full lg:p-0 flex flex-col lg:px-[5%]">
        {/* Qualifications */}
          <h3 className = "font-bold text-4xl lg:font-left">Hello, I am</h3>
          <h1 className = "tracking-wider font-extrabold text-5xl font-center lg:font-left">Bryan Chandra</h1>
          <h1 className = "tracking-wide font-extrabold text-4xl lg:font-left text-[#b9469b]">Software Developer</h1>
      </div>
      <div className = "lg:col-start-2 lg:h-full w-full">
        {/* Profile picture*/}
        <div></div>
      </div>
      <div className = "lg:col-start-3 lg:h-full w-full">
        {/* Contact info & social media, cv download button */}
        <div>

        </div>
        <button></button>
      </div>
    </div>
    <OtherWorks />
    </>
  )
}