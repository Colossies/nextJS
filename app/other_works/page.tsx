import { promises as fs } from 'fs';
import styles from './works.module.css';
import  Image  from 'next/image';
import {get_other_works as getWorks} from "@/lib/exp";
export default async function Page() {
  const works = await getWorks();
  return (
    <div>
      {works.map((o) => (
        <div key = {o.id} className = {styles.other_works_object}>
          <div><Image
            src = {o.Image}
            alt  =  {o.Title}
            width = {150}
            height = {150}
            blurDataURL='data:...'
            placeholder='blur'
            /></div>
          <div className = {styles.other_works_content}>
            <div>
              <h2>{o.Title}</h2>
            </div>

            <div>
              <p>{o.Description}</p>
              {o.Link && o.Link.trim() !== "" && (
                <p>Link to work: <a href={o.Link} target="_blank" rel="noopener noreferrer">{o.Link}</a></p>
              )}

            </div>

            <div className = {styles.skills_container}>
              {Object.keys(o.Skills).map((s, idx) => (
                <div key = {idx} className = {styles.skills}>
                  <h3>{s}</h3>
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