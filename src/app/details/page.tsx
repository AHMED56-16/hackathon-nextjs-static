import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Details() {
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
      
      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=' w-full flex flex-col md:flex-row gap-5  items-center justify-around'>
            <div className='first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]'>
                <div>
                    <Image src={'/View.png'} alt='' width={492} height={360}/>

                </div>
                <div className=' flex items-center justify-between gap-2 lg:gap-0'>
                <Image src={'/View 1.png'} alt='' width={148} height={124}/>
                <Image src={'/View 2.png'} alt='' width={148} height={124}/>
                <Image src={'/View 3.png'} alt='' width={148} height={124}/>
                </div>
            </div>
            <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
  <Image
    src={"/Detail Car (1).png"}
    alt="Detail Car"
    width={492}
    height={392}
    className="w-full h-auto rounded-t-xl object-cover"
  />

  <div className="p-4 flex  items-center gap-4">
    <div className="flex items-center justify-between w-full">
      <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
        $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
      </h1>
    </div>
    <Link href={"/payment"}>
      <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
        Rent Now
      </button>
    </Link>
  </div>
</div>
        </section>

    <section className="customer-reviews">
      <h1 className="text-gray-500 text-lg sm:text-xl mb-4">Customer Reviews</h1>
      
      <div className="review mb-4">
        <Image src="/Profile1.png" width={56} height={56} alt="John Doe" />
        <p className="text-gray-700 text-sm mt-2">"I had an amazing experience with this service. Highly recommended!"</p>
        <p className="text-gray-500 text-sm">- John Doe</p>
        <div className="stars mt-2">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-400">&#9733;</span> // star icon
          ))}
        </div>
      </div>

      <div className="review mt-4">
        <Image src="/Profile2.png" width={56} height={56} alt="Jane Smith" />
        <p className="text-gray-700 text-sm mt-2">"Great service! The team was very helpful and the car was perfect."</p>
        <p className="text-gray-500 text-sm">- Jane Smith</p>
        <div className="stars mt-2">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-400">&#9733;</span> // star icon
          ))}
        </div>
      </div>

      <button className="mt-4 text-blue-500 hover:underline">Show More</button>
    </section>
 

        <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

         
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (1).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}><button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="popular w-full flex flex-col gap-5">
        <div className="first w-full flex items-center justify-between px-10 xl:px-14">
          <h1 className="text-gray-500 text-lg sm:text-xl">Recomendation Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
        
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

        </div>
      </section>
      </div>
    </div>
  )
}
