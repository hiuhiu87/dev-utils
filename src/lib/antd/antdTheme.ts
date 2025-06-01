import { ThemeConfig } from "antd/es/config-provider/context";

export const antdDarkTheme: ThemeConfig = {
  components: {
    Radio: {
      buttonBg: "#374151",
      buttonCheckedBg: "#1F3A8A",
      buttonCheckedColorDisabled: "#FFFFFF",
      buttonColor: "#FFFFFF",
      colorBorder: "transparent",
    },
    Button: {
      colorPrimary: "#1F3A8A",
      colorPrimaryHover: "#1F3A8A",
      colorPrimaryActive: "#1F3A8A",
      colorPrimaryTextHover: "#FFFFFF",
      colorPrimaryTextActive: "#FFFFFF",
      colorPrimaryText: "#FFFFFF",
    },
    InputNumber: {
      colorBorder: "transparent",
      activeBg: "#374151",
      activeBorderColor: "transparent",
      hoverBg: "#374151",
      hoverBorderColor: "transparent",
      handleBg: "#374151",
      handleBorderColor: "transparent",
      colorText: "#FFFFFF",
    },
    Input: {
      activeBorderColor: "transparent",
      hoverBorderColor: "transparent",
      colorBorder: "transparent",
    },
    Tabs: {
      cardBg: "#374151",
      itemActiveColor: "#FFFFFF",
      itemColor: "#FFFFFF",
      itemSelectedColor: "#1F3A8A",
      itemHoverColor: "#FFFFFF",
      colorText: "#FFFFFF",
      inkBarColor: "#1F3A8A",
    },
    Table: {
      headerBg: "#111827",
      headerColor: "#fff",
      rowHoverBg: "#374151",
      colorBgContainer: "#1F2937",
      colorText: "#fff",
      colorBorder: "#374151",
      borderColor: "#374151",
    },
  },
};

export const antdLightTheme: ThemeConfig = {
  components: {
    Radio: {
      buttonBg: "#FFFFFF",
      buttonCheckedBg: "#1F3A8A",
      buttonCheckedColorDisabled: "#000000",
      buttonColor: "#000000",
      colorBorder: "#D1D5DB", // light gray border
    },
    Button: {
      colorPrimary: "#1F3A8A",
      colorPrimaryHover: "#1E40AF",
      colorPrimaryActive: "#1E3A8A",
      colorPrimaryTextHover: "#FFFFFF",
      colorPrimaryTextActive: "#FFFFFF",
      colorPrimaryText: "#FFFFFF",
    },
    InputNumber: {
      colorBorder: "#D1D5DB",
      activeBg: "#FFFFFF",
      activeBorderColor: "#1F3A8A",
      hoverBg: "#F9FAFB",
      hoverBorderColor: "#1F3A8A",
      handleBg: "#F3F4F6",
      handleBorderColor: "#D1D5DB",
      colorText: "#111827",
    },
    Input: {
      activeBorderColor: "#1F3A8A",
      hoverBorderColor: "#1F3A8A",
      colorBorder: "#D1D5DB",
    },
    Tabs: {
      cardBg: "#F9FAFB",
      itemActiveColor: "#1F3A8A",
      itemColor: "#374151",
      itemSelectedColor: "#1F3A8A",
      itemHoverColor: "#1E40AF",
      colorText: "#1F2937",
      inkBarColor: "#1F3A8A",
    },
    Table: {
      headerBg: "#111827",
      headerColor: "#fff",
      rowHoverBg: "#374151",
      colorBgContainer: "#1F2937",
      colorText: "#fff",
      colorBorder: "#374151",
    },
  },
};
