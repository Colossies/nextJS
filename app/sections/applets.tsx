import  Image  from 'next/image';
import {get_applets as getApplets} from "@/lib/exp";
import Link from 'next/link';


export default async function Applets() {
    const applets = await getApplets();

    return (
    <>
        <h2 className = "w-full text-center m-4 text-5xl mb-10 font-bold self-center">
            APPLETS
        </h2>
        <div className = "w-full m-0 flex flex-row overflow-x-auto overscroll-contain space-x-4 justify-center">
        {applets.map((applet, index) => (
            <Link href = {applet.link}>
                <div key = {applet.id} className = "flex flex-col w-150 h-150 p-10">
                    <div>
                        <img
                            src={applet.image}
                            alt={applet.name}
                            className="w-[120px] h-[120px] object-cover"
                        />
                    </div>
                    <div>
                        <h3 className = "text-center w-full">{applet.name}</h3>
                    </div>
                </div>
            </Link>
        ))}
        </div> 
    </>
    );
}