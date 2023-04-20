import {
  Badge,
  Button,
  ButtonGroup,
  Frame,
  FullscreenBar,
  Layout,
  Loading,
  Page,
  PageActions,
  Text,
} from "@shopify/polaris";
import React, { useState } from "react";
import Home from "../screens/Home/index";
import { SkeletonLayout } from "../components/skeleton";
import {
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  QuestionMarkInverseMajor,
} from "@shopify/polaris-icons";
import { Colors, Typography, border, option } from "../helpers/helpers";

const LayoutOne = () => {
  const [loadingPage, setLoadingPage] = useState(true);

  setTimeout(() => {
    setLoadingPage(false);
  }, 3000);

  const fullscreenBarMarkup = (
    <FullscreenBar>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div style={{ marginLeft: "1rem", flexGrow: 1 }}>
          <Text variant="headingLg" as="p">
            Icons Trust Badges
          </Text>
        </div>
        <ButtonGroup>
          <Button icon={HomeMinor}> Tutorial </Button>
          <Button icon={OrdersMinor}> Plan List </Button>
          <Button icon={ProductsMinor}> Intigration </Button>
          <Button icon={QuestionMarkInverseMajor}> Help Center </Button>
        </ButtonGroup>
      </div>
    </FullscreenBar>
  );

  // const saveContent = () => {
  //   localStorage.setItem(
  //     "updateJson",
  //     JSON.stringify({
  //       Colors,
  //       Typography,
  //       border,
  //       option,
  //     })
  //   );
  // };

  return (
    <Frame topBar={fullscreenBarMarkup}>
      <Page
        breadcrumbs={[{ content: "Products", url: "#" }]}
        title="Icon Blocks"
        compactTitle
        fullWidth
        divider
      >
        {loadingPage ? (
          <>
            <Loading />
            <SkeletonLayout />
          </>
        ) : (
          <Layout>
            <Layout.Section>
              <Home />
            </Layout.Section>
          </Layout>
        )}
        <div style={{ float: "left" }}>
          <PageActions
            primaryAction={{ content: "Delete", destructive: true }}
            secondaryActions={[
              {
                content: "Save",
                primary: true,
                // onAction: () => {
                //   saveContent();
                // },
              },
            ]}
          />
        </div>
      </Page>
    </Frame>
  );
};

export default LayoutOne;
