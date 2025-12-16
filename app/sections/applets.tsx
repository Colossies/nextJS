import  Image  from 'next/image';
import {get_applets as getApplets} from "@/lib/exp";

export default async function Applets() {
    const applets = getApplets();

    return (
       <div className = "w-full m-0">

       </div> 
    );
}