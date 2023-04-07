function Footer() {
  return (
    <div className=" bg-gray-900 px-10 xl:px-40  text-white py-10">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-10 xl:gap-32">
        <div className="w-full xl:w-[800px] flex flex-col justify-between gap-5">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            dolorem, quas molestiae cupiditate, perferendis iste maxime dolorum
            quod
          </p>
          <form action="#0">
            <div className="flex">
              <input
                type="email"
                className="outline-none p-2 text-gray-900 w-full"
                placeholder="votre adresse email"
              />
              <button
                type="submit"
                className="bg-blue-600 px-2 hover:bg-blue-500 cursor-pointer active:bg-blue-700"
              >
                S'abonnez
              </button>
            </div>
          </form>
        </div>
        <div className=" w-full flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-5 justify-between">
          <div>
            <h1 className="my-2 text-xl font-bold">RESOURCES</h1>
            <ul className="space-y-1">
              <li>un</li>
              <li>Deus</li>
              <li>trois</li>
              <li>Quatres</li>
              <li>Cinq</li>
            </ul>
          </div>
          <div>
            <h1 className="my-2 text-xl font-bold">HELP & SUPPORT</h1>
            <ul className="space-y-1">
              <li>un</li>
              <li>Deus</li>
              <li>trois</li>
              <li>Quatres</li>
              <li>Cinq</li>
            </ul>
          </div>
          <div>
            <h1 className="my-2 text-xl font-bold">FOLLOW US</h1>
            <ul className="space-y-1">
              <li>
                <a href="#0">Discord</a>
              </li>
              <li>
                <a href="#0">Github</a>
              </li>
              <li>
                <a href="#0">Twitter</a>
              </li>
              <li>
                <a href="#0">linkdin</a>
              </li>
              <li>
                <a href="#0">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-10" />
      <div className="flex justify-center items-center">
        <p className="text-center">© 2023 herman2geku. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
