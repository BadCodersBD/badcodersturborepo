import styled from "@emotion/styled";

export const ButtonContainer = styled("div")(
  () => `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3D(-50%, -50%, 0);
  `
);

const StoryBookContainer = styled("div")(
  () => `
    width: 30rem;
  `
);

const Video = styled("video")(
  ({ theme }) => `
    border-radius: ${theme.borders.radii.md};
    width: 100%;
    `
);

const VideoContainer = styled("div")(
  () => `
    position: relative;
    display: flex;
    align-items: center;
  `
);

export const Styled = {
  ButtonContainer,
  StoryBookContainer,
  Video,
  VideoContainer,
};
