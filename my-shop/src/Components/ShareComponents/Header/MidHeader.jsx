import Logo from "../../../assets/images/logo.png";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const MidHeader = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center py-2 container mx-auto px-24">
        <img className="w-22" src={Logo} alt="" />
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="pr-48" required placeholder="Search" />
          </label>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <CiUser className="text-3xl"/>
            <div>
              <p className="ct text-xs">Account</p>
              <p className="ts">LOGIN</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <CiShoppingCart className="text-3xl"/>
            <div>
              <p className="ct text-xs">Cart</p>
              <p className="ts">3-ITEMS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
