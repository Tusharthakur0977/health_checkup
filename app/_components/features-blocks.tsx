import Image from "next/image";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="relative max-w-[100%] sm:max-w-[70%] px-10 mx-auto sm:px-36 bg-gray-900 my-20 ">
        <div className="py-12 w-full md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl text-white font-bold">
              Helping Make India Healthy Since 40 Years
            </h2>
            {/* <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p> */}
          </div>

          {/* Items */}
          <div className="max-w-full sm:max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image
                src={"/images/img2.jpg"}
                className="p-1 -mt-1 mb-2"
                alt=""
                width={200}
                height={100}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Free Home Sample Collection
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                maxime?
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image
                src={"/images/discount.png"}
                className="p-1 -mt-1 mb-2"
                alt=""
                width={140}
                height={100}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Up to 60% Discount on all test
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image
                src={"/images/test.png"}
                className="p-1 -mt-1 mb-2"
                alt=""
                width={140}
                height={100}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                300+ Test Available
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <Image
                src={"/images/certified.png"}
                className="p-1 -mt-1 mb-2"
                alt=""
                width={140}
                height={100}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Certified Lebas
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
