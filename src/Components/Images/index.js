import { forwardRef, useState } from "react"
import classNames from "classnames"
import images  from "~/Access/Images"
import style from './Images.module.scss'


function Image({alt, src, classname,fallback: customFallback = images.noImage, ...props} , ref){
    const [fallback , setFallback] = useState('')
    const handleError = ()=>{
        setFallback(customFallback)
    }
    return <img 
     className={classNames(style.wrapper , classname)} 
     ref={ref} 
     src={fallback || src} 
     alt={alt} {...props} 
     onError={handleError}></img>
}
export default forwardRef(Image)