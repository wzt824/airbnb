// css in js
import styled from "styled-components"

export const HeaderWrapper = styled.div`

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .header-content {
    position: relative;
    z-index: 99;
    transition: all 250ms ease;
    background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0)': 'rgba(255, 255, 255, 1)'};
    border-bottom: ${props => props.theme.isAlpha ? 'none' : '1px solid #eee'};

    .header-top {
      display: flex;
      align-items: center;
      height: 80px;
      padding: 0 24px;
    }
  }
  > .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.isSearch ? '100px' : 0};
`