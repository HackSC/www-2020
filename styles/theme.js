const theme = {
  fontSize: {
    small: "14px",
    default: "20px",
    medium: "20px",
    large: "36px",
    xlarge: "52px",
    xxlarge: "68px",
    xxxlarge: "104px"
  },
  fontWeight: {
    light: "300",
    default: "400"
  },
  color: {
    dark: "#4A4A4A",
    orange: "#FBA43A",
    white: "#FFFFFF",
    red: "#FF414D",
    darkGrey: "#757575",
    yellow: "#FEDA22",
    lightGrey: "#B2B2B2",
    pink: "#FF8379"
  },
  media: {
    tablet: style => `
      @media screen and (max-width: 768px) {
        ${style}
      }
    `,
    mobile: style => `
      @media screen and (max-width: 425px) {
        ${style}
      }
    `
  }
};

export default theme;
