import { useEffect, useState } from "react"
import rgbToHex from "./Utils"

function SingleColor( {rgb, weight , index}) {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
    useEffect(()=>{
   const timeout = setTimeout(() => {
    setAlert(false)
   }, 2000);
   return ()=> clearTimeout(timeout)
    },[alert])
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${rgb})`}}
    onClick={()=>{
        setAlert(true)
        navigator.clipboard.write(hex)
    }}
    >
        <p className="percent-value">{weight}%</p>
        <p className="color-value"> {hex}</p>
        {alert && <p className="alert">copied to clipboad</p>}

    </article>
  )
}
export default SingleColor