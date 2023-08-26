const Checkmark = () => {
  return (
    <span
      aria-hidden="true"
      role="img"
      className="material-design-icon check-circle-icon text-[#0C66EE]"
    >
      <svg
        fill="currentColor"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="material-design-icon__svg"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
      </svg>
    </span>
  );
};

export default Checkmark;
