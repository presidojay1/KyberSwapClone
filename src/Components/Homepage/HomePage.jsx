import React from "react";
import "./HomePage.css";
import * as Images from "../Modal-Components/TokenImages";
import swapSVG from "../Modal-Components/TokenImages/swap.svg";
import dollar from "../Modal-Components/TokenImages/dollar.svg";
import slippage from "../Modal-Components/TokenImages/slippage.svg";
import Time from "../Modal-Components/TokenImages/time.svg";
import forTrader from "../Modal-Components/TokenImages/fortraders.svg";
import Knc from "../Modal-Components/TokenImages/knc.png";

const HomePage = () => {
  return (
    <div className="mt-24 HomepageBody">
      <div>
        <p className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-[#31CB9E] font-bold">Swap</span> Token at
          Superior Rates
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-8 px-4 sm:px-6 md:px-8 lg:px-10">
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.AnyInu}
          alt="Any Inu"
        />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.Arbitium}
          alt="Arbitium"
        />
        <img className="w-8 h-8 mr-6 mb-4 sm:mb-0" src={Images.ATH} alt="ATH" />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.Avalanche}
          alt="Avalanche"
        />
        <img className="w-8 h-8 mr-6 mb-4 sm:mb-0" src={Images.axs} alt="axs" />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.Base}
          alt="Base"
        />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.BitTorrent}
          alt="BitTorrent"
        />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.Blast}
          alt="Blast"
        />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.BNBchain}
          alt="BNB Chain"
        />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.Crosnos}
          alt="Cronos"
        />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.Ethereum}
          alt="Ethereum"
        />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.Fantom}
          alt="Fantom"
        />
        <img className="w-8 h-8 mr-6 mb-4 sm:mb-0" src={Images.IZI} alt="IZI" />
        <img className="w-8 h-8 mr-6 mb-4 sm:mb-0" src={Images.MAI} alt="MAI" />
        <img className="w-8 h-8 mr-6 mb-4 sm:mb-0" src={Images.MMG} alt="MMG" />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.Optimism}
          alt="Optimism"
        />
        <img
          className="w-8 h-8 mr-6 mb-4 sm:mb-0"
          src={Images.polygon}
          alt="polygon"
        />
      </div>

      <div className="max-w-[1100px] mx-auto mt-8 px-6 sm:px-6 md:px-8 lg:px-10">
        <p className="text-white text-[20px] text-center">
          KyberSwap is a decentralized exchange (DEX) aggregator. We provide our
          traders with superior token prices by analyzing rates across thousands
          of exchanges instantly!
        </p>
      </div>

      <div className="flex items-center justify-center space-x-2 mt-8">
        <button className="bg-[#31CB9E] rounded-full px-14 py-3 font-medium">
          <img
            className="w-5 h-5 inline-block mr-2"
            alt="swapsvg"
            src={swapSVG}
          />
          Swap Now
        </button>
      </div>

      {/* <div className="flex justify-center space-x-4 max-w-[450px] mx-auto mt-32  ">
        <img className="rounded-lg" src={twentynine} alt="29.13" />
        <img className="rounded-lg" src={seventytwo} alt="72.45" />
      </div> */}

      <div className="flex justify-center mx-auto mt-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-screen-lg">
        <div className="bg-[#1C1C1C] p-4 flex flex-col justify-center items-center rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-2">
          <p className="text-2xl text-white font-bold">$29.29B</p>
          <p className="text-center text-[#A9A9A9]">Total Trading Volume</p>
        </div>
        <div className="bg-[#1C1C1C] p-4 flex flex-col justify-center items-center rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-2">
          <p className="text-2xl font-bold text-white">$99M</p>
          <p className="text-center text-[#A9A9A9] ">24H Trading Volume</p>
        </div>
      </div>

      <div class="max-w-[1250px] mx-auto mt-40 md:flex md:justify-center md:items-start px-4 sm:px-6 md:px-8 lg:px-10">
        <div class="md:mr-12 max-w-[500px]">
          <p class="text-[#31CB9E] text-2xl font-bold">FOR TRADERS</p>
          <p class="mt-2 text-4xl text-white">
            Swap your tokens at superior rates. No limits
          </p>
          <p class="mt-12 text-white text-[17px]">
            With our Dynamic Trade Routing technology, we aggregate liquidity
            from multiple DEXs and identify superior trade routes for you.
          </p>
          <div class="flex mt-4 text-white text-[18px]">
            <img class="w-4 h-4 mr-2 mt-[5px]" src={dollar} alt="" />
            <p>Superior price guaranteed</p>
          </div>
          <div class="flex mt-4 text-white text-[18px]">
            <img class="w-4 h-4 mr-2 mt-[5px]" src={slippage} alt="" />
            <p>Lowest possible slippage</p>
          </div>
          <div class="flex mt-4 text-white text-[18px]">
            <img class="w-4 h-4 mr-2 mt-[5px]" src={Time} alt="" />
            <p>Save time & effort</p>
          </div>
          <div class="flex items-center space-x-2 mt-8">
            <button class="bg-[#31CB9E] rounded-full px-20 py-3 w-full md:w-auto md:px-18 md:py-3 font-medium ">
              <img
                class="w-5 h-5 inline-block mr-2"
                alt="swapsvg"
                src={swapSVG}
              />
              Swap Now
            </button>
          </div>
        </div>

        <div class="  md:mt-0">
          <img class="" src={forTrader} alt="" />
          {/* <img class="mt-12" src={TVL} alt="" /> */}
          <div class="flex flex-col lg:flex-row flex-wrap max-w-[1200px] mt-8 ml-3 bg-[#1C1C1C] border-[#31CB9E] border-2 rounded-md rounded-tr-lg rounded-br-lg shadow-[20px_0_20px_-5px_rgba(34,197,94,0.5)] [--shadow-color:rgba(#31CB9E)]">
            <div class="flex flex-row md:flex-row w-full lg:w-1/2">
              <div class="w-full md:w-1/2 lg:w-1/2 text-center p-4 border-b border-r md:border-b md:border-r border-gray-600">
                <p className="text-white">$24B</p>
                <p className="text-[#A9A9A9]">TVL from DEXs</p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/2 text-center p-4 border-b md:border-b md:border-r lg:border-r border-gray-600">
                <p className="text-white">70+</p>
                <p className="text-[#A9A9A9]">DEXs</p>
              </div>
            </div>
            <div class="flex flex-row md:flex-row w-full lg:w-1/2">
              <div class="w-full md:w-1/2 lg:w-1/2 text-center p-4 border-b border-r md:border-b-0 md:border-r border-gray-600">
                <p className="text-white">17+</p>
                <p className="text-[#A9A9A9]">Chains</p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/2 text-center p-4 md:border-r lg:border-r-0 border-gray-600">
                <p className="text-white">20,000+</p>
                <p className="text-[#A9A9A9]">Tokens</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-[1200px] mx-auto mt-24 md:flex md:justify-center md:items-start">
        <div class="mx-auto md:mx-0 md:w-[550px] md:mr-12 flex justify-center md:block">
          <img class="md:w-full" src={Knc} alt="" />
        </div>
        <div class=" lg:mt-16 md:mt-0 px-4 sm:px-6 md:px-8 lg:px-10">
          <p class="text-[#31CB9E] font-bold">ABOUT KNC</p>
          <p class="mt-3 text-white text-4xl">Kyber Network Crystal (KNC)</p>
          <p class="mt-6 text-white">
            KNC is a utility and governance token, and an integral part of Kyber
            Network and its flagship product KyberSwap. It is the glue that
            connects different stakeholders in Kyber's ecosystem.
          </p>
          <div class="flex items-center space-x-2 mt-8 text-white">
            <button class="bg-[#31CB9E] rounded-full px-20 py-3 w-full md:w-auto md:px-18 md:py-3 text-black font-medium">
              <img
                class="w-5 h-5 inline-block mr-2"
                alt="swapsvg"
                src={swapSVG}
              />
              Find out more
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center mt-40 text-white text-3xl font-bold">
          Powered by
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-8 mx-auto max-w-[1250px] px-4 sm:px-6 md:px-8 lg:px-10">
        <img
          className="w-44 h-40 mr-6"
          src={Images.kybernetwork}
          alt="Kyber Network"
        />
        <img
          className="w-40 h-full mr-6"
          src={Images.ethereumimg}
          alt="Ethereum"
        />

        <img
          className="w-44 h-40 mr-6"
          src={Images.binancesmartchain}
          alt="Binance Smart Chain"
        />
        <img className="w-44 h-12  mr-6" src={Images.scrollimg} alt="Scroll" />

        <img
          className="w-44 h-40 mr-6"
          src={Images.avalancheimg}
          alt="Avalanche"
        />
        <img
          className="w-44 h-40 mr-6"
          src={Images.artbitrumimg}
          alt="Arbitrum"
        />
        <img
          className="w-44 h-40 mr-6"
          src={Images.bittorrentimg}
          alt="BitTorrent"
        />
        <img className="w-44 h-12 mr-6" src={Images.blastimg} alt="Blast" />
        <img className="w-44 h-40 mr-6" src={Images.Baseimg} alt="Base" />

        <img className="w-44 h-12 mr-6" src={Images.mantleimg} alt="Mantle" />
      </div>

      <nav className="flex flex-col md:flex-row justify-between items-center mt-12 p-4 bg-[#1C1C1C] text-white">
        <div className="flex w-full space-x-4 lg:ml-40 md:ml-10 flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <a
            href="*"
            className="hover:text-gray-400 border-r border-gray-600 last:border-r-0 md:border-r-0 pr-4 md:pr-0"
          >
            Docs
          </a>
          <a
            href="*"
            className="hover:text-gray-400 border-r border-gray-600 last:border-r-0 md:border-r-0 pr-4 md:pr-0"
          >
            Github
          </a>
          <a
            href="*"
            className="hover:text-gray-400 border-r border-gray-600 last:border-r-0 md:border-r-0 pr-4 md:pr-0"
          >
            KyberDAO
          </a>
          <a
            href="*"
            className="hover:text-gray-400 border-r border-gray-600 last:border-r-0 md:border-r-0 pr-4 md:pr-0"
          >
            Forum
          </a>
          <a
            href="*"
            className="hover:text-gray-400 border-r border-gray-600 last:border-r-0 md:border-r-0 pr-4 md:pr-0"
          >
            Kyber Network
          </a>
          <a
            href="*"
            className="hover:text-gray-400 border-r border-gray-600 last:border-r-0 md:border-r-0 pr-4 md:pr-0"
          >
            KNC
          </a>
        </div>
        <div className="corns flex space-x-4 lg:mr-40 md:mr-10 justify-center w-full md:w-auto">
          <img className="w-4 h-8 mr-2 " src={Images.mailsend} alt="mailsend" />
          <img className="w-4 h-8 mr-2" src={Images.bird} alt="bird" />

          <img className="w-4 h-8 mr-2" src={Images.discord} alt="discord" />
        </div>
      </nav>
    </div>
  );
};
export default HomePage;
