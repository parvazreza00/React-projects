import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaWhatsapp } from "react-icons/lia";

const TopHeader = () => {
  return (
    <div className="bg-[#F8F8FB] py-2">
      <div className="flex justify-between items-center container mx-auto px-24">
        <div className="flex items-center gap-12 ct">
        <div className="flex items-center gap-2">
          <MdOutlinePhoneInTalk />
          <p className="text-[12px]">01738920277</p>
        </div>
        <div className="flex items-center gap-2">
          <LiaWhatsapp />
          <p className="text-[12px]">01575049978</p>
        </div>
      </div>
      <div>
        <p className="text-[12px] ct">World's Fastest Online Shopping Destination</p>
      </div>
      <div className="flex items-center text-[12px] ct gap-6">
        <p>Helps?</p>
        <p>Trcak Order?</p>
        <p>English?</p>
        <p>ContactUs</p>
      </div>
      </div>
      
    </div>
  );
};

export default TopHeader;
