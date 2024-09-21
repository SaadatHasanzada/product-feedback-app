import React from "react";
import styled from "styled-components";
import CheckIcon from "@/assets/shared/icon-check.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setSortBy } from "@/redux/slices/filterSlice";

interface DropdownProps {
  options: { name: string; id?: string }[];
  closeDropdown: () => void;
  selectedOption: { name: string; id?: string };
  type: string;
  isCategory?: boolean;
  setSelectedCategory?: React.Dispatch<
    React.SetStateAction<{
      name: string;
    }>
  >;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  closeDropdown,
  selectedOption,
  type,
  setSelectedCategory,
  isCategory,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <DropdownWrapper $isCategory={isCategory ? isCategory : false}>
      {options.map((option) => (
        <Option
          key={option.id || option.name}
          onClick={() => {
            closeDropdown();
            if (type === "sortByOrder") {
              dispatch(setSortBy(option));
            }
            if (type === "selectCategory") {
              setSelectedCategory!(option);
            }
          }}
        >
          {option.name}
          {option.name === selectedOption.name && (
            <img src={CheckIcon} alt="Check" />
          )}
        </Option>
      ))}
    </DropdownWrapper>
  );
};
const DropdownWrapper = styled.div<{ $isCategory: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 62px;
  border-radius: var(--border-radius);
  background: var(--primary-color);
  box-shadow: var(--box-shadow);
  width: 100%;
  ${({ $isCategory }) => {
    return (
      $isCategory &&
      `
    top:122px;
    `
    );
  }}
`;
const Option = styled.button`
  padding: 12px 24px;
  text-align: left;
  font-weight: 400;
  color: var(--text-secondary);
  font-size: var(--body1-size);
  line-height: var(--body1-line);
  transition: var(--transition);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: var(--button-color);
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid rgb(58, 67, 116, 0.15);
  }
  @media (max-width: 767.98px) {
    font-size: var(--body2-size);
    line-height: var(--body2-line);
  }
`;
export default Dropdown;
