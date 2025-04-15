
import Image from 'next/image';
import {get_skills_major as getSkillsMajor} from "@/lib/exp";
import Level from "../components/level";
export async function Skills() {
    const skills_major = await getSkillsMajor()
    return (
    <>
        <div className = "flex flex-col w-full items-center">
            {skills_major.map((o, index) => (
                <div className = "grid grid-cols-2 lg:w-[80%] p-2" key = {o.id}>
                    <div className = "col-start-1 overflow-hidden h-full ">
                        {/* Image */}
                        <Image
                            src = {o.Image}
                            alt  =  {o.Title}
                            width = {300}
                            height = {300}
                            blurDataURL='data:...'
                            placeholder='blur'
                            className = "rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 absolute left-0 h-full w-auto max-w-none"
                        />
                    </div>
                    <div className = "col-start-2">
                        <div className = "">
                            {/* Main part and description */}
                            <h2 className = "tracking-wide font-bold text-4xl mb-4">{o.name}</h2>
                            <Level level = {o.level}/>
                            <p className = "">{o.remark}</p>
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