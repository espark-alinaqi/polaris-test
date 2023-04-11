import {
  AlphaCard,
  Columns,
  Inline,
  LegacyCard,
  RangeSlider,
  Select,
  Tabs,
  TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import Placeholder from "../components/placeholder";
import {
  Colors,
  Typography,
  option,
  tabs,
  tabsRight,
} from "../helpers/helpers";
import { SketchPicker } from "react-color";
import { useEffect } from "react";

const Home = () => {
  const [rangeValue, setRangeValue] = useState(50);
  const [selected, setSelected] = useState(2);
  const [selectedPreview, setSelectedPreview] = useState(0);
  const [colorTrue, setColorTrue] = useState(false);
  const [fontSize, setFontSize] = useState("");
  const [fontWeight, setFontWeight] = useState("");

  const [colorObj, setColorObj] = useState([]);

  const [color, setColor] = useState("#000");

  const handleRangeSliderChange = useCallback(
    (value: number) => setRangeValue(value),
    []
  );

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  const typogr = Typography.flatMap((item) => {
    return { fontSize: item.fontSize, fontWeight: item.fontWeight };
  });

  useEffect(() => {
    const colors = Colors.flatMap((item) => item.color);

    setColorObj(colors);
  }, [color, fontSize, fontWeight]);

  const handleFontChange = (e, id) => {
    setFontSize(e);
    Typography.map((item) => {
      if (item.id === id) {
        item.fontSize = e;
      }
      return item;
    });
  };
  const handleFontWeightChange = (e, id) => {
    setFontWeight(e);
    Typography.map((item) => {
      if (item.id === id) {
        item.fontWeight = e;
      }
      return item;
    });
  };

  const handleChangeColor = (e, items) => {
    setColor(e);
    Colors.map((item) => {
      if (item.id === items.id) {
        item.color = e.hex;
      }
      return item;
    });
  };

  return (
    <LegacyCard sectioned>
      <Columns gap="4" columns={2}>
        <LegacyCard>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
            <LegacyCard.Section title="Icon Size">
              <Inline gap="6" wrap="flex">
                <Placeholder width="280px">
                  <RangeSlider
                    value={rangeValue}
                    onChange={handleRangeSliderChange}
                    output
                    max={100}
                    min={50}
                  />
                </Placeholder>
                <Placeholder width="100px">
                  <TextField
                    type="number"
                    value={rangeValue}
                    onChange={handleRangeSliderChange}
                    autoComplete="off"
                  />
                </Placeholder>
              </Inline>
            </LegacyCard.Section>
            <LegacyCard.Section title="COLORS">
              <Columns gap="4" columns={2} alignItems={"center"}>
                {Colors?.map((item, index) => {
                  return (
                    <Columns gap="4" columns={2} alignItems={"center"}>
                      <p>{item.content}</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          border: "1px solid gray",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <span
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            background: item.color,
                            marginRight: 13,
                          }}
                          onClick={() => setColorTrue(index)}
                        ></span>
                        <span>{item.color}</span>
                        <div style={{ position: "absolute", top: 300 }}>
                          {colorTrue === index ? (
                            <SketchPicker
                              color={item.color}
                              onChange={(e) => handleChangeColor(e, item)}
                              onChangeComplete={(e) => setColorTrue(false)}
                            />
                          ) : null}
                        </div>
                      </div>
                    </Columns>
                  );
                })}
              </Columns>
            </LegacyCard.Section>
            <LegacyCard.Section title="Typography">
              <Columns gap="4" columns={2} alignItems={"center"}>
                {Typography?.map((item, index) => {
                  return (
                    <Columns gap="4" columns={2} alignItems={"center"}>
                      <p>{item.content}</p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          borderRadius: 5,
                          padding: 5,
                        }}
                      >
                        <TextField
                          type="number"
                          value={item.fontSize}
                          onChange={(e) => handleFontChange(e, item.id)}
                        />
                        <Select
                          value={item.fontWeight}
                          options={option}
                          onChange={(e) => handleFontWeightChange(e, item.id)}
                        />
                      </div>
                    </Columns>
                  );
                })}
              </Columns>
            </LegacyCard.Section>
          </Tabs>
        </LegacyCard>

        <LegacyCard>
          <Tabs
            tabs={tabsRight}
            selected={selectedPreview}
            onSelect={setSelectedPreview}
          >
            <div
              style={{
                background: colorObj[0],
                textAlign: "center",
                padding: 10,
                height: "500px",
              }}
            >
              <svg
                width={`${rangeValue}px`}
                height={`${rangeValue}px`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />

                <g id="Complete">
                  <g id="add-square">
                    <g>
                      <rect
                        data-name="--Rectangle"
                        fill="none"
                        height="20"
                        id="_--Rectangle"
                        rx="2"
                        ry="2"
                        stroke={colorObj[1]}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        width="20"
                        x="2"
                        y="2"
                      />

                      <line
                        fill="none"
                        stroke={colorObj[1]}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="15.5"
                        x2="8.5"
                        y1="12"
                        y2="12"
                      />

                      <line
                        fill="none"
                        stroke={colorObj[1]}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="12"
                        x2="12"
                        y1="15.5"
                        y2="8.5"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              <h1
                style={{
                  color: colorObj[2],
                  fontSize: `${typogr[0].fontSize}px`,
                  fontWeight: `${typogr[0].fontWeight}`,
                }}
              >
                Online store dashboard
              </h1>
              <h3
                style={{
                  color: colorObj[3],
                  fontSize: `${typogr[1].fontSize}px`,
                  fontWeight: `${typogr[1].fontWeight}`,
                }}
              >
                Online store dashboard
              </h3>
            </div>
          </Tabs>
        </LegacyCard>
      </Columns>
    </LegacyCard>
  );
};

export default Home;
