import  Image  from 'next/image';
import {get_applets as getApplets} from "@/lib/exp";

export default async function Applets() {
    const applets = await getApplets();

    return (
       <div className = "w-full m-0 flex flex-row overflow-x-auto overscroll-contain space-x-4">
        {applets.map((applet, index) => (
            <a href = {applet.link}>
                <div key = {applet.id} className = "flex flex-col w-150 h-150 p-10">
                    <div>
                        <Image 
                            src = {applet.image}
                            alt  =  {applet.name}
                            width = {120}
                            height = {120}
                            blurDataURL='data:...'
                            placeholder='blur'
                            className = "w-120 h-120 object-cover"
                        />
                    </div>
                    <div>
                        <h3>{applet.name}</h3>
                    </div>
                </div>
            </a>
        ))}
       </div> 
    );
}