import React from "react";
import { previewData } from "../helpers/helpers";
import { Grid } from "@shopify/polaris";
import { getAllContent, getIconsWithIndex } from "../utils/utils";

const Preview = ({ iconSize, blockSize, gap }) => {
  const previewJson = getAllContent(iconSize, blockSize, gap);


  return (
    <div
      style={{
        textAlign: "center",
        padding: 10,
        height: "98vh",
      }}
    >
      <div style={{ background: "#9988", borderRadius: 10, padding: 10 }}>
        <Grid gap={{ xl: `${previewJson.blockSpacing}px` }}>
          {previewData.map((item, index) => {
            return (
              <Grid.Cell columnSpan={{ lg: previewJson.blockSize }}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px 5px 20px 5px",
                    background: previewJson.bgColor,
                    borderTop: `${previewJson.borderTop}px solid gray`,
                    borderBottom: `${previewJson.borderBottom}px solid gray`,
                  }}
                >
                  {getIconsWithIndex(index, iconSize, previewJson.iconColor)}
                  <h1
                    style={{
                      color: previewJson.titleColor,
                      fontSize: `${previewJson.titleFontSize}px`,
                      fontWeight: `${previewJson.titleFontStyle}`,
                      lineHeight: 1,
                    }}
                  >
                    {item.heading}
                  </h1>
                  <h3
                    style={{
                      color: previewJson.subTitleColor,
                      fontSize: `${previewJson.subTitleFontSize}px`,
                      fontWeight: `${previewJson.subTitleFontStyle}`,
                      lineHeight: 1,
                    }}
                  >
                    {item.subtitle}
                  </h3>
                </div>
              </Grid.Cell>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Preview;
