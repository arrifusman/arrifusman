import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const index = () => {
  return (
    <>
      <main className="dark:bg-gray-800 font-mono bg-white lg:h-screen">
        <header className="h-24 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between w-full">
            <div className="text-gray-800 dark:text-white font-black text-3xl md:flex items-center hidden">
              <Link to="mailto:samuarrif@gmail.com" target="_blank">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 1792 1792"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
                </svg>
              </Link>
              <span className="text-xs ml-3 mt-1">samuarrif[at]gmail.com</span>
            </div>
            <div className="flex items-center mx-auto md:mx-0">
              <section className="font-sen text-gray-800 text-lg lg:flex items-center">
                <ul className="flex gap-6 items-center fill-current">
                  <li>
                    <Link to="https://twitter.com/sams_panda">
                      <svg viewBox="0 0 310 310" className="w-5">
                        <path
                          id="XMLID_827_"
                          d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73   c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783   c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598   C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467   c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977   c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889   c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597   c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961   c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895   c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367   c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998   C307.394,57.037,305.009,56.486,302.973,57.388z"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/panda-67">
                      <svg viewBox="0 0 16 16" className=" w-5">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://id.linkedin.com/in/samsul-muarrif">
                      <svg
                        className="w-5"
                        x="0px"
                        y="0px"
                        viewBox="0 0 455 455"
                      >
                        <path d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z" />
                        <path d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z    M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087   c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345   c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537   c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002   z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/Sams_67/">
                      <svg
                        className="w-5"
                        x="0px"
                        y="0px"
                        viewBox="0 0 551.034 551.034"
                      >
                        <path d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722   c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156   C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156   c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722   c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z" />
                        <path d="M275.517,133C196.933,133,133,196.933,133,275.516   s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6   c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083   C362.6,323.611,323.611,362.6,275.517,362.6z" />
                        <circle cx="418.306" cy="134.072" r="34.149" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </section>
              {/* <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button> */}
            </div>
          </div>
        </header>
        <div className="flex items-center h-max">
          <div className="container mx-auto px-6 flex flex-col justify-between items-center pb-4">
            <div className="flex flex-col">
              <Link to="/" className="mx-auto">
                <StaticImage
                  src="../images/socbuzz.jpg"
                  alt="A dinosaur"
                  className="rounded-full w-28 md:w-44 mx-auto"
                />
              </Link>
              <p className="md:text-3xl my-6 text-green-500 text-center dark:text-white">
                Hi, I&#x27;m <Link to="https://samsulmuarrif.me" className=" underline underline-offset-8 hover:text-sky-500">Samsul Muarrif</Link>
              </p>
              <h4 className="max-w-3xl lg:text-2xl mx-auto dark:text-white text-zinc-600 text-center py-2">
                Building digital products, brands, and experiences.
              </h4>
              <h5 className="mx-auto lg:text-base dark:text-white text-zinc-500">
                Aceh, Indonesia
              </h5>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="capitalize py-2 mb-4 px-4 mt-6 bg-orange-500 rounded-full dark:bg-white text-zinc-50 dark:text-white">
                  Connect with me
                </div>
                <div className="flex gap-4">
                  <Link
                    to="mailto:samuarrif@gmail.com"
                    target="_blank"
                    className="flex gap-2 hover:text-sky-500"
                  >
                    <svg
                      className="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="52 42 88 66"
                    >
                      <path
                        fill="#4285f4"
                        d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
                      />
                      <path
                        fill="#34a853"
                        d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
                      />
                      <path
                        fill="#fbbc04"
                        d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                      />
                      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                      <path
                        fill="#c5221f"
                        d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                      />
                    </svg>
                    Gmail
                  </Link>
                  <Link
                    to="https://wa.me/6285159606776?text=Hello+Samsul+Muarrif"
                    target="_blank"
                    className="flex gap-2 hover:text-sky-500"
                  >
                    <svg className="w-5" viewBox="0 0 512 512">
                      <rect width="512" height="512" rx="15%" fill="#25d366" />
                      <path
                        fill="#25d366"
                        stroke="#fff"
                        stroke-width="26"
                        d="M123 393l14-65a138 138 0 1150 47z"
                      />
                      <path
                        fill="#fff"
                        d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                      />
                    </svg>
                    Whatsapp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <content>
        <div className="text-zinc-600 mx-auto max-w-xs md:max-w-2xl space-y-8 mt-4">
          <div>
            <h3>Languages</h3>
            <p className="text-sm md:text-base">
              HTML, CSS{" "}
              <Link
                className="hover:text-sky-400"
                to="https://tailwindcss.com/"
              >
                (Tailwindcss)
              </Link>
              , Javascript (
              <Link
                className="hover:text-sky-400"
                to="https://www.gatsbyjs.com/"
              >
                Gatsbyjs
              </Link>{" "}
              &{" "}
              <Link className="hover:text-sky-400" to="https://vuejs.org/">
                Vuejs
              </Link>
              ) , PHP{" "}
              <Link className="hover:text-sky-400" to="https://laravel.com/">
                (Laravel)
              </Link>
              , Phyton{" "}
              <Link
                className="hover:text-sky-400"
                to="https://www.djangoproject.com/"
              >
                (Django)
              </Link>{" "}
              .
            </p>
          </div>
          <div>
            <h3>Tools</h3>
            <ul className="flex flex-wrap items-center gap-4 text-sm md:text-base">
              <li>
                <Link className="flex gap-1" to="https://github.com">
                  <svg viewBox="0 0 16 16" className="w-5 fill-current">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>{" "}
                  Github
                </Link>
              </li>
              <li>
                <Link className="flex gap-1" to="https://www.heroku.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Heroku"
                    role="img"
                    viewBox="0 0 512 512"
                    fill="#409"
                    className="w-5"
                  >
                    <rect width="512" height="512" rx="15%" />
                    <path
                      d="M367 99H145c-22 0-30 8-30 30v254c0 22 8 30 30 30h222c22 0 30-8 30-30V129c0-22-9-30-30-30"
                      stroke="#fff"
                      stroke-width="16"
                    />
                    <path
                      fill="#fff"
                      d="M182 284c56-28 94-31 107-25 9 4 9 15 9 15v99h33V273s-1-32-27-44-62-1-88 6v-95h-34m124 54s22-22 25-54h-34c-5 29-25 54-25 54m-90 178l37-33-37-33"
                    />
                  </svg>
                  Heroku
                </Link>
              </li>
              <li>
                <Link
                  to="https://nodejs.org/"
                  className="flex gap-1 items-center"
                >
                  <StaticImage
                    src="../images/nodejs.svg"
                    className="w-[36px] mr-1"
                  />
                  Nodejs
                </Link>
              </li>
              <li>
                <Link
                  to="https://yarnpkg.com/"
                  className="flex gap-1 items-center"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="w-6 fill-sky-500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M28.208,24.409a10.493,10.493,0,0,0-3.959,1.822,23.743,23.743,0,0,1-5.835,2.642,1.632,1.632,0,0,1-.983.55A62.228,62.228,0,0,1,10.984,30c-1.163.009-1.876-.3-2.074-.776a1.573,1.573,0,0,1,.866-2.074,3.759,3.759,0,0,1-.514-.379c-.171-.171-.352-.514-.406-.388-.225.55-.343,1.894-.947,2.5-.83.839-2.4.559-3.328.072-1.019-.541.072-1.813.072-1.813a.73.73,0,0,1-.992-.343,4.847,4.847,0,0,1-.667-2.949,5.374,5.374,0,0,1,1.749-2.895,9.334,9.334,0,0,1,.658-4.4,10.445,10.445,0,0,1,3.165-3.661S6.628,10.747,7.35,8.817c.469-1.262.658-1.253.812-1.308a3.633,3.633,0,0,0,1.452-.857,5.265,5.265,0,0,1,4.41-1.7S15.2,1.4,16.277,2.09a18.349,18.349,0,0,1,1.533,2.886s1.281-.748,1.425-.469a11.334,11.334,0,0,1,.523,6.132,14.01,14.01,0,0,1-2.6,5.411c-.135.225,1.551.938,2.615,3.887.983,2.7.108,4.96.262,5.212.027.045.036.063.036.063s1.127.09,3.391-1.308A8.5,8.5,0,0,1,27.739,22.3a1.081,1.081,0,0,1,.469,2.11Z" />
                  </svg>
                  Yarn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Skills</h3>
            <ul className="text-sm md:text-base list-disc list-outside pl-4">
              <li>
                Frontend Development using HTML, CSS (Tailwindcss), JSX
                (Gatsbyjs) and Javascript (Vuejs).
              </li>
              <li>
                Backend Development using PHP (Laravel) & Phyton (Django).
              </li>
              <li>SSG using Gatsbyjs.</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3>Recent Project</h3>
            <div className="flex gap-4">
              <div className="my-1 p-2 text-xs font-semibold rounded-full bg-orange-400 w-max h-max">
                2022
              </div>
              <div className="space-y-4 my-1">
                <div>
                  <h5 className="font-semibold flex flex-col">
                    Open Journal Systems (Journal Jeumpa)
                    <Link
                      className="text-sm font-light hover:text-sky-500"
                      to="https://ejurnalunsam.id/index.php/jempa/index"
                      target="_blank"
                      noopener
                      noreferer
                    >
                      ejurnalunsam.id/index.php/jempa/index
                    </Link>
                  </h5>
                  <p className="text-sm md:text-base">
                    Sebuah aplikasi untuk mengelola jurnal-jurnal ilmiah secara
                    lebih rapi dan dengan alur kerja yang sudah terstruktur.
                    Aplikasi ini memudahkan penulis untuk mempublikasikan
                    jurnalnya dan juga memudahkan publisher dalam mengelola
                    jurnal. Aplikasi ini dibangun dengan menggunakan cms OJS
                    &nbsp;
                    <Link
                      className="hover:text-sky-500"
                      to="https://pkp.sfu.ca/ojs/"
                    >
                      (Open Journal Systems)
                    </Link>
                    .
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold flex flex-col">
                    Catalog App (Rids Blades)
                    <Link
                      className="text-sm font-light hover:text-sky-500"
                      to="https://ridsblades.com/"
                      target="_blank"
                      noopener
                      noreferer
                    >
                      ridsblades.com
                    </Link>
                  </h5>
                  <p className="text-sm md:text-base">
                    Sebuah aplikasi yang dapat menampilkan barang-barang
                    dagangan. Sehingga penjual atau pengusaha dapat memamerkan
                    barang dagangan secara lebih luas dan dapat menjangkau
                    pembeli lebih banyak.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold flex flex-col">
                    Personal Profil (Samsul Muarrif)
                    <Link
                      className="text-sm font-light hover:text-sky-500"
                      to="https://samsulmuarrif.me/"
                      target="_blank"
                      noopener
                      noreferer
                    >
                      samsulmuarrif.me
                    </Link>
                  </h5>
                  <p className="text-sm md:text-base">
                    Sebuah personal profil dan blog yang dapat menjadi sebagai
                    wadah <em>self branded</em> dan wadah untuk menyampaikan
                    inspirasi-isnpirasi serta berbagi ilmu.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="my-1 p-2 text-xs font-semibold rounded-full bg-orange-400 w-max h-max">
                2021
              </div>
              <div>
                <h5 className="font-semibold flex flex-col">
                  Catalog App (Octo Poin)
                  <Link
                    className="text-sm font-light hover:text-sky-500"
                    to="https://octopoin.com/"
                    target="_blank"
                    noopener
                    noreferer
                  >
                    octopoin.com
                  </Link>
                </h5>
                <p className="text-sm md:text-base">
                  Sebuah aplikasi yang dapat menampilkan barang-barang dagangan
                  dan juga terdapat <em>content management</em> untuk
                  menampilkan postingan. Sehingga penjual atau pengusaha dapat
                  memamerkan barang dagangan secara lebih luas dan dapat
                  menjangkau pembeli lebih banyak dan juga menampilkan{" "}
                  <em>insight</em>.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="my-1 p-2 text-xs font-semibold rounded-full bg-orange-400 w-max h-max">
                2020
              </div>
              <div>
                <h5 className="font-semibold flex flex-col">
                  Blog App (Perahu Media)
                  <Link
                    className="text-sm font-light hover:text-sky-500"
                    to="https://perahumedia.herokuapp.com/"
                    target="_blank"
                    noopener
                    noreferer
                  >
                    perahumedia.herokuapp.com
                  </Link>
                </h5>
                <p className="text-sm md:text-base">
                  Sebuah blog sederhana yang dibuat menggunakan Django
                  Framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </content>
      <footer className="h-28 flex items-end">
        <div className="flex justify-center w-full py-6 text-sm text-zinc-600">
          © 2022 Samsul Muarrif
        </div>
      </footer>
    </>
  )
}

export default index

export const Head = () => (
  <>
    <title>Portfolio | Samsul Muarrif</title>
    <meta
      name="description"
      content="Personal portfolio of Samsul Muarrif, S.Si"
    />
  </>
)
