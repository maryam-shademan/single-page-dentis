function contact() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* کارت 1 */}
          <div className="flex h-24 bg-white rounded-xl overflow-hidden shadow-lg items-center">
            <svg width={16} height={96} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 8 0 
       Q 4 4.8, 8 9.6 
       T 8 19.2 
       Q 4 24, 8 28.8 
       T 8 38.4 
       Q 4 43.2, 8 48 
       T 8 57.6 
       Q 4 62.4, 8 67.2 
       T 8 76.8 
       Q 4 81.6, 8 86.4 
       T 8 96 
       L 0 96 
       L 0 0 
       Z"
                fill="#007bff"
                stroke="#007bff"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>

            <div className="mx-2.5 overflow-hidden w-full">
              <p className="mt-1.5 text-xl font-bold text-[#007bff] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                آدرس ما
              </p>
              <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                تهران
                <br />
                The post has been published.
              </p>
            </div>
            <button className="w-16 cursor-pointer focus:outline-none">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M19.7165 20.3624C21.143 19.5846 22 18.5873 22 17.5C22 16.3475 21.0372 15.2961 19.4537 14.5C17.6226 13.5794 14.9617 13 12 13C9.03833 13 6.37738 13.5794 4.54631 14.5C2.96285 15.2961 2 16.3475 2 17.5C2 18.6525 2.96285 19.7039 4.54631 20.5C6.37738 21.4206 9.03833 22 12 22C15.1066 22 17.8823 21.3625 19.7165 20.3624Z" fill="#0b2d9d"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" fill="#0b2d9d"></path> </g></svg>
            </button>
          </div>

          {/* کارت 2 */}
          <div className="flex h-24 bg-white rounded-xl overflow-hidden shadow-lg items-center">
            <svg width={16} height={96} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 8 0 
       Q 4 4.8, 8 9.6 
       T 8 19.2 
       Q 4 24, 8 28.8 
       T 8 38.4 
       Q 4 43.2, 8 48 
       T 8 57.6 
       Q 4 62.4, 8 67.2 
       T 8 76.8 
       Q 4 81.6, 8 86.4 
       T 8 96 
       L 0 96 
       L 0 0 
       Z"
                fill="#007bff"
                stroke="#007bff"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>

            <div className="mx-2.5 overflow-hidden w-full">
              <p className="mt-1.5 text-xl font-bold text-[#007bff] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                شماره ما
              </p>
              <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                +98967676576
                <br />

                0715676645
              </p>
            </div>
            <button className="w-16 cursor-pointer focus:outline-none">
              <svg viewBox="0 0 1024 1024" className="icon mx-1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M213.3 426.7c-94.1 0-170.7-76.6-170.7-170.7S119.2 85.3 213.3 85.3 384 161.9 384 256s-76.6 170.7-170.7 170.7z m0-256c-47.1 0-85.3 38.3-85.3 85.3s38.3 85.3 85.3 85.3 85.3-38.3 85.3-85.3-38.2-85.3-85.3-85.3zM768 981.3c-94.1 0-170.7-76.6-170.7-170.7S673.9 640 768 640s170.7 76.6 170.7 170.7S862.1 981.3 768 981.3z m0-256c-47.1 0-85.3 38.3-85.3 85.3 0 47.1 38.3 85.3 85.3 85.3s85.3-38.3 85.3-85.3-38.2-85.3-85.3-85.3z" fill="#3688FF"></path><path d="M746.7 981.3c-236 0-656.7-416.9-703.4-697-3.9-23.2 11.8-45.2 35.1-49.1 23.4-3.9 45.2 11.8 49.1 35.1C166.4 504.2 554.1 896 746.7 896c23.6 0 42.7 19.1 42.7 42.7s-19.2 42.6-42.7 42.6z" fill="#3688FF"></path><path d="M781.8 543.2c-14.1 0-27.9-7-36.1-19.8-60.1-94.8-141.6-177.3-235.7-238.6-19.7-12.9-25.3-39.3-12.4-59 12.9-19.7 39.3-25.3 59.1-12.4 104.2 67.9 194.5 159.3 261.1 264.4 12.6 19.9 6.7 46.3-13.2 58.9-7.1 4.4-15 6.5-22.8 6.5zM945.2 485.7c-14.7 0-29-7.6-36.9-21.2-81.8-140.8-199-259.2-338.9-342.5-20.2-12.1-26.9-38.2-14.8-58.5 12-20.2 38.2-26.9 58.5-14.8 152.4 90.7 280 219.7 369 372.9 11.8 20.4 4.9 46.5-15.5 58.3-6.7 4-14.1 5.8-21.4 5.8z" fill="#5F6379"></path></g></svg>
            </button>
          </div>

          {/* کارت 3 */}
          <div className="flex h-24 bg-white rounded-xl overflow-hidden shadow-lg items-center">
            <svg width={16} height={96} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 8 0 
       Q 4 4.8, 8 9.6 
       T 8 19.2 
       Q 4 24, 8 28.8 
       T 8 38.4 
       Q 4 43.2, 8 48 
       T 8 57.6 
       Q 4 62.4, 8 67.2 
       T 8 76.8 
       Q 4 81.6, 8 86.4 
       T 8 96 
       L 0 96 
       L 0 0 
       Z"
                fill="#007bff"
                stroke="#007bff"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>

            <div className="mx-2.5 overflow-hidden w-full">
              <p className="mt-1.5 text-xl font-bold text-[#007bff] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                ایمیل ما
              </p>
              <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
                kjhfkjhdsk@gmail.com

              </p>
            </div>
            <button className="w-16 cursor-pointer focus:outline-none">
              <svg viewBox="0 -0.5 1025 1025" className="icon mx-1" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M509.3 606.2c-27.9 0-55.6-9-78.7-26.9L36.4 245.7c-18-15.2-20.2-42.2-5-60.1 15.2-18 42.2-20.2 60.1-5L484.3 513c14.4 11.1 36.5 11.1 52.4-1.2l396.2-331.4c18.1-15.1 45-12.8 60.1 5.4 15.1 18.1 12.7 45-5.4 60.1L590.1 578.3c-24.1 18.7-52.6 27.9-80.8 27.9z" fill="#5F6379"></path><path d="M894.8 938.6H129.4c-71.3 0-129.4-58-129.4-129.4v-552c0-71.3 58-129.4 129.4-129.4h765.4c71.3 0 129.4 58 129.4 129.4v552.1c0 71.3-58.1 129.3-129.4 129.3zM129.4 213.2c-24.3 0-44 19.8-44 44v552.1c0 24.3 19.8 44 44 44h765.4c24.3 0 44-19.8 44-44V257.2c0-24.3-19.8-44-44-44H129.4z" fill="#3688FF"></path></g></svg>
            </button>
          </div>
        </div>
      </div>




      <section className="items-center justify-center flex mb-9 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
        <section className="flex items-center justify-center mb-9 bg-white px-2">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-full w-full max-w-4xl flex justify-center items-center">
            <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8 w-full p-6">
              <div className="group overflow-hidden relative flex justify-center items-center h-auto w-full bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8 p-6">
                <div className="z-10 flex flex-col items-center gap-4 w-full">
                  <input
                    type="text"
                    placeholder="شماره تماس"
                    className="input bg-slate-200 text-slate-950 input-bordered input-info w-full max-w-lg"
                  />
                  <input
                    type="text"
                    placeholder="ایمیل"
                    className="input bg-slate-200 text-slate-950 input-bordered input-info w-full max-w-lg"
                  />
                  <input
                    type="text"
                    placeholder="متن موردنظر"
                    className="input bg-slate-200 text-slate-950 input-bordered input-info w-full max-w-lg"
                  />
                  <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-800 rounded-md group">
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-blue-600" />
                    </span>
                    <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700  rounded group-hover:-ml-4 group-hover:-mb-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-blue-600" />
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-blue-700 rounded-md group-hover:translate-x-0" />
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      مطالعه بیشتر
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">نقشه ما</h2>
            <div className="relative w-full h-96 rounded-lg overflow-hidden border border-gray-300">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.635710614284!2d51.3889733154327!3d35.68919818019206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e013088f3b4df%3A0x45b2c7a1e0a1b72d!2sTehran!5e0!3m2!1sen!2sir!4v1673435453674!5m2!1sen!2sir"

                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

      </section>
    </>

  );
}

export default contact;