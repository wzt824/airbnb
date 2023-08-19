import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 9;

  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 16px;
  border: 1px solid #f2f2f2;
  background-color: #fff;

  .filter {
    display: flex;

    .item {
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: ${props => props.theme.text.primaryColor};
      cursor: pointer;
      user-select: none;

      &:active {
        background-color: #008489;
        border: 1px solid #008489;
        color: #fff;
      }
    }
    .active  {
      background-color: #008489;
      border: 1px solid #008489;
      color: #fff;
    }
  }
`