import styled from 'styled-components'

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 24px;
    padding: 0 8px;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform-origin: 50% 0%;

    ${props => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.secondaryColor};
      font-weight: ${props => props.theme.text.fontWeight};
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }
  .bar-enter-active {
    transform: scale(1, 0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-exit {
    /* transform: scale(1.0) translateY(0); */
    opacity: 0;
  }

  /* .bar-exit-active  {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 1;
    transition: all 250ms ease;
  } */

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active  {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active  {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
    transition: all 250ms ease;
  }
`