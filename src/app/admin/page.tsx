'use client'
import Image from "next/image";
import {
  Bars3Icon,
  UserCircleIcon,
  Cog8ToothIcon,
  SunIcon,
  MoonIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { PieChartComponent } from '@/components/PieChart/PieChart';
export default function AdminCarRent() {
  return (
    <div className="max-w-[1440px] h-auto bg-[#F6F7F9] flex flex-col md:flex-row md:justify-center p-4">
      {/* Dashboard section */}
      <div className="w-full md:w-[286px] h-auto md:h-[900px] bg-white border-r border-gray-300 mb-4 md:mb-0 hidden xl:block">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Main Menu</h2>
          <div className="flex flex-col space-y-4">
            {/* Menu items */}
            <button className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
              <Bars3Icon className="w-6 h-6 text-[#90A3BF]" />
              <span className="text-[#90A3BF]">Dashboard</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
              <UserCircleIcon className="w-6 h-6 text-[#90A3BF]" />
              <span className="text-[#90A3BF]">Users</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
              <Cog8ToothIcon className="w-6 h-6 text-[#90A3BF]" />
              <span className="text-[#90A3BF]">Settings</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
              <InformationCircleIcon className="w-6 h-6 text-[#90A3BF]" />
              <span className="text-[#90A3BF]">Help</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
              <QuestionMarkCircleIcon className="w-6 h-6 text-[#90A3BF]" />
              <span className="text-[#90A3BF]">Support</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
              <SunIcon className="w-6 h-6 text-[#90A3BF]" />
              <span className="text-[#90A3BF]">Light Mode</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md">
              <MoonIcon className="w-6 h-6 text-[#90A3BF]" />
              <span className="text-[#90A3BF]">Dark Mode</span>
            </button>
            {/* Sign out button */}
            <button className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded-md mt-auto">
              <ArrowRightOnRectangleIcon className="w-6 h-6 text-[#90A3BF]" />
              <span className="text-[#90A3BF]">Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="flex-1 w-full md:w-[534px] h-auto md:h-[836px] bg-white rounded-[10px] md:mt-[32px] p-4 relative overflow-hidden">
        {/* Title */}
        <div className="mb-4">
          <h3 className="font-bold text-[20px] leading-[30px] text-[#1A202C]">Details Rental</h3>
        </div>

        {/* Map Image */}
        <div className="w-full mb-4">
          <Image src={"/Maps.png"} alt="Map" width={500} height={300} className="object-cover rounded-md" />
        </div>

        {/* Car Image and Details */}
        <div className="flex items-center gap-8 mb-4">
          <Image src={"/car.png"} alt="Car" width={132} height={72} className="rounded-[8px]" />
          <div className="flex flex-col gap-2">
            <div className="font-bold text-[24px] text-[#1A202C]">Nissan GT - R</div>
            <div className="text-[14px] text-[#3D5278]">Sport Car</div>
          </div>
          <div className="text-[14px] text-[#3D5278] text-right">#9761</div>
        </div>

        {/* Pick-Up Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" />
            <label className="font-medium text-[14px] text-[#1A202C]">Pick-Up</label>
          </div>
          <div className="flex gap-4">
            <select className="w-[160px] h-[48px] border border-gray-300 rounded-md">
              <option>Location</option>
            </select>
            <select className="w-[160px] h-[48px] border border-gray-300 rounded-md">
              <option>Date</option>
            </select>
            <select className="w-[160px] h-[48px] border border-gray-300 rounded-md">
              <option>Time</option>
            </select>
          </div>
        </div>

        {/* Drop-Off Section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" />
            <label className="font-medium text-[14px] text-[#1A202C]">Drop-Off</label>
          </div>
          <div className="flex gap-4">
            <select className="w-[160px] h-[48px] border border-gray-300 rounded-md">
              <option>Location</option>
            </select>
            <select className="w-[160px] h-[48px] border border-gray-300 rounded-md">
              <option>Date</option>
            </select>
            <select className="w-[160px] h-[48px] border border-gray-300 rounded-md">
              <option>Time</option>
            </select>
          </div>
        </div>

        {/* Total Price Section */}
        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="font-bold text-[20px] text-[#1A202C]">Total Price</div>
            <div className="text-[14px] text-[#90A3BF]">Overall price and includes rental discount</div>
          </div>
          <div className="font-bold text-[32px] text-right text-[#1A202C]">$80.00</div>
        </div>
      </div>

      {/* Third section */}
      <div className="w-full md:w-[524px] flex flex-col gap-4">
        {/* First sub-section */}
        <div className="w-full h-auto bg-white rounded-[10px] mb-4">
          <PieChartComponent />
        </div>

        {/* Second sub-section */}
        <div className="w-full h-auto bg-white rounded-[10px] mt-4">
        <div className="w-full h-auto bg-white rounded-[10px] mt-4">
      {/* First row */}
      <div className="flex justify-between items-center px-6 pt-6">
        <div className="font-bold text-[20px] text-[#1A202C] tracking-[-0.03em]">
          Recent Transaction
        </div>
        <div className="font-medium text-[12px] text-[#3563E9]">
          View all
        </div>
      </div>

      {/* Second row with car details */}
      <div className="flex items-center gap-8 px-6 py-4">
        <Image src={"/suv.png"} alt="Car" width={132} height={72} className="rounded-[8px]" />
        <div className="flex flex-col gap-2">
          <div className="font-bold text-[24px] text-[#1A202C]">Koegnigsegg</div>
          <div className="text-[14px] text-[#3D5278]">Sport Car</div>
        </div>
        <div className="text-[14px] text-[#3D5278] text-right">#9761</div>
      </div>
      <div className="flex items-center gap-8 px-6 py-4">
        <Image src={"/car.png"} alt="Car" width={132} height={72} className="rounded-[8px]" />
        <div className="flex flex-col gap-2">
          <div className="font-bold text-[24px] text-[#1A202C]">CR - V</div>
          <div className="text-[14px] text-[#3D5278]">SUV</div>
        </div>
        <div className="text-[14px] text-[#3D5278] text-right">#9761</div>
      </div>
      <div className="flex items-center gap-8 px-6 py-4">
        <Image src={"/suv.png"} alt="Car" width={132} height={72} className="rounded-[8px]" />
        <div className="flex flex-col gap-2">
          <div className="font-bold text-[24px] text-[#1A202C]">MG ZX Exclusice</div>
          <div className="text-[14px] text-[#3D5278]">Hatchback</div>
        </div>
        <div className="text-[14px] text-[#3D5278] text-right">#9761</div>
      </div>
      <div className="flex items-center gap-8 px-6 py-4">
        <Image src={"/car.png"} alt="Car" width={132} height={72} className="rounded-[8px]" />
        <div className="flex flex-col gap-2">
          <div className="font-bold text-[24px] text-[#1A202C]">Nissan GT - R</div>
          <div className="text-[14px] text-[#3D5278]">Sport Car</div>
        </div>
        <div className="text-[14px] text-[#3D5278] text-right">#9761</div>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}
