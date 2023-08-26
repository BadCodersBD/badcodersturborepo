import styled from "@emotion/styled";

const StayConnected = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1.5, 0)};
  h5 {
    color: ${({ theme }) => theme.colors.neutrals.full_white};
    font-size: ${({ theme }) => theme.typography.h5Sans.fontSize};
    font-weight: 400 !important;
    text-transform: uppercase;
    padding-bottom: ${({ theme }) => theme.spacing(1)};
  }
  p {
    color: ${({ theme }) => theme.colors.neutrals.full_white};
    opacity: 0.8;
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  }
  input {
    padding: ${({ theme }) => theme.spacing(1, 1)};
  }
`;
const SubscribeButton = styled.div`
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  width: inherit;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  input {
    height: 60%;
    width: 65%;
    font-size: 1.05rem;
    padding: ${({ theme }) => theme.spacing(0, 1)};
    outline: none;
    border-radius: ${({ theme }) => theme.spacing(0.5)} 0 0
      ${({ theme }) => theme.spacing(0.5)};
    color: ${({ theme }) => theme.colors.neutrals.full_black};
    margin-left: 0.1rem;
  }
  button {
    height: 60%;
    width: 35%;
    border-radius: 0 ${({ theme }) => theme.spacing(0.5)}
      ${({ theme }) => theme.spacing(0.5)} 0;
    background-color: ${({ theme }) => theme.colors.primary.green};
    color: ${({ theme }) => theme.colors.neutrals.full_white};
    font-size: 1.125rem;
    font-weight: 500;
    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.secondary.medium_dark_green};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.primary.blue};
    }
  }
`;

export const Styled = {
  StayConnected,
  SubscribeButton,
};
