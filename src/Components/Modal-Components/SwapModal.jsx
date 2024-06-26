import React, { useState } from "react";
import "./SwapModal.css";
import { useDisclosure } from "@chakra-ui/react";
import {
  InfoOutlineIcon,
  CloseIcon,
  StarIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import tokens from "./tokens";

const SwapModal = ({ isOpen, onClose, onSelectToken }) => {
  const [searchValue, setSearchValue] = useState("");

  const [starredTokens, setStarredTokens] = useState([]);

  // Function to handle star icon click for a specific token
  const handleStarClick = (token) => {
    if (starredTokens.includes(token.id)) {
      // Token is already starred, so unstar it
      setStarredTokens(starredTokens.filter((id) => id !== token.id));
    } else {
      // Token is not starred, so star it
      setStarredTokens([...starredTokens, token.id]);
    }
  };
  // Filter tokens based on search input
  const filteredTokens = tokens.filter((token) =>
    token.Name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Determine if there are filtered tokens
  const hasFilteredTokens = filteredTokens.length > 0;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent className="ModalBox">
        <div className="ModalHeader">
          <div className="ModalHeader1">
            <p>Select a Token</p>
            &nbsp;
            <div>
              <InfoOutlineIcon mt="6px" w={18} h={18} color="white" />
            </div>
          </div>
          <div className="ModalHeader2">
            <div>
              <CloseIcon onClick={onClose} w={18} h={18} color="white" />
            </div>
          </div>
        </div>
        <p className="Search-Kyp">
          You can search and select{" "}
          <span style={{ fontWeight: "bold", color: "white" }}>any token</span>{" "}
          on KyberSwap.
        </p>

        <div className="InputSearchDiv">
          <div className="SearchInput-FlexDiv">
            <input
              type="text"
              className="TokenInputSearch"
              placeholder="Search by token, name, or symbol of address"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            &nbsp;
            <SearchIcon mt="5px" w={20} h={20} color="white" />
          </div>
        </div>

        <div className="Modal-IconBox">
          <div className="IconBody-Width">
            {tokens.slice(0, 8).map((token) => (
              <div
                key={token.id}
                className="Icon-Body"
                onClick={() => {
                  onSelectToken(token);
                  onClose();
                }}
              >
                <div>
                  <img src={token.imgSrc} />
                </div>
                &nbsp;
                <p>{token.Abbrevation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="All-Imported">
          <div>
            <p style={{ color: "green" }}>All</p>
          </div>

          <div>
            <p>Imported</p>
          </div>
        </div>
        <div className="CryptoList-Body">
          {hasFilteredTokens
            ? filteredTokens.map((token) => (
                <div key={token.id} className="CryptoList-Flex">
                  <div
                    onClick={() => {
                      onSelectToken(token);
                      onClose();
                    }}
                    className="CryptoList-FlexB1"
                  >
                    <div>
                      <img
                        width="35px"
                        src={token.imgSrc}
                        alt={token.Abbrevation}
                      />
                    </div>
                    &nbsp;
                    <div>
                      <h5>{token.Abbrevation}</h5>
                      <p>{token.Name}</p>
                    </div>
                  </div>

                  <div
                    onClick={() => handleStarClick(token)}
                    className="CryptoList-FlexB2"
                  >
                    <div>
                      <StarIcon
                        mt="5px"
                        w={20}
                        h={20}
                        color={
                          starredTokens.includes(token.id) ? "yellow" : "white"
                        }
                      />
                    </div>
                    &nbsp; &nbsp; &nbsp;
                    <div>
                      <InfoOutlineIcon mt="5px" w={20} h={20} color="white" />
                    </div>
                  </div>
                </div>
              ))
            : tokens.map((token) => (
                <div key={token.id} className="CryptoList-Flex">
                  <div
                    onClick={() => {
                      onSelectToken(token);
                      onClose();
                    }}
                    className="CryptoList-FlexB1"
                  >
                    <div>
                      <img
                        width="35px"
                        src={token.imgSrc}
                        alt={token.Abbrevation}
                      />
                    </div>
                    &nbsp;
                    <div>
                      <h5>{token.Abbrevation}</h5>
                      <p>{token.Name}</p>
                    </div>
                  </div>

                  <div
                    onClick={() => handleStarClick(token)}
                    className="CryptoList-FlexB2"
                  >
                    <div>
                      <StarIcon
                        mt="5px"
                        w={20}
                        h={20}
                        color={
                          starredTokens.includes(token.id) ? "yellow" : "white"
                        }
                      />
                    </div>
                    &nbsp; &nbsp; &nbsp;
                    <div>
                      <InfoOutlineIcon mt="5px" w={20} h={20} color="white" />
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SwapModal;
