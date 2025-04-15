import  Image  from 'next/image';

export default async function Skills() {
  return (
    <div className = "w-full mt-24 mb-20 items-center flex flex-col">
      <h2 className = "text-5xl mb-12 font-bold self-center">My Skills</h2>
      <div className = "bg-[#bbc1ca] w-[90%] lg:w-[55%] lg:h-[60%] rounded-3xl p-2 flex flex-col lg:flex-row items-center justify-around">
        <div className = "p-0 rounded-xl mb-8 lg:mb-0 w-[95%] lg:w-[30%] h-[400px]">
          <Image
            src = '/nextJS/images/neural_network.svg'
            alt  =  ''
            width = {300}
            height = {300}
            blurDataURL='data:...'
            placeholder='blur'
            className = "w-full h-[40%] p-0 rounded-t-xl mt-2"
          />
          <h3 className = "text-center font-bold text-2xl mt-2 tracking-wide">Machine Learning</h3>
          <div className = "h-full mt-4 text-xl text-center justify-center">
            I can train an existing machine learning model and build a new model.
          </div>
        </div>
        <div className = "p-0 rounded-xl mb-8 lg:mb-0 w-[95%] lg:w-[30%] h-[400px]">
          <Image
            src = '/nextJS/images/data_analysis.svg'
            alt  =  ''
            width = {300}
            height = {300}
            blurDataURL='data:...'
            placeholder='blur'
            className = "w-full h-[40%] p-0 rounded-t-xl mt-2"
          />
          <h3 className = "text-center font-bold text-2xl mt-2 tracking-wide">Data Processing</h3>
          <div className = "h-full mt-4 text-xl text-center justify-center">
            I can clean data, summarize them, turn them into charts, and process them into other forms, including extracting data from text.
          </div>
        </div>
        <div className = "bg-[#bbc1ca p-0 rounded-xl mb-8 lg:mb-0 w-[95%] lg:w-[30%] h-[400px] ">
          <Image
            src = '/nextJS/images/website_development.svg'
            alt  =  ''
            width = {300}
            height = {300}
            blurDataURL='data:...'
            placeholder='blur'
            className = "w-full h-[40%] p-0 rounded-t-xl mt-2"
          />
          <h3 className = "text-center font-bold text-2xl mt-2 tracking-wide">Website Development</h3>
          <div className = "h-full mt-4 text-xl text-center justify-center">
            I have experience building websites. My strong point is in doing the website logic and backend.
          </div>
        </div>
        
      </div>
    </div>
  )
}