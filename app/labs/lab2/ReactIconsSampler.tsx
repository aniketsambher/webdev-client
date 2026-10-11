import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoRocketOutline } from "react-icons/io5";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      <div className="flex gap-3 mt-3">
        <HiOutlineAcademicCap className="text-4xl text-blue-600" />
        <IoRocketOutline className="text-4xl text-blue-600" />
      </div>
    <div className="bg-gray-100 p-4 mt-4 rounded-md">
    <MdOutlineAccountBalanceWallet/>
    <BsFillAlarmFill/>
</div>
    </div>
    
  );
}