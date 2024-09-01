import React from "react";
import Icon from "@/assets/suggestions/icon-suggestions.svg";
import styled from "styled-components";
import SortFeedbacks from "./SortFeedbacks";
import AddButton from "./UI/AddButton";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: #373f68;
  border-radius: var(--border-radius);
  padding: 14px 16px 14px 24px;
  min-height: 72px;
  @media (max-width: 767.98px) {
    img {
      display: none;
    }
    border-radius: 0;
    min-height: 56px;
    padding: 8px 24px;
  }
`;
const Suggestion = styled.div`
  margin-left: 16px;
  font-size: var(--h3-size);
  line-height: var(--h3-line);
  letter-spacing: var(--h3-spacing);
  font-weight: 700;
  color: var(--primary-color);
  @media (max-width: 767.98px) {
    display: none;
  }
`;

const Header: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const { user } = useSelector((state: RootState) => {
    return state.User;
  });
  return (
    <StyledHeader>
      <img src={Icon} alt="Suggestion icon" />
      <Suggestion>
        <span className="count">6</span> Suggestions
      </Suggestion>
      <SortFeedbacks />
      {user && <AddButton />}
      {!user && <LogIn />}
      {user && !isMobile && <LogOut />}
    </StyledHeader>
  );
};

export default Header;
