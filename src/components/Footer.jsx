import ethlogo from '../assets/ethlogo.png'

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex flex-col justify-between items-center my-4">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full mb-5">
        {/* <p className="text-white text-base text-center mx-2 cursor-pointer">
          Explore
        </p> */}
        {/* <p className="text-white text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Home
        </p> */}
      </div>

      <div className="text-white flex flex-row justify-center items-center mt-12">
        Connect with us at info@cryptohub.com
      </div>
    </div>
  </div>
)

export default Footer