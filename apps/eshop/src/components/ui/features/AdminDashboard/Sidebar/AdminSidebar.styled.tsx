import styled from '@emotion/styled'

const SideBarWrapper = styled.div`
  background-color: #424246;
  color: #ffffff;
  font-weight: 500;
`

const CloseButton = styled.button`
  &.ripple {
    position: relative;
    overflow: hidden;
    &:before {
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.6);
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
    }
    &:focus {
      &:before {
        transition: all 0.5s ease-out;
        opacity: 0;
        width: 160px;
        height: 160px;
        margin-top: -80px;
        margin-left: -80px;
      }
    }
  }
  &.button-base {
    -webkit-appearance: none;
    border: 1px solid #383838;
    border-radius: 50%;
    background: #063aca;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    margin: 0.5rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    z-index: 1;
    @media (max-width: 281px) {
      margin: 0.5rem 2rem;
    }
    &:hover {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
    }
    &:focus {
      outline: 0;
    }
  }
`

export const Styled = {
  SideBarWrapper,
  CloseButton,
}
