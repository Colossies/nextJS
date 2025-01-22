import  Image  from 'next/image';
import {get_other_works as getWorks} from "@/lib/exp";
export default async function Page() {
  const works = await getWorks();
  return (
    <div className = "max-w-2xl lg:max-w-none ">
      {works.map((o) => (
        <div key = {o.id} className = "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-16 lg:px-20 lg:my-12">
          <div className = "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-center"><Image
            src = {o.Image}
            alt  =  {o.Title}
            width = {150}
            height = {150}
            blurDataURL='data:...'
            placeholder='blur'
            className = "w-[12rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[16rem]"
            /></div>
          <div className = "-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div>
              <h2 className = "font-extrabold mb-1 text-2xl">{o.Title}</h2>
            </div>

            <div>
              <p>{o.Description}</p>
              {o.Link && o.Link.trim() !== "" && (
                <p>Link to work: <a href={o.Link} target="_blank" rel="noopener noreferrer">{o.Link}</a></p>
              )}

            </div>
            {/* "flex flex-row flex-wrap columns-1 lg:columns-2 w-full mt-2" */}
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
  )
}