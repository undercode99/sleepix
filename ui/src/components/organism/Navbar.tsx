import React from "react";
import {
  NavLink
} from "react-router-dom";

import BxLayerIcon from "components/atoms/icons/BxLayerIcon";
import BxShareAltIcon from "components/atoms/icons/BxShareAltIcon";
import BxCogIcon from "components/atoms/icons/BxCogIcon";
import BxHomeAltIcon from "components/atoms/icons/BxHomeAltIcon";

function Navbar(): JSX.Element {
  return (
    <div className="w-16">
      <div className="nav flex fixed py-6 px-1 bg-gray-800 shadow flex-col h-full justify-between w-16">
        <div className="flex flex-auto items-center flex-col ">
          <span className="text-xl text-white px-2 pb-8 font-extrabold cursor-pointer">NsS</span>
          <ul className="flex items-center flex-col">
            <li>
              <NavLink to="/" title="Create New" exact className="opacity-80 text-white hover:bg-gray-600 rounded-lg p-2 cursor-pointer block mb-3" activeClassName="opacity-1 text-white bg-gray-600 shadow-md">
                <BxHomeAltIcon className="text-2xl" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/pipelines" title="Pipelines" className="opacity-80 text-white hover:bg-gray-600 rounded-lg p-2 cursor-pointer block mb-3" activeClassName="opacity-1 text-white bg-gray-600  shadow-md">
                <BxShareAltIcon className="text-2xl" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/environments" title="Environments" className="opacity-80 text-gray-100 hover:bg-gray-600 rounded-lg p-2 cursor-pointer block mb-3" activeClassName="opacity-1 text-white bg-gray-600  shadow-md">
                <BxLayerIcon className="text-2xl" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-2 cursor-pointer">
            <img src="avatar.png" className="rounded-full w-8 h-8" alt="" />
          </div>
          <ul>
            <li className="text-white hover:bg-gray-700 p-2 cursor-pointer rounded-full">
              <BxCogIcon className="text-xl" />
            </li>
          </ul>
        </div>
      </div >
    </div>
  );
}

export default Navbar;
