import type { Ref, RefObject } from "react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { useLocaleInfo } from "../../contexts";
import { PlayButton } from "../PlayButton";
import { VisuallyHidden } from "../VisuallyHidden";
import { ButtonContainer, Styled } from "./Video.styled";

export type VideoProps = {
  autoPlay?: boolean;
  ariaLabelPlay?: string;
  ariaLabelPause?: string;
  titlePlayButton?: string;
  titlePauseButton?: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  transcript?: string;
  src: string | Array<{ src: string; type: string }>;
  title: string;
  customRef?: RefObject<HTMLVideoElement>;
  onPlay?: () => Promise<void>;
  role?: string;
  /** for managing the play button state outside of the component */
  isPlaying?: boolean;
  track?: string;
};

type VideoRef = {
  play: () => Promise<void>;
  pause: () => void;
};

export const Video = forwardRef(
  (
    {
      autoPlay = false,
      ariaLabelPlay = " ",
      controls = true,
      loop = false,
      titlePlayButton,
      muted = false,
      playsInline = false,
      poster,
      transcript,
      src,
      customRef,
      title,
      isPlaying = false,
      track,
      onPlay,
      role,
    }: VideoProps,
    ref: Ref<VideoRef>
  ) => {
    const [hasStarted, setHasStarted] = useState(autoPlay);
    const defaultRef = useRef<HTMLVideoElement>(null);
    const videoRef = customRef || defaultRef;

    useEffect(() => {
      if (autoPlay) {
        return;
      }
      setHasStarted(isPlaying);
    }, [isPlaying, autoPlay]);

    async function play() {
      if (onPlay) {
        await onPlay();
        return;
      }
      await videoRef.current?.play();
    }

    function pause() {
      setHasStarted(false);
      videoRef.current?.pause();
    }

    async function handlePlayButton() {
      setHasStarted(true);
      await play();
    }

    useImperativeHandle(ref, () => ({
      play,
      pause,
    }));

    const localeInfo = useLocaleInfo();

    return (
      <>
        <Styled.VideoContainer>
          <Styled.Video
            autoPlay={autoPlay}
            controls={hasStarted && controls}
            crossOrigin="anonymous"
            data-testid="video"
            loop={loop}
            muted={muted || autoPlay}
            playsInline={playsInline}
            poster={poster}
            preload="metadata"
            ref={videoRef}
            role={role}
            title={title}
          >
            {hasStarted &&
              (typeof src === "string" ? (
                <source data-testid="video-source" src={src} />
              ) : (
                src.map((src) => (
                  <source
                    data-testid="video-source"
                    key={src.src}
                    src={src.src}
                    type={src.type}
                  />
                ))
              ))}

            {track && (
              <track
                default
                kind="captions"
                label={localeInfo?.languageCode || "en"}
                src={track}
                srcLang={localeInfo?.locale || "en-gb"}
              ></track>
            )}
          </Styled.Video>
          {!autoPlay && !hasStarted && controls && (
            <>
              <ButtonContainer>
                <PlayButton
                  ariaLabel={ariaLabelPlay}
                  hiddenLabel={ariaLabelPlay + title}
                  onClick={handlePlayButton}
                  title={titlePlayButton}
                />
              </ButtonContainer>
            </>
          )}
        </Styled.VideoContainer>
        {transcript && <VisuallyHidden>{transcript}</VisuallyHidden>}
      </>
    );
  }
);

Video.displayName = "Video";
