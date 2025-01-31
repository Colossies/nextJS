import  Image  from 'next/image';
import './timeline.css';
import {Svg as MapIcon} from '../svg/mapicon';
import {get_timeline as getTimeline} from "@/lib/exp";
export default async function Timeline() {
  const timeline = await getTimeline();
  return (
    <div className = "lg:px-[20%] w-full min-h-svh p-0 mt-2">
      <h2 className = "w-full text-center text-4xl mb-10 font-bold">Education and Jobs</h2>

      <div className = "max-w-2xl lg:max-w-none px-[10%] lg:px-[13%]">
        <ol className = "relative">
          
        {timeline.map((o, index) => (
          <li className = "timeline ms-4 pb-8 relative before:absolute after:absolute" key = {o.id}>
            
            <div className = "mb-2">
              <span className = "bg-gray-800 text-gray-100 p-2 rounded-lg mr-2">{o.type}{o.subtype ? ` - ${o.subtype}` : ""}</span>
              <span className = "mb-1 text-sm font-normal leading-none text-gray-500">{o.date_start}{o.date_end ? ` - ${o.date_end}`: ""}</span>
            </div>
            <h3 className = "text-lg font-semibold text-gray-800">{o.title}</h3>
            <p className = "mb-4 text-base font-normal text-gray-800">{o.description}</p>

            <div className = "h-12 p-0 flex flex-row gap-2">
              <a href = {o.link} className = "h-full" rel = "noopener noreferrer" target = "_blank">
                <span className = "flex items-center h-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-2 border-gray-200 rounded-lg hover:bg-gray-200 duration-200 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:bg-gray-400">
                  {o.link_to}
                </span>
              </a>
              {o.google_maps && (
                <a href = {o.google_maps} className = "h-full" rel = "noopener noreferrer" target = "_blank">
                  <MapIcon />
                </a>
              )}
            </div>
          </li>
        ))}
        </ol>
      </div>
    </div>
  )
}