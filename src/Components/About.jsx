export default function About() {
  return (
    <section id="about">
      {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"></div> */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <h1> Hi, I&apos;m Chioma </h1>
        <p className="font-mono text-xl text-white"> I build amazing stuffs</p>

        <div className="flex justify-center mt-20">
          <a
            href="#contact"
            className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover: text-black bg-white  rounded text-lg"
          >
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-teal-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            See My Past Work
          </a>
        </div>
      </div>
    </section>
  );
}
