import Image from "next/image";


export default function Home() {
  return (
    <>

      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="logo text-clifford text-2xl font-bold">
            <Image
              src="images/Concordian Logo - Final.svg"
              alt="logo"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
      </header>
      <main className="">
        {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
     
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

        <section className="bg-cover bg-hero-1 bg-center bg-green-50 w-screen h-screen">
          <div className=" bg-opacity-50 h-full flex items-center justify-center">
            <div className=" bg-gray-200 rounded text-center text-white p-8 max-w-2xl">
              <h1 className="text-4xl font-display md:text-6xl text-black font-bold mb-4"><span className="text-green-500">We&apos;</span>re Coming Soon</h1>
              <p className="text-lg font-nunito text-black md:text-xl mb-8">Powering the future with cutting-edge electrical appliances—coming soon to revolutionize your home.</p>
            </div>
          </div>
        </section>


      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <Image
              src="/images/Concordian Logo - Final - wht.svg"
              alt="logo"
              width={200}
              height={200}
              priority
            />
          </div>

          {/* Contact Information Column */}
          <div className="space-y-4 font-nunito">
            <p className=" text-base md:text-lg">
              <span className="text-lg md:text-xl font-bold">Address:</span> Concordian Power Private Limited, 2nd Floor, Emirates Tower, M-13, F-7 Markaz, Islamabad, Pakistan.
            </p>

            <p className=" text-base md:text-lg">
              <span className="text-lg md:text-xl font-bold">Contact:</span> +92 51 209 9296 Ext: 9296
            </p>

            <p className=" text-base md:text-lg">
              <span className="text-lg md:text-xl font-bold">Email:</span> info@concordianpower.com
            </p>
          </div>
        </div>
      </footer>

    </>
  );
}
