import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-weight: ${props => props.theme.text.fontWeight};
  color: ${props => props.theme.text.primaryColor};

  .btns {
    display: flex;
    align-items: center;

    span {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      box-sizing: content-box;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: #999;
    cursor: pointer;
    position: relative;

    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 60px;
      right: 0;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      color: #666;
      font-weight: 500;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`