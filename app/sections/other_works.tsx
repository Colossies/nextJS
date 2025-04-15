import  Image  from 'next/image';
import {get_other_works as getWorks} from "@/lib/exp";
export default async function OtherWorks() {
  const works = await getWorks();
  return (
    <div className = "w-full min-h-full p-4 pt-12 flex flex-col">
      <h2 className = "text-5xl mb-10 font-bold self-center">Projects</h2>
      <div className = "max-w-2xl lg:max-w-none px-[10%] lg:px-[13%]">
        {works.map((o, index) => (
          <div key = {o.id} id = {`section-${o.id}`} className = "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-16 lg:py-12">
            <div className = {`-ml-12 lg:-mt-12 px-12 lg:pt-12 lg:top-4 ${index % 2 === 1 ? 'lg:col-start-2  lg:ml-0' : 'lg:col-start-1'} lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:relative lg:sticky lg:top-6`}>
              <Image
              src = {o.Image}
              alt  =  {o.Title}
              width = {500}
              height = {500}
              blurDataURL='data:...'
              placeholder='blur'
              className = "w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:left-0 lg:max-w-none"
              /></div>
            <div className = {`-ml-12 lg:-mt-12 px-12 pb-12 lg:pt-12 lg:sticky lg:top-6 ${index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-2 lg:-mr-12 lg:ml-0'} lg:row-span-2 lg:row-start-1 lg:overflow-hidden`}>
              <div> 
                <h2 className = "font-extrabold mb-1 lg:mb-4 text-2xl">{o.Title}</h2>
              </div>

              <div className = "mb-2 lg:mb-6">
                <p>{o.Description}</p>
                {o.Link && o.Link.trim() !== "" && (
                  <p>Link to work: <a href={o.Link} target="_blank" rel="noopener noreferrer" className = "text-blue-600">{o.Link}</a></p>
                )}

              </div>
              <div className = "columns-1 lg:columns-2 w-full mt-2 break-inside-avoid">
                {Object.keys(o.Skills).map((s, idx) => (
                  <div key = {idx} className = "p-3 w-full lg:w-prose mb-4 mr-4 border-solid border-2 border-black rounded-lg h-fit break-inside-avoid">
                    <h3 className = "font-bold mb-1 text-xl">{s}</h3>
                    <p>{o.Skills[s]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}