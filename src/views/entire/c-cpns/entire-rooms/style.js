import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 30px 20px;

  .title {
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text.secondaryColor};
    margin: 0 0 10px 10px;
  }
  
  .room-list {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .8);
  }
`