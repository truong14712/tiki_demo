module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: { max: "739px" },
      md: { min: "740px", max: "1023px" },
      lg: { min: "1024px", max: "1280px" },
      "2xl": { min: "1281px" },
    },
    extend: {
      colors: {
        primary: "#1A94FF",
        header: "#0D5CB6",
        yellow: "#FDD835",
        nhat: "#808089",
        primarynhat: "#53afff",
        gia: "#EEEEEE",
        xanh: "#00AB56",
        do: "#FF424E",
        dautrang: "#189EFF",
      },
    },
  },
  plugins: [
    require('@neojp/tailwindcss-line-clamp-utilities')
  ],
  variants: {
    lineClamp: ['responsive']
  }
};
