import { useState } from "react"
import rgbToHex from "./Utils"

function SingleColor( {rgb, weight , index}) {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${rgb})`}}>
        <p className="percent-value">{weight}%</p>
        <p className="color-value"> {hex}</p>

    </article>
  )
}
export default SingleColor