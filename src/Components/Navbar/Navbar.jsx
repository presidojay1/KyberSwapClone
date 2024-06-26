import React, { useState, useReducer } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import logo from "./Images/logo-dark.svg";
import ethereum from "./Images/ethereum.svg";
import box from "./Images/box.svg";
import alarm from "./Images/alarm.svg";
import vertical from "./Images/vertical.svg";
import swapp from "./Images/swapp.svg";
import cross from "./Images/cross.svg";
import graph from "./Images/graph.svg";
import twitter from "./Images/twitter.svg";
import telegram from "./Images/telegram.svg";
import reddit from "./Images/reddit.svg";
import info from "./Images/info.svg";
import mail from "./Images/mail.svg";
import bulb from "./Images/bulb.svg";
import book1 from "./Images/book.svg";
import book2 from "./Images/book2.svg";
import vote from "./Images/vote-svgrepo-com.svg";
import download from "./Images/download.svg";
import chat from "./Images/chat.svg";
import whiteicon from "./Images/infodown.svg";
import DragDropModal from "../Modal-Components/DragDropModal";
import { dropdownReducer, initialState } from "./NavReducer";
import china from "../Navbar/CountryFolder/china.svg";
import us from "../Navbar/CountryFolder/us.svg";
import turkey from "../Navbar/CountryFolder/turkey.svg";
import southk from "../Navbar/CountryFolder/southkorea.svg";
import arrowLeft from "../Navbar/CountryFolder/arrowleft.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Import useLocation
const Navbar = () => {
  const [state, dispatch] = useReducer(dropdownReducer, initialState);

  const [isTradeHovered, setIsTradeHovered] = useState(false);
  const [isDaoHovered, setIsDaoHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const navigateToHome = () => {
    navigate("/home");
  };

  const navigateToTrade = () => {
    navigate("/");
  };

  const handleOpenModal = (tokenType) => {
    dispatch({ type: "OPEN_MODAL", payload: tokenType });
  };

  const handleCloseModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleTokenSelect = (token) => {
    dispatch({ type: "SELECT_TOKEN", payload: token });
  };

  return (
    <>
      {state.isModalOpen && (
        <DragDropModal
          isOpen={state.isModalOpen}
          onClose={handleCloseModal}
          handleTokenSelect={handleTokenSelect}
        />
      )}
      <nav className="NavBar-Header">
        <section className="NavSection">
          <div className="NavBody-1">
            <section className="N900px-Flex">
              <div className="NavItem">
                <div className="NavItem-FlexImage">
                  <img src={logo} alt="" />
                </div>
              </div>
            </section>
            <section className="imagePx-Body">
              <div
                onMouseEnter={() => {
                  dispatch({ type: "TOGGLE_TRADE" });
                  setIsTradeHovered(true);
                }}
                onMouseLeave={() => {
                  dispatch({ type: "CLOSE_ALL" });
                  setIsTradeHovered(false);
                }}
                className="NavItem"
              >
                <div className="NavItem-Flex">
                  <p
                    style={isTradeHovered ? { color: "rgb(34, 159, 121)" } : {}}
                  >
                    Trade
                  </p>
                  <ChevronDownIcon
                    className="ChevronDownIcon"
                    ml="2px"
                    color={isTradeHovered ? "rgb(34, 159, 121)" : "white"}
                    transform={
                      isTradeHovered ? "rotate(180deg)" : "rotate(0deg)"
                    }
                    style={{ stroke: "currentColor", strokeWidth: 1.5 }}
                  />
                </div>
                {state.trade && (
                  <div className="NavItem-FlexItems">
                    <div onClick={navigateToTrade} className="NavItem-FlexP">
                      <img src={swapp} width="20px" alt="" />
                      &nbsp; &nbsp;
                      <p>Swap</p>
                    </div>
                    <div className="NavItem-FlexP">
                      <img src={graph} width="20px" alt="" />
                      &nbsp; &nbsp;
                      <p>Limit Order</p>
                    </div>
                    <div className="NavItem-FlexP">
                      <img src={cross} width="20px" alt="" />
                      &nbsp; &nbsp;
                      <p style={{ fontSize: "13px", marginTop: "2px" }}>
                        Cross Chain
                      </p>
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <img src={bulb} width="20px" alt="" />
                    </div>
                    <div className="NavItem-FlexP">
                      <img src={mail} width="20px" alt="" />
                      &nbsp; &nbsp;
                      <p>Buy Crypto</p>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="NavItem"
                onMouseEnter={() => {
                  dispatch({ type: "TOGGLE_DAO" });
                  setIsDaoHovered(true);
                }}
                onMouseLeave={() => {
                  dispatch({ type: "CLOSE_ALL" });
                  setIsDaoHovered(false);
                }}
              >
                <div className="NavItem-Flex">
                  <p style={isDaoHovered ? { color: "rgb(34, 159, 121)" } : {}}>
                    KyberDAO
                  </p>
                  <ChevronDownIcon
                    ml="2px"
                    color={isDaoHovered ? "green" : "white"}
                    transform={isDaoHovered ? "rotate(180deg)" : "rotate(0deg)"}
                    className="ChevronDownIcon"
                    style={{ stroke: "currentColor", strokeWidth: 1.5 }}
                  />
                </div>

                {state.dao && (
                  <div className="NavItem-FlexItems-Dao">
                    <div className="NavItem-FlexP">
                      <img src={bulb} width="20px" alt="" />
                      &nbsp; &nbsp;
                      <p>Stake Knc</p>
                    </div>
                    <div className="NavItem-FlexP">
                      <img src={vote} width="20px" alt="" />
                      &nbsp; &nbsp;
                      <p>Vote</p>
                    </div>
                    <div className="NavItem-FlexP">
                      <img src={mail} width="20px" alt="" />
                      &nbsp; &nbsp;
                      <p>Knc Utility</p>
                    </div>
                    <div className="NavItem-FlexP">
                      <img src={download} width="20px" alt="" />
                      &nbsp; &nbsp;
                      <p>Feature Request</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="NavItem">
                <div className="NavItem-Flex disaapear">
                  <p>Analytics</p>
                </div>
              </div>
              <div
                className="NavItem"
                onMouseEnter={() => {
                  dispatch({ type: "TOGGLE_ABOUT" });
                  setIsAboutHovered(true);
                }}
                onMouseLeave={() => {
                  dispatch({ type: "CLOSE_ALL" });
                  setIsAboutHovered(false);
                }}
              >
                <div className="NavItem-Flex disaapear">
                  <p
                    style={isAboutHovered ? { color: "rgb(34, 159, 121)" } : {}}
                  >
                    About
                  </p>
                  <ChevronDownIcon
                    ml="2px"
                    color={isAboutHovered ? "green" : "white"}
                    transform={
                      isAboutHovered ? "rotate(180deg)" : "rotate(0deg)"
                    }
                    className="ChevronDownIcon"
                    style={{ stroke: "currentColor", strokeWidth: 1.5 }}
                  />
                </div>

                {state.about && (
                  <div className="NavItem-FlexItems-About">
                    <div onClick={navigateToHome} className="NavItem-FlexP">
                      <p>Kyber Swap</p>
                    </div>
                    <div className="NavItem-FlexP">
                      <p>KNC</p>
                    </div>
                    <div className="NavItem-FlexP">
                      <p>Blog</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className="NavBody-2">
            <div
              style={{ cursor: "pointer" }}
              onClick={handleOpenModal}
              className="NavItem BT-Disappear"
            >
              <div className="NavItem-Flex Alarm">
                <div className="walletImage-Div">
                  <img
                    src={state.selectedToken.imgSrc}
                    width="20px"
                    mt="10px"
                    alt=""
                    className="walletImage"
                  />
                </div>
                &nbsp;
                <p>{state.selectedToken.Name}</p>
                <ChevronDownIcon
                  mt="7px"
                  ml="1px"
                  w={25}
                  h={25}
                  color="white"
                />
              </div>
            </div>
            <div className="NavItem BT-Disappear">
              <div className="NavItem-Button">
                <p>Connect</p>
              </div>
            </div>
            <div className="NavItem">
              <div className="NavItem-Flex Alarm-box BT-Disappear">
                <img src={alarm} width="20px" alt="" />
                <img src={vertical} width="20px" alt="" />
                <img
                  onClick={() => dispatch({ type: "TOGGLE_BOX" })}
                  src={box}
                  width="20px"
                  alt=""
                />
              </div>
              {state.box && (
                <div className="NavItem-FlexItems-Box">
                  <div className="NavItem-FlexItems-BoxH1">
                    <p className="NavItem-FlexItems-P1">Legacy</p>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <img src={info} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>Snapshot</p>
                      </div>
                    </div>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <p>My pools</p>
                      </div>
                    </div>
                  </div>

                  <div className="NavItem-FlexItems-BoxH1">
                    <p className="NavItem-FlexItems-P1">Menu</p>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <img src={swapp} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>Bridges Assets</p>
                      </div>
                    </div>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <img src={book1} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>Docs</p>
                      </div>
                    </div>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <img src={book2} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>Roadmap</p>
                      </div>
                    </div>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <img src={chat} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>Forum</p>
                      </div>
                    </div>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <img src={book1} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>Terms</p>
                      </div>
                    </div>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <img src={book2} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>Privact policy</p>
                      </div>
                    </div>
                  </div>

                  <div className="NavItem-FlexItems-BoxH1">
                    <p className="NavItem-FlexItems-P1">Preferences</p>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <p style={{ fontSize: "14px", marginTop: "3px" }}>
                          KyberSwap Guide <span>View</span>
                        </p>
                        &nbsp; &nbsp;
                        <img src={bulb} width="20px" alt="" />
                      </div>
                    </div>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-Details">
                        <p style={{ fontSize: "14px", marginTop: "3px" }}>
                          Notification Center
                        </p>
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                        <img src={mail} width="20px" alt="" />
                      </div>
                    </div>
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-DetailsCountry">
                        <p>Language</p>
                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        <div style={{ display: "flex" }}>
                          <img src={us} width="20px" alt="" />
                          &nbsp;
                          <p>EN</p>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <img
                          onClick={() => dispatch({ type: "TOGGLE_BELOWON" })}
                          src={swapp}
                          width="20px"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="NavItem">
                    <div className="NavItem-Button-Rewarard">
                      <p>Connect</p>
                    </div>
                  </div>
                  <p style={{ textAlign: "center", color: "grey" }}>
                    kyberswap 3.0.com
                  </p>
                </div>
              )}
              {state.languageBox && (
                <div className="NavItem-FlexItems-BoxLang">
                  <div
                    style={{ borderBottom: "none" }}
                    className="NavItem-FlexItems-BoxH1"
                  >
                    <img
                      style={{ cursor: "pointer" }}
                      src={arrowLeft}
                      width="20px"
                      alt=""
                      onClick={() => dispatch({ type: "TOGGLE_BELOWOFF" })}
                    />
                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-DetailsCountry">
                        <img src={us} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>English</p>
                      </div>
                    </div>

                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-DetailsCountry">
                        <img src={turkey} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>Turkey</p>
                      </div>
                    </div>

                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-DetailsCountry">
                        <img src={china} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>中国人</p>
                      </div>
                    </div>

                    <div className="NavItem-FlexBox">
                      <div className="NavItem-FlexBox-DetailsCountry">
                        <img src={southk} width="20px" alt="" />
                        &nbsp; &nbsp;
                        <p>South Korea</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </nav>

      {location.pathname !== "/home" && (
        <nav className="Bottom-nav">
          <section className="Bottom-NavBody">
            <div className="BottomNav-FirstFlex">
              <div className="BottomNav-Four-flex">
                <div className="Bottom-Nav-ImageF">
                  <p>Powered By</p>
                  &nbsp;
                  <div>
                    <img src={logo} width="60px" alt="" />
                  </div>
                </div>
                &nbsp; &nbsp;
                <div className="Bottom-Nav-ImageF">
                  <p>Audited By</p>
                  &nbsp;
                  <div>
                    <img src={whiteicon} width="17px" alt="" />
                  </div>
                </div>
                &nbsp; &nbsp;
                <div className="Bottom-Nav-ImageF">
                  <p>Chain Security</p>
                  &nbsp;
                  <div>
                    <img
                      className="whiteIcon"
                      src={whiteicon}
                      width="17px"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                style={{ display: "flex", cursor: "pointer" }}
                className="NavItem BottomDisappear"
                onClick={handleOpenModal}
              >
                <div className="NavItem-Flex Alarm">
                  <div className="walletImage-Div">
                    <img
                      src={state.selectedToken.imgSrc}
                      width="20px"
                      mt="10px"
                      alt=""
                      className="walletImage"
                    />
                  </div>
                  &nbsp;
                  <p>{state.selectedToken.Name}</p>
                  <ChevronDownIcon
                    mt="7px"
                    ml="1px"
                    w={25}
                    h={25}
                    color="white"
                  />
                </div>
                &nbsp; &nbsp; &nbsp;
                <div className="NavItem">
                  <div
                    style={{
                      color: "#31cb9e",
                      backgroundColor: "#31cb9e4d",
                      cursor: "pointer",
                    }}
                    className="NavItem-Button-Rewarard"
                  >
                    <p>Connect</p>
                  </div>
                </div>
              </div>

              <div className="NavItem BottomDisappear BottomPosition">
                <div className="NavItem-Flex Alarm-box">
                  <img src={alarm} width="20px" alt="" />
                  <img src={vertical} width="20px" alt="" />
                  <img
                    onClick={() => dispatch({ type: "TOGGLE_BOX" })}
                    src={box}
                    width="20px"
                    alt=""
                  />
                </div>
              </div>

              <div className="Bottomnav-RIcons">
                <img src={twitter} width="20px" alt="" />
                &nbsp; &nbsp;
                <img src={telegram} width="20px" alt="" />
                &nbsp; &nbsp;
                <img src={reddit} width="20px" alt="" />
                &nbsp; &nbsp;&nbsp; &nbsp;
                <div class="NavBottom-Button">
                  <span class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="11"
                        fill="none"
                        stroke="black"
                        stroke-width="3"
                      />

                      <circle cx="12" cy="12" r="11" fill="currentcolor" />

                      <text
                        x="12"
                        y="16"
                        text-anchor="middle"
                        font-size="17"
                        fill="black"
                      >
                        ?
                      </text>
                    </svg>
                  </span>
                  &nbsp;
                  <p>Support</p>
                </div>
              </div>
            </div>
          </section>
        </nav>
      )}
    </>
  );
};

export default Navbar;
