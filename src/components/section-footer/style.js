import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    color: ${props => props.color};

    &:hover {
      text-decoration: underline;
    }

    .icon {
      /* width: 12px;
      height: 12px; */
      margin-left: 8px;
      /* color: red; */
      /* background: #fff url(${require('@/assets/img/arrow-right.svg').default}); */
      cursor: pointer;
    }
  }
`