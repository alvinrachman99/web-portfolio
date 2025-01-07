import photo_profile from '../assets/photo_profile.jpg'

function Header() {
  return (
    <>
      {/* description */}
      <div id="Header" className="py-4 px-8 xl:px-32 flex flex-col md:pt-14 md:order-first">
        <span className="text-base font-semibold text-sky-500 py-1">
          Hello World, I'm
        </span>
        <span className="text-3xl font-bold py-1">Alvin Rachman Septian</span>
        <span className="text-xl font-semibold py-1">
          Programmer - <span className='text-sky-500'>Web Developer</span>
        </span>
        <p className="text-sm py-1">
          <span className="font-semibold">3 years</span> of experiance in Web
          Development, using{" "}
          <span className="font-semibold">Codeigniter and Jquery</span> for
          developing a website and web applications
        </p>
        <div className="flex flex-col py-1 gap-2">
          <button className="w-fit py-2 px-3 lg:text-sm text-xs border-2 border-dashed border-sky-950 dark:border-white dark:hover:bg-gray-100 dark:hover:text-sky-950 rounded-md hover:bg-sky-950 hover:text-white">
            📱 +62 858 9244 2489
          </button>
          <button className="w-fit py-2 px-3 lg:text-sm text-xs border-2 border-dashed border-sky-950 dark:border-white dark:hover:bg-gray-100 dark:hover:text-sky-950 rounded-md hover:bg-sky-950 hover:text-white tracking-wider">
            📩 alvinrachman16@gmail.com
          </button>
        </div>
      </div>
      {/* image */}
      <div className="py-4 justify-items-center order-first">
        <img
          src={photo_profile}
          className="w-80 h-80 md:h-96 object-cover object-bottom rounded-full shadow-xl md:rounded-md"
          alt="Photo Profile"
        />
      </div>
      {/* CV */}
      <div className="bg-gray-100 border-y py-10 text-center md:col-span-2">
        <button className="border-2 border-sky-950 border-dashed p-3 rounded-md hover:bg-sky-950 hover:text-white dark:text-sky-950 dark:hover:text-white">
          🖇️ Download CV
        </button>
      </div>
    </>
  );
}

export default Header;
