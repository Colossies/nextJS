
import Image from 'next/image';
import {get_skills_minor as getSkillsMinor} from "@/lib/exp";

export async function Skills() {
    const skills_minor = await getSkillsMinor()
    return (
    <>
        <div className = "">
            {skills_minor.map((o, index) => (
                <div>

                </div>
            ))}
        </div>
    </>
    )
}