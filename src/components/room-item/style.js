import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${props => props.itemWidth};
  padding: 8px;
  margin: 8px 0;
  color: ${props => props.theme.text.primaryColor};
  cursor: pointer;
  flex-shrink: 0;

  .inner {
    width: 100%;

    .cover {
      position: relative;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .slider {
      position: relative;
      cursor: pointer;
      > .control {
        color: #fff;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: none;
        justify-content: space-between;

        > .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
          }
        }
      }

      &:hover {
        > .control {
          display: flex;
        }
      }
    }

    .indicator {
      width: 100px;
      position: absolute;
      z-index: 9;
      bottom: 10px;
      right: 0;
      left: 0;
      margin: auto;

      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
            background-color: #cd5757;
          }
        }
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${props => props.verifyColor};
    }

    .name {
      font-size: 16px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      margin: 8px 0;
    }
    .MuiRating-icon {
      margin-right: -2px;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${props => props.theme.text.primaryColor};

      .count {
        margin: 0 2px 0 4px;
      }

      .extra {
        margin-right: -3px;
      }
    }
  }
`