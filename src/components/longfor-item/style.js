import styled from "styled-components"

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: 20%;

  > .inner {
    position: relative;
    padding: 8px;

    .cover {
      width: 100%;
      border-radius: 3px;
    }

    .bg-cover {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      height: 60%;
      border-radius: 3px;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
    }

    .info {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;

      .city {
        font-size: 18px;
        font-weight: 600;
      }
      .price {
        font-size: 15px;
        margin-top: 8px;
      }
    }
  }
`