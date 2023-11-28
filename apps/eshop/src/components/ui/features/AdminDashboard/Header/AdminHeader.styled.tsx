import styled from '@emotion/styled'

const HeaderWrapper = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #353535;
`

const RippleButton = styled.button`
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
    border: 1px solid #000000;
    border-radius: 10px;
    background: #000000;
    color: #fff;
    vertical-align: middle;
    border-radius: 3px;
    line-height: 36px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 1em;
    margin: 0 0.25em;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    z-index: 1;
    &:hover {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
    }
    &:focus {
      outline: 0;
    }
  }
`

export const Styled = {
  HeaderWrapper,
  RippleButton,
}
