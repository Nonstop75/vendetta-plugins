import { findByProps } from "@vendetta/metro";
const { SvgXml } = findByProps("Circle", "Rect", "Shape")

const early = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <path
      fill="#7289da"
      d="M22.5,0C10.1,0,0,10.1,0,22.5C0,34.9,10.1,45,22.5,45S45,34.9,45,22.5C45,10.1,34.9,0,22.5,0z M22.5,40 C12.8,40,5,32.2,5,22.5C5,12.8,12.8,5,22.5,5S40,12.8,40,22.5C40,32.2,32.2,40,22.5,40z"
    />
    <path
      fill="#7289da"
      d="M32.9,27l-9.1-5.3v-13c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3v13.8c0,0.1,0,0.1,0,0.2 c0,0.1,0,0.2,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0.1,0.1,0.1,0.1l9.7,5.6 c0.6,0.3,1.4,0.1,1.7-0.5C33.7,28.2,33.5,27.4,32.9,27z"
    />
  </svg>`

export default () => <SvgXml height={24} width={24} resizeMode="contain" marginHorizontal={4} xml={early} />