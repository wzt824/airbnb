import styled from "styled-components";

export const SectionsWrapper = styled.div`
  display: flex;
  width: 850px;
  height: 66px;
  border-radius: 32px;
  background-color: #fff;
  border: 1px solid ${props => props.theme.isAlpha ? '#fff' : '#d4cfcf'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .search-item {
    flex: 1;
    display: flex;
    align-items: center;
    border-radius: 32px;
    cursor: pointer;

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30px;

      .title {
        font-size: 12px;
        font-weight: 800;
        color: #484848;
      }

      .desc {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
      }
    }

    .divider {
      height: 24px;
      width: 1px;
      background-color: #ddd;
    }

    &.search-active {
      background-color: #f5f5f5;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`