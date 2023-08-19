import styled from 'styled-components'

export const BrowserWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  z-index: 9999;

  > .top {
    width: 100%;
    height: 86px;
    padding: 15px 25px 0;
    color: rgb(255, 255, 255);
    font-size: 28px;
    display: flex;
    justify-content: flex-end;

    .close-btn {
      cursor: pointer;
    }
  }

  > .slider {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;

    > .control {
      color: #fff;
      position: absolute;
      z-index: 1;
      left: 20px;
      top: 0;
      right: 20px;
      bottom: 0;
      justify-content: space-between;
      display: flex;

      > .btn {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          cursor: pointer;
        }
      }
    }

    > .container {
      position: relative;
      width: 100% !important;
      max-width: 105vh !important;
      height: 100%;
      overflow: hidden;

      img {
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        user-select: none;
      }

      /* 动画的样式 - 进入的动画样式 */
      .pic-enter {
        transform: translateX(${props => props.next ? '100%' : '-100%'});
        opacity: 0;
      }
      
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      /* 动画的样式 - 离开的动画样式 */
      .pic-exit {
        opacity: 1;
      }
      .pic-exit {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  > .indicator {
    height: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    color: #fff;

    .info {
      position: absolute;
      /* bottom: 10px; */
      max-width: 105vh;

      .desc {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 12px;

        .toggle {
          cursor: pointer;
        }
      }

      > .list {
        overflow: hidden;
        transition: height 200ms ease;
        height: ${props => props.showPicList ? '67px' : '0'};
        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`