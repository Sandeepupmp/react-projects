import {social, links} from "./Data"
import { FaTimes } from "react-icons/fa";
import logo from './logo.svg'
function Sidebar() {
  return (
    <aside className={`sidebar show-sidebar`}>
        <div className="sidebar-header">
            <img src={logo} alt="logo" className="logo" />
            <button className="close-btn">
                <FaTimes/>
            </button>

        </div>
        <ul className="links">
            {links.map((item)=>{
                const {id, text, url ,icon}= item
                return(
                    <li key={id}>
                        <a href={url}>
                            {icon}
                            {text}
                        </a>
                    </li>
                )
            })}

        </ul>
        <ul className="social-icons">
          {social.map((link)=>{
            const {id, url , icon} = link
            return(
                <li key={id}>
                    <a href={url}>
                        {icon}
                    </a>
                </li>
            )
          })}
        </ul>

    </aside>
  )
}
export default Sidebar