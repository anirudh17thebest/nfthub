import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../Adulam'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center mt-2">
            {/* A.I Arts <br /> */}
            <span className="text-gradient">NFTs</span> Collection
          </h1>

          <p className="text-white font-semibold text-sm mt-8">
            Mint and collect the hottest NFTs around.
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer mt-6"
            onClick={onMintNFT}
          >
            Mint Now
          </button>

          <a
            href="https://daltonic.github.io/"
            className="flex flex-row justify-center space-x-2 items-center
            bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          >
            {/* <img
              className="w-11 h-11 object-contain rounded-full"
              src={avatar}
              alt="Adulam Logo"
            /> */}
            <div className="flex flex-col font-semibold">
              {/* <span className="text-white text-sm">0xf55...146a</span>
              <span className="text-[#e32970] text-xs">Daltonic</span> */}
            </div>
          </a>
        
          <p className="text-white text-sm font-medium text-center">
            NFTs are sort of like digital trading cards, except each is one of a kind.
             <br /> Each NFT has its own metadata codes, which are stored on the blockchain. 
             <br />To ensure that they remain unique — and cannot be edited or altered in any way. 
             <br /> Minting an NFT, or non-fungible token, is publishing a unique digital asset on a blockchain 
             <br />So that it can be bought, sold, and traded.
          </p>

          <ul className="flex flex-row justify-center space-x-2 items-center my-8">
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full"
              
            >
              <img className="w-9 h-9" src={github} alt="Github" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full"
            >
              <img className="w-9 h-9" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full"
            >
              <img className="w-9 h-9" src={facebook} alt="facebook" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full"
  
            >
              <img className="w9 h-9" src={twitter} alt="twitter" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full "
  
            >
              <img className="w-9 h-9" src={medium} alt="medium" /> 
            </a>
          </ul> 

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-15 h-15 rounded-full
            bg-red-500 cursor-pointer p-3 ml-4 text-white
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-sm font-bold">{nfts.length}/99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
