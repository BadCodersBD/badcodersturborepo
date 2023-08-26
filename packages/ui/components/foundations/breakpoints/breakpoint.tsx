import { size } from "./device";
const Breakpoint = () => {
  return (
    <div className="mt-10">
      <h2>import size, minimumDevice, maximumDevice from breakpoints/device</h2>
      <div>xs: {size.xs}</div>
      <div>ms: {size.ms}</div>
      <div>sm: {size.sm} </div>
      <div>md: {size.md}</div>
      <div>lg: {size.lg}</div>
      <div>xl: {size.xl}</div>
      <div>x2l: {size.x2l}</div>
      <div>x3l: {size.x3l}</div>
      <div>x4l: {size.x4l}</div>
    </div>
  );
};

export default Breakpoint;
