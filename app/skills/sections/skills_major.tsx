
import Image from 'next/image';
import {get_skills_major as getSkillsMajor} from "@/lib/exp";
import Level from "../components/level";
export async function Skills() {
    const skills_major = await getSkillsMajor()
    return (
    <>
        <div className = "flex flex-col w-full items-center">
            {skills_major.map((o, index) => (
                <div className = "grid grid-cols-2" key = {o.id}>
                    <div className = "col-start-1 overflow-hidden h-full">
                        {/* Image */}
                        <Image
                            src = {o.Image}
                            alt  =  {o.Title}
                            width = {100}
                            height = {100}
                            blurDataURL='data:...'
                            placeholder='blur'
                            className = "w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        />
                    </div>
                    <div className = "col-start-2">
                        <div className = "">
                            {/* Main part and description */}
                            <h2 className = "">{o.name}</h2>
                            <Level level = {o.level}/>
                        </div>
                        <div className = "">
                            {/* Subskills (if they exist) */}
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    </>
    )
}