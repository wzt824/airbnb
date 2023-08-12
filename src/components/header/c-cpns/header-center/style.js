import styled from 'styled-components'

export const CenterWrapper = styled.div`
  .search-bar {
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

    ${props => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: ${props => props.theme.text.secondaryColor};
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
`