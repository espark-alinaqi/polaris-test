import { Badge, Layout, Page } from "@shopify/polaris";
import React from "react";
import Home from "../screens/home";

const LayoutOne = () => {
  return (
    <Page
      breadcrumbs={[{ content: "Products", url: "#" }]}
      title="Icon Block"
      compactTitle
      fullWidth
      // primaryAction={{ content: "Save", disabled: true }}
    >
      <Layout>
        <Layout.Section>
          <Home />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default LayoutOne;
