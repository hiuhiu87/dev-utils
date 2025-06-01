"use client";

import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { ThemeProvider } from "next-themes";
import { ConfigProvider } from "antd";
import { antdDarkTheme } from "@/lib/antd/antdTheme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ConfigProvider theme={antdDarkTheme}>
        <SidebarProvider>{children}</SidebarProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
}
