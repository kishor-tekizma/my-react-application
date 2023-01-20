import { Link } from "react-router-dom";

function SideBar(){
    return(
        <div>
            <ul>
              <li>  <Link to='/fruits'>Fruits</Link></li>
              <li> <Link to='/vegetable'>Vegetables</Link></li>
              <li> <Link to='/meat'>Meat</Link></li>
              <li> <Link to='/cleaner'>Cleaners</Link></li>
              <li><Link to='/packedfoods'>Packed foods</Link></li>
                </ul>
        </div>
    )
}

export default SideBar;