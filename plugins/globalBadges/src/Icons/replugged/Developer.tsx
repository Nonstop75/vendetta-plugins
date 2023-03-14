import { findByProps } from "@vendetta/metro";
const { SvgXml } = findByProps("Circle", "Rect", "Shape")

const developer = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
    <path
      d="M10,25C4.5,25,0,29.5,0,35c0,1.1,1.1,2.6,2.4,1.4l3.7-3.7c0,0,2.5-1.2,5,1.2c2.5,2.5,1.2,5,1.2,5 l-3.7,3.7C7.4,43.9,8.9,45,10,45c5.5,0,10-4.5,10-10c0-0.8-0.1-1.5-0.3-2.3l13-13c0.7,0.2,1.5,0.3,2.3,0.3c5.5,0,10-4.5,10-10 c0-1.1-1.1-2.6-2.4-1.4l-3.7,3.7c0,0-2.5,1.2-5-1.2c-2.5-2.5-1.2-5-1.2-5l3.7-3.7C37.6,1.1,36.1,0,35,0c-5.5,0-10,4.5-10,10 c0,0.8,0.1,1.5,0.3,2.3l-13,13C11.5,25.1,10.8,25,10,25"
    />
  </svg>`

export default ({ color }) => <SvgXml height={24} width={24} resizeMode="contain" marginHorizontal={4} xml={developer} fill={color}/>