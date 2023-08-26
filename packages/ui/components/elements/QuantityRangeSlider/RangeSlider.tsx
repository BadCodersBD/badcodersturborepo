import { Col, InputNumber, theme, ConfigProvider, Slider } from "antd";
import { useThemeContext } from "ui/components/contexts/ThemeContext";
import { baseTheme } from "../../foundations/theming";

interface Props {
  initialValue: number;
  handleOnChange: (value: number) => void;
}

const RangeSlider = ({ initialValue, handleOnChange }: Props) => {
  const { isDarkMode } = useThemeContext();
  const { defaultAlgorithm, darkAlgorithm } = theme;

  return (
    <div className="mt-3 flex flex-col">
      <ConfigProvider
        theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}
      >
        <Col className="w-40">
        <div className="flex justify-between text-lg">
          <p>Min</p>
          <p>Max</p>
        </div>
          <Slider
            railStyle={{ backgroundColor: `${baseTheme.colors.neutrals.light_black}` }}
            trackStyle={{ backgroundColor: `${baseTheme.colors.primary.blue}`, height: '.3rem', marginTop: '-.01rem' }}
            min={1}
            max={500}
            onChange={handleOnChange}
            value={initialValue}
          />
        </Col>
        <Col>
          <InputNumber
            min={1}
            max={500}
            value={initialValue}
            onChange={handleOnChange}
            maxLength={500}
          />
        </Col>
      </ConfigProvider>
    </div>
  );
};

export default RangeSlider;
