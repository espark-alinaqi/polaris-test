import {
  GiCrosshair,
  GiHillConquest,
  GiSecurityGate,
  GiThreeFriends,
} from "react-icons/gi";
import { Colors, Typography } from "../helpers/helpers";
import { border } from "./../helpers/helpers";

export const getIconsWithIndex = (index, iconSize, iconColor) => {
  return index === 0 ? (
    <GiHillConquest size={iconSize} color={iconColor} />
  ) : index === 1 ? (
    <GiCrosshair size={iconSize} color={iconColor} />
  ) : index === 2 ? (
    <GiSecurityGate size={iconSize} color={iconColor} />
  ) : index === 3 ? (
    <GiThreeFriends size={iconSize} color={iconColor} />
  ) : null;
};

export const getFontSizeStyle = () =>
  Typography.flatMap((item) => {
    return {
      fontSize: item.fontSize,
      fontWeight: item.fontWeight,
    };
  });

export const getAllContent = (iconSize, blockSize, gap) => {
  const colors = Colors.flatMap((item) => item.color);
  const typogr = getFontSizeStyle();
  return {
    iconSize: iconSize,
    blockSize: blockSize,
    blockSpacing: gap,
    titleFontSize: typogr[0].fontSize,
    subTitleFontSize: typogr[2].fontSize,
    titleFontStyle: typogr[1].fontWeight,
    subTitleFontStyle: typogr[3].fontWeight,
    bgColor: colors[0],
    iconColor: colors[1],
    titleColor: colors[2],
    subTitleColor: colors[3],
    borderTop: border[0].borderWidth,
    borderBottom: border[1].borderWidth,
  };
};
