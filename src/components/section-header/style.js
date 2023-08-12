import styled from "styled-components";

export const HeaderWrapper = styled.div`
  color: ${props => props.theme.text.secondaryColor};

  .section-header {
    display: flex;
    align-items: center;

    .content {
      cursor: pointer;

      > .title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 16px;
      }

      > .subtitle {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
  
    .arrow-left {
      width: 12px;
      height: 12px;
      margin-left: 20px;
      color: red;
      background: #fff url(${require('@/assets/img/arrow-right.svg').default});
      display: none;
      cursor: pointer;
    }

    &:hover {
      .arrow-left {
        display: block;
      }
    }
  }
`