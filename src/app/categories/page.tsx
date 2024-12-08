'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Categories() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[20%]">
      <div className="w-[360px] h-full border-r-[1px] border-gray-300 flex flex-col p-4 overflow-y-auto gap-2">
  {/* Title Section */}
  <div className="w-[104px] h-[20px] mb-4">
    <p className="font-semibold text-[12px] leading-[15.12px] tracking-[-2%] text-[#90A3BF]">
      Type
    </p>
  </div>

  {/* Checkboxes Section */}
  <div className="flex flex-col gap-4">
    {/* Individual Checkbox with Name Styling */}
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        Sport Car (10)
      </span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        SUV (12)
      </span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        Coupe (16)
      </span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        Hatchback (20)
      </span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        Sedan (14)
      </span>
    </label>
  </div>
 {/* Title Section */}
 <div className="w-[104px] h-[20px] mb-4">
    <p className="font-semibold text-[12px] leading-[15.12px] tracking-[-2%] text-[#90A3BF]">
      Capacity
    </p>
  </div>

  {/* Checkboxes Section */}
  <div className="flex flex-col gap-4">
    {/* Individual Checkbox with Name Styling */}
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        2 Persons (10)
      </span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        4 Persons (12)
      </span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        6 Persons (16)
      </span>
    </label>
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox" />
      <span className="font-semibold text-[20px] leading-[30px] tracking-[-2%] text-[#90A3BF]">
        8 or more (14)
      </span>
    </label>
  </div>

  {/* Scrollbar progress bar */}
  <div className="relative mt-4 h-[4px] bg-gray-200 rounded-full">
    <div className="absolute top-0 left-0 h-full bg-[#3563E9] rounded-full" style={{ width: '50%' }}></div>
  </div>
</div>

      </div>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <section className="w-full flex flex-wrap lg:flex-nowrap items-center justify-evenly sm:justify-between gap-4 sm:gap-0">
         {/* Pick-Up Section */}
         <div className="mb-4 bg-white h-[132px]">
          <div className="flex items-center gap-2 mb-2 ">
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
        <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" />
        {/* Drop-Off Section */}
        <div className="mb-4 bg-white h-[132px]">
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
      </section>

        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Koenigsegg', image: '/car.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/car (1).png', desc: 'Luxury' },
              { title: 'Rolls-Royce', image: '/suv.png', desc: 'Sport' },
              { title: 'All New Rush', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'CR - V', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'ALLNEW TERIOS', image: '/suv.png', desc: 'SUV' },
              { title: 'MGZX Exclusive', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'NEW MGZS', image: '/suv.png', desc: 'SUV' },
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={220} height={68} />
                  <Image src={"/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                  <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'MG ZX Exclusive', image: '/suv.png', desc: 'SUV' },
                { title: 'NEW MG ZS', image: '/suv (4).png', desc: 'Sedan' },
                { title: 'New MG ZX Excite', image: '/suv.png', desc: 'Sport' },
                { title: 'NEW MG ZS', image: '/suv (4).png', desc: 'Sedan' },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={220} height={68} />
                    <Image src={"/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                    <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section className="button w-full text-center">
          <button 
            onClick={toggleShowMore} 
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}

