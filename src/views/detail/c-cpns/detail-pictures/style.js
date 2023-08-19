import styled from "styled-components";

export const PicturesWrapper = styled.div`
  position: relative;
  
  > .pictures {
    display: flex;
    height: 600px;
    background-color: #000;

    .left, .right {
      width: 50%;
      height: 100%;

      .item {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        border: 1px solid #000;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 300ms ease-in;
        }

        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 200ms ease;
        }

        &:hover {
          img {
            transform: scale(1.08);
          }
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      .item {
        height: 50%;
        width: 50%;
      }
    }

    /* 层叠 */
    &:hover {
      .cover {
        opacity: 1 !important;
      }
      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
  }

  .show-btn {
    position: absolute;
    right: 8px;
    bottom: 5px;
  }
`