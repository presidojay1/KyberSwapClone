import React, { useReducer, useState } from "react";
import "./Trade.css";
import vertical from "../Navbar/Images/vertical.svg";
import info from "../Navbar/Images/info.svg";
import swap from "../Navbar/Images/swap.svg";
import trade from "../Navbar/Images/trade.svg";
import whitesettings from "../Navbar/Images/settings2.svg";
import {
  ChevronDownIcon,
  CalendarIcon,
  SpinnerIcon,
  LinkIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import SwapModal from "../Modal-Components/SwapModal";
import { tradeReducer, initialState } from "./TradeReducer";
import { Ethereum } from "../Modal-Components/TokenImages";
const Trade = () => {
  const [state, dispatch] = useReducer(tradeReducer, initialState);

  const [slippageValue, setSlippageValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenModal = (tokenType) => {
    dispatch({ type: "OPEN_MODAL", payload: tokenType });
  };
  const handleOpenSlippage = () => {
    dispatch({ type: "SLIPPAGE_OPEN" });
  };

  const selectSlippage = (slippage) => {
    dispatch({ type: "SLIPPAGE_VALUE", payload: slippage });
    if (slippage > 0.9 && slippage < 2) {
      dispatch({ type: "SLIPPAGE_CLOSES" });
      dispatch({ type: "SLIPPAGE_YELLOWOPEN" });
    } else if (slippage > 2 && slippage < 20) {
      dispatch({ type: "SLIPPAGE_CLOSES" });
      dispatch({ type: "SLIPPAGE_REDOPEN" });
    } else {
      dispatch({ type: "SLIPPAGE_CLOSES" }); // Close both borders if neither condition is met
    }
  };

  let borderColor = "green";
  if (state.slippageYellowOpen) {
    borderColor = "yellow";
  } else if (state.slippageredopen) {
    borderColor = "red";
  }

  const handleTokenSelect = (token) => {
    dispatch({ type: "SELECT_TOKEN", payload: token });
  };

  const handleInputChange = (event) => {
    if (event.target.value > 19) {
      setShowAlert(true); // Show alert popup if value is greater than 19
      setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
      return;
    }
    setSlippageValue(event.target.value);
    setShowAlert(false);
  };

  const handleInputClick = () => {
    selectSlippage(slippageValue);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInputClick();
    }
  };
  return (
    <section className="TradeSection">
      {state.isModalOpen && (
        <SwapModal
          isOpen={state.isModalOpen}
          onClose={() => dispatch({ type: "CLOSE_MODAL" })}
          onSelectToken={handleTokenSelect}
        />
      )}
      <section className="Trade-Swap">
        <div className="TradeSwap-Flex">
          <div className="TradeSwap-FlexA">
            <div>
              <p>Swap</p>
            </div>
            <div>
              {" "}
              <img src={vertical} width="20px" alt="" />
            </div>
            <div>
              <p>Limit Order</p>
            </div>
          </div>
          <div className="TradeSwap-Flex1">
            <div>
              {" "}
              <img src={info} width="25px" alt="" />
            </div>
            <div>
              {" "}
              <img src={whitesettings} width="25px" alt="" />
            </div>
          </div>
        </div>
        <p className="PinstantlyP">
          Instantly buy or sell tokens at superior prices
        </p>

        <div className="TradeSwap-Body">
          <div className="TradeSwap-Body1">
            <div className="TradeSwap-BodyFlex1">
              <CalendarIcon mt="-5px" ml="1px" w={15} h={15} color="white" />
              <span>0</span>
            </div>
            <div className="TradeSwap-BodyFlex2">
              <h1>1</h1>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    marginRight: "5px",
                    marginTop: "10px",
                    color: "rgb(169, 169, 169)",
                  }}
                >
                  $ {state.token1.defaultPrice}
                </p>
                <div
                  style={{ cursor: "pointer" }}
                  className="Body-DropDown UNO"
                  onClick={() => handleOpenModal("token1")}
                >
                  <div className="Body-DropDownImage">
                    <img
                      className="tokenImage"
                      src={state.token1.imgSrc}
                      alt=""
                    />
                  </div>
                  <div>
                    {" "}
                    <h4>{state.token1.Abbrevation}</h4>{" "}
                  </div>
                  <div>
                    {" "}
                    <ChevronDownIcon
                      mt="12px"
                      ml="1px"
                      m4="3px"
                      w={15}
                      h={15}
                      color="white"
                      style={{ stroke: "currentColor", strokeWidth: 3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img src={swap} width="35px" alt="" />

          <div className="TradeSwap-Body1">
            <div className="TradeSwap-BodyFlex-A">
              <div>
                <p>Est. Output</p>
              </div>
              <div className="TradeSwap-BodyFlex1A">
                <CalendarIcon mt="-5px" ml="1px" w={15} h={15} color="white" />
                <span>0</span>
              </div>
            </div>
            <div className="TradeSwap-BodyFlex2">
              <h1 style={{ color: "rgb(169, 169, 169)" }}>0.0011</h1>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    marginRight: "5px",
                    marginTop: "10px",
                    color: "rgb(169, 169, 169)",
                  }}
                >
                  ${state.token2.defaultPrice}
                </p>
                <div
                  style={{ cursor: "pointer" }}
                  className="Body-DropDown DUOS"
                  onClick={() => handleOpenModal("token2")}
                >
                  <div className="Body-DropDownImage">
                    <img
                      className="tokenImage"
                      src={state.token2.imgSrc}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4>{state.token2.Abbrevation}</h4>
                  </div>
                  <div>
                    <ChevronDownIcon
                      mt="12px"
                      ml="1px"
                      m4="3px"
                      w={15}
                      h={15}
                      color="white"
                      style={{ stroke: "currentColor", strokeWidth: 3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Max-Slippage">
            <p>Max Slippage :&nbsp;</p>
            <span>{state.slippageValue}%</span>
            <ChevronDownIcon
              onClick={handleOpenSlippage}
              mt="6px"
              ml="1px"
              w={15}
              h={15}
              color="white"
            />
          </div>
          {state.slippageOpen && (
            <div className="slippage-input">
              <div className="slippage-InputNumber">
                <div
                  onClick={() => selectSlippage(0.05)}
                  className="slippage-number"
                >
                  <p>0.05%</p>
                </div>

                <div
                  onClick={() => selectSlippage(0.1)}
                  className="slippage-number"
                >
                  <p>0.1%</p>
                </div>

                <div
                  onClick={() => selectSlippage(0.5)}
                  className="slippage-number"
                >
                  <p>0.5%</p>
                </div>

                <div
                  onClick={() => selectSlippage(1)}
                  className="slippage-number"
                >
                  <p>1%</p>
                </div>

                <div className="slippage-numberInput" style={{ borderColor }}>
                  {(state.slippageYellowOpen || state.slippageredopen) && (
                    <WarningTwoIcon
                      mt="5px"
                      ml="1px"
                      w={15}
                      h={15}
                      color={borderColor}
                      style={{ borderColor }}
                    />
                  )}
                  <input
                    type="number"
                    value={slippageValue}
                    onChange={handleInputChange}
                    onClick={handleInputClick}
                    onKeyPress={handleKeyPress}
                    placeholder="Custom"
                  />
                  <span
                    style={{
                      fontWeight: "bold",
                      marginTop: "4px",
                      marginLeft: "-2px",
                    }}
                  >
                    %
                  </span>
                </div>
              </div>
            </div>
          )}

          {showAlert && (
            <div
              style={{ backgroundColor: "rgba(49, 203, 157, 0.644)" }}
              className="LoseFunds-Yellow"
            >
              <div className="Lose-Funds">
                <WarningTwoIcon mt="5px" ml="1px" w={15} h={15} color="white" />
                &nbsp;
                <p className="InsideRed-Text">
                  please enter a value less than 20
                </p>
              </div>
            </div>
          )}

          {state.slippageOpen && state.slippageYellowOpen && (
            <div className="LoseFunds-Yellow">
              <div className="Lose-Funds">
                <WarningTwoIcon mt="5px" ml="1px" w={15} h={15} color="white" />
                &nbsp;
                <p className="InsideRed-Text">
                  Your &nbsp;
                  <span
                    style={{
                      fontWeight: "bold",
                      borderBottom: "2px solid white",
                    }}
                  >
                    Slippage
                  </span>{" "}
                  &nbsp;setting might be high. You might want to adjust it to
                  avoid potential front-running.
                </p>
              </div>
            </div>
          )}
          {state.slippageOpen && state.slippageredopen && (
            <div className="LoseFunds-Red">
              <div className="Lose-Funds">
                <WarningTwoIcon mt="5px" ml="1px" w={15} h={15} color="gold" />
                &nbsp;
                <p className="InsideRed-Text">
                  <span style={{ fontWeight: "bold" }}>Price Impact</span> is
                  very high.You will lose funds
                </p>
                &nbsp;
                <ChevronDownIcon
                  mt="5px"
                  ml="1px"
                  w={15}
                  h={15}
                  color="white"
                  onClick={() => dispatch({ type: "SLIPPAGE_REDTEXT" })}
                  style={{ stroke: "currentColor", strokeWidth: 1.5 }}
                />
              </div>
              {state.slippageRedText && (
                <p className="AfterRed-Text">
                  is very high.You will lose fundsis very high.You will lose
                  fundsis very high.You will lose fundsis very high.You will
                  lose funds is
                </p>
              )}
            </div>
          )}
          <div className="Price-feed">
            <div className="PriceFeed-Flex">
              <div>
                <p>Rate</p>
              </div>
              <div className="Feedflex-ItemsF">
                <SpinnerIcon
                  style={{ transform: "rotate(0deg)" }}
                  className="spin-animation"
                  mt="1px"
                  ml="1px"
                  w={15}
                  h={15}
                  color="white"
                />
                &nbsp;
                <p style={{ fontWeight: "bold", color: "white" }}>
                  al = 0.14USDT
                </p>
                &nbsp;
                <LinkIcon mt="3px" ml="1px" w={15} h={15} color="white" />
              </div>
            </div>
            <div className="PriceFeed-Flex">
              <div>
                <p>Minimum Received</p>
              </div>
              <div className="Feedflex-ItemsF">
                <p style={{ fontWeight: "bold", color: "white" }}>
                  {" "}
                  0.000.14USDT
                </p>
              </div>
            </div>
            <div className="PriceFeed-Flex">
              <div>
                <p>Price Impact</p>
              </div>
              <div className="Feedflex-ItemsF">
                <p style={{ fontWeight: "bold", color: "Red" }}>1.77</p>
              </div>
            </div>
          </div>
          <button className="Feed-Button">Connect</button>
        </div>
      </section>

      <section className="Trade-Route">
        <section className="Trade-Route_body">
          <div className="Trade-Route-Logo">
            <div>
              <img src={trade} width="45px" alt="" />
            </div>
            &nbsp;&nbsp;
            <div>
              <h1>Your Trade Route</h1>
            </div>
          </div>

          <div className="Trade-Route-Flex">
            <div className="Trade-Route-FirstFlex">
              <div className="TDBT-ImageDiv">
                <img className="TDBT-Image" src={state.token1.imgSrc} alt="" />
              </div>
              &nbsp;&nbsp;
              <div>
                <p>1 {state.token1.Abbrevation}</p>
              </div>
            </div>

            <div className="Trade-Route-SecondFlex">
              <div>
                <p>4366 {state.token2.Abbrevation}</p>
              </div>
              &nbsp;&nbsp;
              <div className="TDBT-ImageDiv">
                <img className="TDBT-Image" src={state.token2.imgSrc} alt="" />
              </div>
            </div>
          </div>

          <div className="ThreeLines-Trade">
            <div className="vertical-line">
              <div className="dot"></div>
            </div>

            <div className="TradeRoute-EP">
              <div className="TradeRoute-EF">
                <div className="TradeRoute-Percent">
                  <p>85%</p>
                </div>
                <div className="horizontal-middle"></div>
                <div className="TradeRoute-Body">
                  <div className="TradeRoute-BodyTop">
                    <div className="TDBT-ImageDiv">
                      <img
                        className="TDBT-Image"
                        src={state.token1.imgSrc}
                        alt=""
                      />
                    </div>

                    <p>{state.token1.Abbrevation}</p>
                  </div>
                  <div className="TradeRoute-BodyTop2">
                    <div className="TDBT-ImageDiv">
                      <img
                        className="TDBT-Image"
                        src={state.token2.imgSrc}
                        alt=""
                      />
                    </div>
                    <p>{state.token2.Abbrevation} uniswap v3: 100%</p>
                  </div>
                </div>
                <div className="horizontal-middle"></div>
                <div className="TradeRoute-Body">
                  <div className="TradeRoute-BodyTop">
                    <div className="TDBT-ImageDiv">
                      <img
                        className="TDBT-Image"
                        src={state.token1.imgSrc}
                        alt=""
                      />
                    </div>
                    <p>{state.token1.Abbrevation}</p>
                  </div>
                  <div className="TradeRoute-BodyTop2">
                    <div className="TDBT-ImageDiv">
                      <img
                        className="TDBT-Image"
                        src={state.token2.imgSrc}
                        alt=""
                      />
                    </div>
                    <p>{state.token2.Abbrevation} uniswap v3: 10%</p>
                  </div>
                </div>
                <div className="horizontal-middle"></div>
                <div className="TradeRoute-Body">
                  <div className="TradeRoute-BodyTop">
                    <div className="TDBT-ImageDiv">
                      <img
                        className="TDBT-Image"
                        src={state.token1.imgSrc}
                        alt=""
                      />
                    </div>
                    <p>{state.token1.Abbrevation}</p>
                  </div>
                  <div className="TradeRoute-BodyTop2">
                    <div className="TDBT-ImageDiv">
                      <img
                        className="TDBT-Image"
                        src={state.token2.imgSrc}
                        alt=""
                      />
                    </div>
                    <p>{state.token2.Abbrevation} uniswap v3: 100%</p>
                  </div>
                </div>
                <div className="horizontal-middle"></div>

                <div className="TradeRoute-Icon">
                  <LinkIcon mt="5px" ml="1px" w={15} h={15} color="white" />
                </div>
              </div>

              <div className="TradeRoute-EF">
                <div className="TradeRoute-Percent">
                  <p>45%</p>
                </div>
                <div className="horizontal-middle"></div>
                <div className="TradeRoute-Body">
                  <div className="TradeRoute-BodyTop">
                    <img src={trade} width="25px" alt="" />
                    <p>1A111111E</p>
                  </div>
                  <div className="TradeRoute-BodyTop2">
                    <img src={trade} width="25px" alt="" />
                    <p>uniswap v3: 100%</p>
                  </div>
                </div>
                <div className="horizontal-middle"></div>
                <div className="TradeRoute-Body">
                  <div className="TradeRoute-BodyTop">
                    <img src={trade} width="25px" alt="" />
                    <p>1A111111E</p>
                  </div>
                  <div className="TradeRoute-BodyTop2">
                    <img src={trade} width="25px" alt="" />
                    <p>uniswap v3: 100%</p>
                  </div>
                </div>
                <div className="horizontal-middle"></div>

                <div className="TradeRoute-Icon">
                  <LinkIcon mt="5px" ml="1px" w={15} h={15} color="white" />
                </div>
              </div>

              <div className="TradeRoute-EF">
                <div className="TradeRoute-Percent">
                  <p>15%</p>
                </div>
                <div className="horizontal-middle"></div>
                <div className="TradeRoute-Body">
                  <div className="TradeRoute-BodyTop">
                    <div className="TDBT-ImageDiv">
                      <img
                        className="TDBT-Image"
                        src={state.token1.imgSrc}
                        alt=""
                      />
                    </div>
                    <p>{state.token1.Abbrevation}</p>
                  </div>
                  <div className="TradeRoute-BodyTop2">
                    <div className="TDBT-ImageDiv">
                      <img
                        className="TDBT-Image"
                        src={state.token2.imgSrc}
                        alt=""
                      />
                    </div>
                    <p>uniswap v3: 100%</p>
                  </div>
                </div>
                <div className="horizontal-middle"></div>

                <div className="TradeRoute-Icon">
                  <LinkIcon mt="5px" ml="1px" w={15} h={15} color="white" />
                </div>
              </div>
            </div>

            <div className="vertical-line">
              <div className="dot"></div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Trade;
