import {
  AlphaCard,
  Grid,
  LegacyCard,
  RangeSlider,
  Select,
  Tabs,
  Text,
  TextField,
  Toast,
} from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import {
  Colors,
  Typography,
  border,
  option,
  tabs,
  tabsRight,
} from "../../helpers/helpers";

import Preview from "../../components/preview";
import ColorInput from "../../components/colorInput";

const Home = () => {
  const [iconSize, setIconSize] = useState(50);
  const [selected, setSelected] = useState(2);
  const [selectedPreview, setSelectedPreview] = useState(0);
  const [colorTrue, setColorTrue] = useState(false);
  const [fontSize, setFontSize] = useState("");
  const [fontWeight, setFontWeight] = useState("");
  const [borderWidth, setBorderWidth] = useState("");
  const [blockSize, setBlockSize] = useState(3);
  const [gap, setGap] = useState(0);
  const [active, setActive] = useState(false);
  const [content, setContent] = useState("");
  const [colorsProvider, setColorsProvider] = useState("");

  const [color, setColor] = useState("#000");

  const handleRangeSliderChange = useCallback(
    (value: number) => setIconSize(value),
    []
  );

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  useEffect(() => {
    if (blockSize >= 12) {
      setActive(true);
      setContent("Block size limit execd");
    } else if (gap >= 10) {
      setActive(true);
      setContent("Block Space limit execd");
    }
  }, [blockSize, gap, fontSize, fontWeight, borderWidth, color]);
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content={content} onDismiss={toggleActive} error />
  ) : null;

  const handleFontChange = (e, id) => {
    setFontSize(e);
    Typography.map((item) => {
      if (item.id === id) {
        item.fontSize = e;
      }
      return item;
    });
  };

  const handleBorderChange = (e, id) => {
    setBorderWidth(e);
    border.map((item) => {
      if (item.id === id) {
        item.borderWidth = e;
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
    <Grid gap="4" columns={2}>
      <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
        <LegacyCard>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
            <LegacyCard.Section title="Icon Size">
              <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <RangeSlider
                    value={iconSize}
                    onChange={handleRangeSliderChange}
                    output
                    max={100}
                    min={50}
                  />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <TextField
                    type="number"
                    value={iconSize}
                    onChange={handleRangeSliderChange}
                    autoComplete="off"
                    min={50}
                  />
                </Grid.Cell>
              </Grid>
            </LegacyCard.Section>
            <LegacyCard.Section title="COLORS">
              <Grid>
                {Colors?.map((item, index) => {
                  return (
                    <Grid.Cell
                      columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
                    >
                      <Grid>
                        <Grid.Cell
                          columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
                        >
                          <Text>{item.content}</Text>
                        </Grid.Cell>
                        <Grid.Cell
                          columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
                        >
                          <ColorInput
                            setColorTrue={setColorTrue}
                            index={index}
                            item={item}
                            colorTrue={colorTrue}
                            handleChangeColor={handleChangeColor}
                          />
                        </Grid.Cell>
                      </Grid>
                    </Grid.Cell>
                  );
                })}
              </Grid>
            </LegacyCard.Section>
            <LegacyCard.Section title="Typography">
              <Grid>
                {Typography?.map((item) => {
                  return (
                    <>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
                      >
                        {item.fontSize && (
                          <TextField
                            label={item.content}
                            type="number"
                            value={item.fontSize}
                            onChange={(e) => handleFontChange(e, item.id)}
                            suffix="px"
                            min={0}
                          />
                        )}
                        {item.fontWeight && (
                          <Select
                            label={item.content}
                            value={item.fontWeight}
                            options={option}
                            onChange={(e) => handleFontWeightChange(e, item.id)}
                          />
                        )}
                      </Grid.Cell>
                    </>
                  );
                })}
              </Grid>
            </LegacyCard.Section>
            <LegacyCard.Section title="SPACING">
              <Text fontWeight="bold" alignment="start">
                Block Size
              </Text>
              <br />
              <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <RangeSlider
                    value={blockSize}
                    onChange={(e) => setBlockSize(e)}
                    output
                    max={12}
                    min={3}
                  />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <TextField
                    type="number"
                    value={blockSize}
                    onChange={(e) => setBlockSize(e)}
                    autoComplete="off"
                    max={12}
                    min={0}
                  />
                </Grid.Cell>
              </Grid>
            </LegacyCard.Section>
            <AlphaCard roundedAbove="0" background="bg">
              <Text fontWeight="bold" alignment="start">
                BORDER LOCATION
              </Text>
              <br />
              <Grid>
                {border?.map((item) => {
                  return (
                    <>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}
                      >
                        <TextField
                          label={item.content}
                          type="number"
                          value={item.borderWidth}
                          onChange={(e) => handleBorderChange(e, item.id)}
                          suffix="px"
                          min={0}
                        />
                      </Grid.Cell>
                    </>
                  );
                })}
              </Grid>
            </AlphaCard>
            <AlphaCard >
              <Text fontWeight="bold" alignment="start">
                Spacing in Between Blocks
              </Text>
              <br />
              <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <RangeSlider
                    value={gap}
                    onChange={(e) => setGap(e)}
                    output
                    max={10}
                    min={0}
                  />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                  <TextField
                    type="number"
                    value={gap}
                    onChange={(e) => setGap(e)}
                    autoComplete="off"
                    min={0}
                  />
                </Grid.Cell>
              </Grid>
            </AlphaCard>
          </Tabs>
        </LegacyCard>
      </Grid.Cell>
      <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
        <AlphaCard padding={0}>
          <Tabs
            tabs={tabsRight}
            selected={selectedPreview}
            onSelect={setSelectedPreview}
          >
            <Preview iconSize={iconSize} blockSize={blockSize} gap={gap} />
          </Tabs>
        </AlphaCard>
      </Grid.Cell>
      {toastMarkup}
    </Grid>
  );
};

export default Home;
