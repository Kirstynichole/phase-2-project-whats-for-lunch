import React from "react";
import { FaYelp } from "react-icons/fa";
import { SiDoordash } from "react-icons/si";


const ExteriorLinks = () => {
  return (
    <div className="hidden lg:flex flex-col bottom-[10%] right-0 fixed">
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 mr-[-100px] rounded-tl-md hover:mr-[-10px] bg-opacity-75 hover:bg-opacity-100 duration bg-pink-800">
                <a href="https://www.yelp.com/search?find_desc=Restaurants&find_loc=New+York%2C+NY+10004" className="flex justify-between items-center w-full text-white">{" "}
                    <>
                        <FaYelp size={30}/> Yelp
                    </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 mr-[-100px] rounded-bl-md hover:mr-[-10px] bg-opacity-75 hover:bg-opacity-100 duration bg-pink-800">
                <a href="https://www.doordash.com/home/?gad_source=1&gclid=CjwKCAiAg9urBhB_EiwAgw88mQJrULNKkKK2qI3DriWzjbRZQfazVfolkk3wRQYnhnMnjPLTs2U8_xoCREsQAvD_BwE&gclsrc=aw.ds&ignore_splash_experience=true&kclickid=_k_CjwKCAiAg9urBhB_EiwAgw88mQJrULNKkKK2qI3DriWzjbRZQfazVfolkk3wRQYnhnMnjPLTs2U8_xoCREsQAvD_BwE_k_&newUser=true&utm_adgroup_id=91210150062&utm_campaign=CX_US_SE_SB_GO_ACQ_TETXXX_20108655795_RSTRNT_+BR_ACQ_INMKT_GenDeliveryxx_EVG_CPAx_EPX_COUSA_EN_EN_X_DOOR_GO_SE_TXT_BRXTCPAEXP&utm_content=91210150062&utm_creative_id=659053368854&utm_keyword_id=kwd-63454401416&utm_medium=SEMb&utm_source=Google&utm_term=doordash" className="flex justify-between items-center w-full text-white">{" "}
                    <>
                        <SiDoordash size={30}/> DoorDash
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default ExteriorLinks