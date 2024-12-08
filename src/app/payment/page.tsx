import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Payment() {
  return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6  flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6 order-2 lg:order-1">
        <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">Name</label>
                <Input placeholder="Your Name" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">Phone Number</label>
                <Input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Address</label>
                <Input placeholder="Your Address" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Town/City</label>
                <Input placeholder="Your City" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
          </CardContent>
        </Card>

    
        <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2">
            <input type="radio" />
            <label className="font-medium text-[14px] text-[#1A202C]">Pick-Up</label>
          </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
            <input type="radio" />
            <label className="font-medium text-[14px] text-[#1A202C]">Drop-Off</label>
          </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your payment method</h1>
              <h1>Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <Image src={"/Credit Card.png"} alt="Credit Card" width={804} height={308} />
            <Image src={"/PayPal.png"} alt="PayPal" width={804} height={56} />
            <Image src={"/Bitcoin.png"} alt="Bitcoin" width={804} height={56} />
          </CardContent>
        </Card>

      
        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>We are getting to the end. Just a few clicks and your rental is ready</h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <Image src={"/Confirmation.png"} alt="Confirmation" width={804} height={136} />
            <Link href={'/admin'}>
            <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
              Rent Now
            </button></Link>
            
            <Image src={"/Safe Data.png"} alt="Safe Data" width={548} height={100} />
          </CardContent>
        </Card>
      </div>
      <div className="details w-full flex-shrink-0 lg:w-[40%] order-1 lg:order-2 flex justify-center mt-8 lg:mt-0">
  {/* Car Image and Details */}
  <div className="flex flex-col  gap-8 mb-4 p-4 rounded-lg shadow-lg bg-white w-full max-w-[492px] lg:max-w-[492px] lg:w-[492px] md:h-[560px] h-[424px] mt-[32px] lg:mt-[0px] lg:left-[916px] lg:top-[32px]">
    <h1 className="text-center font-bold text-[24px] text-[#1A202C]">Rental Summary</h1>
    <p className="text-center text-[#3D5278] mt-2">Prices may change depending on the length of the rental and the price of your rental car.</p>

    <div className="relative flex gap-2">
      {/* Car Image */}
      <Image
        src="/View 1.png"
        alt="Car"
        width={116}
        height={36}
        className="rounded-[8px]"
      />
      {/* Car Details */}
      <div className="flex flex-col  gap-2 mt-[36px]">
        <div className="font-bold text-[32px] text-[#1A202C] tracking-[-0.3px]">Nissan GT - R</div>
        <div className="stars mt-2">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-400">&#9733;</span> // star icon
          ))}
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="font-bold text-[14px] text-[#1A202C]">Sub Total</div>
      <div className="font-bold text-[14px] text-right text-[#1A202C]">$80.00</div>
    </div>
    <div className="flex justify-between items-center">
      <div className="font-bold text-[14px] text-[#1A202C]">Tax</div>
      <div className="font-bold text-[14px] text-right text-[#1A202C]">$0.00</div>
    </div>
    <div className=" flex justify-between bg-[#F6F7F9] p-2">
        <p className="text-[#90A3BF]">
          Apply Promo Code
        </p>
        <p className="text-[#1A202C]">
          Apply Now
        </p>
      </div>

    <div className="flex justify-between items-center">
      <div>
        <div className="font-bold text-[20px] text-[#1A202C]">Total Price</div>
        <div className="text-[14px] text-[#90A3BF]">Overall price and includes rental discount</div>
      </div>
      <div className="font-bold text-[32px] text-right text-[#1A202C]">$80.00</div>
    </div>

    
  </div>
</div>

    </div>
  );
}



