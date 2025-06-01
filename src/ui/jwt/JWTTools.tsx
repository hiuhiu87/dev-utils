"use client";

import { Tabs } from "antd";
import EncodeTab from "./EncodeTab";
import DecodeTab from "./DecodeTab";

const JWTTools = () => {
  const items = [
    {
      key: "decode",
      label: "Decode",
      children: <DecodeTab />,
    },
    {
      key: "encode",
      label: "Encode",
      children: <EncodeTab />,
    },
  ];

  return (
    <div>
      <div className="flex w-full max-w-full items-center justify-start py-4 pl-0 pr-4">
        <h1 className="text-left text-2xl font-bold">
          JWT Extractor / Generator
        </h1>
      </div>
      <div className="flex w-full max-w-full items-center justify-start gap-6">
        <Tabs
          items={items}
          className="w-full"
          defaultActiveKey="decode"
          indicator={{ size: (origin) => origin + 10, align: "center" }}
          size="large"
        />
      </div>
    </div>
  );
};

export default JWTTools;
