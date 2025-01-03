import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "دنتیس کلینک",
  description: "کلینک رزرو دندان پزشکی",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex w-full h-24 z-50 shadow-lg py-4 px-4 sm:px-10  bg-blue-300/80 gap-0 group overflow-hidden relative backdrop-blur-lg font-[sans-serif] min-h-[70px] tracking-wide sticky top-0 transition-all duration-300 ease-in-out">
          {/* جلوه‌های پس‌زمینه */}
          <div className="absolute w-24 h-24 bg-sky-700 rounded-full blur-xl bottom-16  transition-transform duration-500 group-hover:translate-x-24"></div>
          <div className="absolute w-12 h-12 bg-sky-400 rounded-full blur-xl top-10 right-16 transition-transform duration-500 group-hover:translate-y-12 group-hover:-translate-x-32"></div>

          {/* لوگو */}
          <a href="javascript:void(0)" className="flex items-center">
            <img
              src=""
              alt="logo"
              className="w-24 sm:w-32"
            />
          </a>

          {/* لینک‌ها */}
          <nav className="flex gap-8 justify-center items-center mx-auto">
            {["صفحه اصلی", "رزرو", "درباره ما", "تماس باما", "بلاگ"].map((link, index) => (
              <a
                key={index}
                href="javascript:void(0)"
                className="relative text-[#333] font-semibold text-[15px] hover:text-[#ffffff] transition-all duration-300"
              >
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ffffff] transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </nav>
          
        </header>




        <main className="bg-white">{children}</main>
        <footer className="w-full bg-blue-500">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/*Grid*/}
            <div className="py-10 flex justify-between items-center flex-col gap-8 lg:flex-row">
              <img
                src="/img/photo_2024-11-15_19-16-56-removebg-preview.png"
                className="w-22 h-16"
                alt="حیدری"
              />

              <ul className=" text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-12 transition-all duration-500">
                <li>
                  <a href="javascript:;" className="text-white hover:text-gray-400">
                    تماس باما
                  </a>
                </li>
                <li className="sm:my-0 my-2">
                  <a href="javascript:;" className="text-white hover:text-gray-400">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="text-white hover:text-gray-400">
                    خدمات ما
                  </a>
                </li>
                <li className="sm:my-0 my-2">
                  <a href="javascript:;" className="text-white hover:text-gray-400">
                    رزرو
                  </a>
                </li>
                <li>
                  <a href="javascript:;" className="text-white hover:text-gray-400">
                    صفحه اصلی
                  </a>
                </li>
              </ul>
              <div className="flex  space-x-4 sm:justify-center  ">
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"  // اضافه کردن rel برای امنیت بیشتر
                    className="flex items-center px-2 py-1 text-white bg-gradient-to-r from-pink-500 to-rose-800 rounded transition duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" className="svgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    <span className="text">Instagram</span>
                  </a>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    className="flex items-center px-2 py-1 text-white bg-blue-800 rounded hover:opacity-80"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.25 3.36 9.69 7.94 11.24.58.1.79-.25.79-.56v-2.22c-3.18.69-3.87-1.53-3.87-1.53-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.94.1-.74.4-1.24.73-1.53-2.41-.28-4.95-1.21-4.95-5.39 0-1.19.43-2.15 1.13-2.9-.11-.28-.49-1.42.11-2.95 0 0 .91-.29 2.97 1.1a10.415 10.415 0 0 1 2.7-.36c.92.004 1.84.12 2.7.36 2.06-1.39 2.97-1.1 2.97-1.1.6 1.53.23 2.67.11 2.95.7.75 1.13 1.71 1.13 2.9 0 4.2-2.54 5.11-4.95 5.39.41.36.78 1.06.78 2.14v3.16c0 .32.21.67.79.56A12.51 12.51 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                    </svg>
                    گیت‌هاب
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="flex items-center px-2 py-1 text-white bg-blue-600 rounded hover:opacity-80"
                  >
                    <>
                      <svg
                        viewBox="0 0 16 16"
                        height={16}
                        width={16}
                        xmlns="http://www.w3.org/2000/svg"
                        className="svgIcon"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>
                      <span className="text">LinkedIn</span>
                    </>

                  </a>
                </div>

              </div>
            </div>
            {/*Grid*/}
            <div className="py-7 border-t border-blue-600">
              <div className="flex items-center justify-center">
                <span className="text-gray-100 ml-0 lg:mr-52">
                  ©<a href="img/dociai.png ">تمامی حقوق </a>2024, مربوط به سایت رزرواسیون پزشکی اقای حیدری است
                </span>
              </div>
            </div>
          </div>
        </footer>


      </body>
    </html >
  );
}
