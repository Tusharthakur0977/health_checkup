import Image from "next/image";
import React from "react";

const MainBlocks = () => {
  return (
    <section className="relative">
      <div className="relative bg-[#EAEAEA] p-10 flex-col-reverse gap-5 lg:flex-row flex max-w-[100%] sm:max-w-[60%] mx-auto sm:p-12 rounded-md shadow-xl">
        <div className="md:7/12 lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Free Home sample collection and Report in whatsapp in 24 hours
          </h2>
          <p className="my-8 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            accusamus, quod optio sequi fugiat minus? Laudantium magnam ullam,
            ea fugiat quisquam adipisci at incidunt? Ad vitae hic cum?
            Necessitatibus, reiciendis?
          </p>
        </div>
        <div className="md:5/12 lg:w-1/3">
          <Image src="/images/img8.jpg" alt="image" width={400} height={400} />
        </div>
      </div>
      <div className="relative bg-gray-900 p-10 my-16 flex-col-reverse gap-5 lg:flex-row-reverse flex max-w-[100%] sm:max-w-[70%] mx-auto sm:p-12 rounded-md shadow-xl">
        <div className="md:w-7/12 lg:w-2/3">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            India&apos;s fastest Growing Pathology Labs Network (ISO, NABL, CAP
            Certified Labs)
          </h2>
          <p className="my-8 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            accusamus, quod optio sequi fugiat minus? Laudantium magnam ullam,
            ea fugiat quisquam adipisci at incidunt? Ad vitae hic cum?
            Necessitatibus, reiciendis?
          </p>
        </div>
        <div className="md:5/12 lg:w-1/3">
          <Image src="/images/img8.jpg" alt="image" width={500} height={500} />
        </div>
      </div>
      <div className="relative bg-[#EAEAEA] p-10 mb-10 flex-col-reverse gap-5 lg:flex-row flex max-w-[100%] sm:max-w-[60%] mx-auto sm:p-12 rounded-md shadow-xl">
        <div className="md:7/12 lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Free Home sample collection and Report in whatsapp in 24 hours
          </h2>
          <p className="my-8 text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            accusamus, quod optio sequi fugiat minus? Laudantium magnam ullam,
            ea fugiat quisquam adipisci at incidunt? Ad vitae hic cum?
            Necessitatibus, reiciendis?
          </p>
        </div>
        <div className="md:5/12 lg:w-1/3">
          <Image src="/images/img8.jpg" alt="image" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default MainBlocks;
