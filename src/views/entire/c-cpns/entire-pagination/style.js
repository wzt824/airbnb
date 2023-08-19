import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    align-items: center;
    flex-direction: column;

    .MuiPaginationItem-page {
      margin: 0 9px;

      &:hover {
        text-decoration: underline;
      }
      &.Mui-selected {
        background-color: #222;
        color: #fff;
      }
    }

    .MuiPaginationItem-icon {
      font-size: 20px;
    }

    .desc {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`