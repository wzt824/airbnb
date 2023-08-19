import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;

  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 1;
    left: -12px;
    width: 24px;
    height: 24px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &.left {
      background: #fff url(${require("@/assets/img/arrow-left.svg").default}) center/12px 12px no-repeat;
    }

    &.right {
      left: auto;
      right: -12px;;
      /* background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%); */

      background: #fff url(${require("@/assets/img/arrow-right.svg").default}) center/12px 12px no-repeat;
    }
  }
  
`