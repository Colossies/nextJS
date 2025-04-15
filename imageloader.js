import { basePath } from "next.config";
import path from "path";


export default function myImageLoader({src,width}) {
  if( basePath && path.isAbsolute(src) ){
    return `${basePath}${src}?width=${width}`;
  }
  return `${src}?width=${width}`;
}