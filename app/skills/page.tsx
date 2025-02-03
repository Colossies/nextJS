
import Image from 'next/image';
import {Skills as SkillsMajor} from "./sections/skills_major";
import {Skills as SkillsMinor} from "./sections/skills_minor";
export default function Page() {
    return (
    <>
        <div className = "py-16">
            <SkillsMajor/>
        </div>
    </>
    )
}