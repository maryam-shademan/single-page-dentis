export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative w-full min-h-screen flex items-center bg-gray-900 text-white overflow-hidden b"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: 'url("/img/عکس وبلاگ 2.jpeg")' }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8">

            <div className="xl:w-1/2 text-center xl:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
                کلینیک دندان پزشکی حیدری
              </h1>
              <figure>
                <blockquote
                  className="text-lg md:text-xl text-gray-300 mb-8 border-l-4 border-blue-500 pl-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <p> به کلینیک دندان‌پزشکی حیدری خوش آمدید! با بهره‌گیری از پیشرفته‌ترین تکنولوژی‌های روز دنیا و تیمی مجرب، خدمات جامع دندان‌پزشکی شامل زیبایی، ترمیمی، ارتودنسی و ایمپلنت را ارائه می‌دهیم. هدف ما ایجاد لبخندی سالم و جذاب برای شماست. همین امروز وقت مشاوره خود را رزرو کنید و اولین گام را به سوی سلامت دهان و دندان بردارید.</p>
                </blockquote>
              </figure>
              <div
                className="flex flex-col md:flex-row gap-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <a
                  href="#about"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transition-all"
                >
                  شروع کنید
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="flex items-center text-blue-400 hover:text-blue-500 gap-2"
                >
                  <i className="bi bi-play-circle text-2xl" />
                  <span className="font-medium">دیدن ویدیو</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 items-center justify-center flex">
        <div className="relative shine text-4xl font-bold text-transparent bg-clip-text borer-gradient-to-r from-blue-500 to-purple-600 animate-shine">
        لبخندی زیبا،هدیه‌ای برای زندگی


        </div>

      </section>
      <section>
        {/* قسمت گرفتن رزو*/}


        <>
          {/* Centered Button with Blue Gradient */}
          <div className="flex items-center justify-center px-7 bg-gradient-to-r bg-white mt-8">
            <button className="group relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-30 blur-lg transition-all duration-500 group-hover:opacity-70 group-hover:blur-xl" />
              <div className="relative rounded-lg border border-white/10 bg-gradient-to-b bg-slate-300 px-8 py-4 shadow-xl">
                <div className="absolute inset-x-0 top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-blue-500/20 border-t-blue-500 transition-transform duration-1000 group-hover:rotate-180" />
                      <div className="absolute inset-[3px] rounded-full bg-gray-950" />
                      <span className="relative text-sm font-bold text-blue-500">
                        کلیک کن
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-neutral-900">همین الان رزرو کن یا اطلاعاتت واردکن تا بهترین وقت باهات هماهنگ کنیم</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                      </div>
                      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-gray-800">
                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">


                  </div>
                </div>
              </div>
            </button>
          </div>
        </>
        <div className="flex items-center justify-center mt-6">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center bg-white">
            <>
              <div className="">
                <input
                  type="text"
                  className="relative bg-gray-50 ring-0 outline-none border border-blue-700 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                  placeholder="نام ونام خانوادگی"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="relative bg-gray-50 ring-0 outline-none border border-blue-700 text-neutral-900 placeholder-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                  placeholder="شماره تماس"
                />
              </div>

              <div className="relative group rounded-lg w-64 bg-blue-600 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-blue-700 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#2C3E50]">
                <svg
                  y={0}
                  xmlns="http://www.w3.org/2000/svg"
                  x={0}
                  width={100}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  height={100}
                  className="w-8 h-8 absolute right-0 -rotate-45 stroke-blue-400 top-1.5 group-hover:rotate-0 duration-300"
                >
                  <path
                    strokeWidth={4}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                    className="svg-stroke-primary"
                  />
                </svg>
                <select className="appearance-none hover:placeholder-shown:bg-emerald-500 relative text-blue-400 bg-transparent ring-0 outline-none border border-blue-700 text-neutral-900 placeholder-blue-500 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option className="bg-blue-600"> ساعت 8-10</option>
                  <option className="bg-blue-600"> ساعت 10-12</option>
                  <option className="bg-blue-600"> ساعت 12-14</option>
                  <option className="bg-blue-600"> ساعت 14-16</option>
                  <option className="bg-blue-600"> ساعت 16-18</option>
                  <option className="bg-blue-600"> ساعت 18-20</option>
                </select>
              </div>
            </>
          </div>
        </div>

      </section >


      {/*راه های ارتباطی*/}

      <div className="container mx-auto text-center mt-8 mb-14" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800">خدمات ما</h2>
        <></>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center bg-white ">
        {/* کارت تماس با من */}
        <div className="relative group overflow-hidden rounded-2xl bg-white shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
          <>
            <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="outline-blue-400  text-6xl font-bold"> ارتودنسی</span>
                  <p className="text-gray-200 text-sm">با روش ها نویین وخاص مخصوص کلینیک ما</p>

                </div>
              </div>
            </div>
          </>

        </div>
        {/* کارت آدرس */}
        <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
          <>
            <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="outline-blue-400  text-6xl font-bold"> عصب کشی</span>
                  <p className="text-gray-200 text-sm">با روش ها نویین وخاص مخصوص کلینیک ما</p>

                </div>
              </div>
            </div>
          </>

        </div>
        <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
          <>
            <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="outline-blue-400  text-6xl font-bold">پرکردن دندان </span>
                  <p className="text-gray-200 text-sm">با روش ها نویین وخاص مخصوص کلینیک ما</p>

                </div>
              </div>
            </div>
          </>

        </div>
        <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-light-blue-500 to-deep-blue-600 h-56 w-80 flex justify-center items-center">
          <>
            <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-blue-400 -outline-offset-8">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-blue-600 rounded-2xl outline outline-cyan-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="outline-blue-400  text-6xl font-bold">لمینت وپروتز</span>
                  <p className="text-gray-200 text-sm">با روش ها نویین وخاص مخصوص کلینیک ما</p>

                </div>
              </div>
            </div>
          </>

        </div>

      </div>


      {/* Recent Posts Section */}
      <section id="recent-posts" className="py-12 bg-gray-100">

        <div className="container mx-auto text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">پست‌های اخیر وبلاگ</h2>
          <>

            <button
              className="bg-white mt-2 text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
              type="button"
            >
              <div className="bg-blue-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="25px"
                  width="25px"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#000000"
                  />
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="translate-x-2 mt-4">دیدن مطالب بیشتر ما</p>
            </button>
          </>

        </div>
        {/* End Section Title */}
        <div className="container mx-auto px-4 items-center justify-center flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Post 1 */}
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 28شهریور403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  درمان‌های پیشرفته دندانپزشکی
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  تجربه‌ای بدون درد با تکنولوژی‌های روز دنیا. سلامت دهان و دندان خود را به ما بسپارید.             </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>

            <div className="relative flex mt-4 w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 24شهریور403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  طراحی لبخند ایده‌آل
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  با خدمات حرفه‌ای زیبایی دندان، لبخندی درخشان و طبیعی داشته باشید. متخصصان ما همراه شما هستند.                </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
            <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 12 آبان 403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  ارتودنسی برای همه سنین
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  با روش‌های نوین ارتودنسی، زیبایی و تراز دندان‌های خود را تضمین کنید. مشاوره رایگان!              </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
            <div className="relative flex w-80 mt-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                  src="/img/عکس وبلاگ.jpg"
                  className="w-full h-48 object-cover"
                  alt=""
                /></div>
              <div className="post-content p-4">
                <div className="meta text-sm text-gray-500 mb-2">
                  <span className="post-date">جمعه، 24شهریور403</span>
                  <span className="post-author"> / ادمین</span>
                </div>
                <h3 className="post-title text-lg font-semibold text-gray-800 mb-2">
                  خدمات اورژانسی دندانپزشکی
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  در مواقع اضطراری، کنار شما هستیم. ارائه خدمات فوری برای دردهای دندان و لثه.           </p>
                <>
                  <div className="items-center justify-center flex">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-cyan-500 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-cyan-600 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-600 rounded-md group-hover:translate-x-0" />
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        مطالعه بیشتر
                      </span>
                    </button>
                  </div>
                </>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
