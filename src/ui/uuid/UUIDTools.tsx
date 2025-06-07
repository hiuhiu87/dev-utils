"use client";

import { Button, InputNumber, Radio } from "antd";
import { useState } from "react";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";
import { FaRegCopy } from "react-icons/fa";
import { useToastify } from "@/hooks/use-toastify";

enum UUIDVersion {
  V1 = "v1",
  V4 = "v4",
}

const UUIDVersions = {
  [UUIDVersion.V1]: {
    title: "UUID v1",
    description:
      "Generates a UUID based on the current timestamp and MAC address.",
  },
  [UUIDVersion.V4]: {
    title: "UUID v4",
    description: "Generates a random UUID.",
  },
};

const UUIDTools = () => {
  const { showToast } = useToastify();

  const [selectedUUIDVersion, setSelectedUUIDVersion] = useState(
    UUIDVersion.V1,
  );

  const [quantity, setQuantity] = useState<number>(1);

  const [uuidList, setUuidList] = useState<string[]>([]);

  const generateUUIDs = () => {
    const uuids = [];
    for (let i = 0; i < quantity; i++) {
      if (selectedUUIDVersion === UUIDVersion.V1) {
        uuids.push(generateV1UUID());
      } else {
        uuids.push(generateV4UUID());
      }
    }
    setUuidList(uuids);
  };

  const generateV1UUID = () => uuidv1();

  const generateV4UUID = () => uuidv4();

  const handleCopyAll = () => {
    if (uuidList.length === 0) {
      showToast({
        title: "No UUIDs to copy",
        message: "No UUIDs to copy. Please generate some first.",
        type: "warning",
      });
      return;
    }
    const textToCopy = uuidList.join("\n");
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        showToast({
          message: "All UUIDs copied to clipboard!",
          type: "success",
        });
      })
      .catch((err) => {
        showToast({
          message: "Failed to copy UUIDs to clipboard.",
          type: "error",
        });
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div>
      <div className="flex w-full max-w-full items-center justify-start py-4 pl-0 pr-4">
        <h1 className="text-left text-2xl font-bold">UUID Utility</h1>
      </div>
      <div className="flex w-full max-w-full items-start justify-start gap-6">
        {/*Input*/}
        <div className="flex min-h-[350px] w-full max-w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col gap-4 rounded-lg bg-[#F3F4F6] p-4 shadow-md dark:bg-[#1F2937]">
            <h2 className="text-left text-xl font-bold text-white">
              UUID Version
            </h2>
            <div className="flex min-w-[500px] items-center justify-start gap-4">
              <Radio.Group
                value={selectedUUIDVersion}
                block
                optionType="button"
                buttonStyle="solid"
                className="w-full"
                size="large"
                onChange={(e) => {
                  setSelectedUUIDVersion(e.target.value);
                }}
              >
                {Object.values(UUIDVersion).map((type) => (
                  <Radio key={type} value={type}>
                    {UUIDVersions[type].title}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
            <h3 className="text-left text-base font-normal">
              {UUIDVersions[selectedUUIDVersion].description}
            </h3>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-lg bg-[#F3F4F6] p-4 shadow-md dark:bg-[#1F2937]">
            <h2 className="text-left text-xl font-bold text-white">Quantity</h2>
            <div className="flex items-center justify-start gap-4">
              <div className="flex items-center gap-3">
                <InputNumber
                  type="number"
                  value={quantity}
                  className="bg-[#374151]"
                  onChange={(value) => {
                    if (value !== undefined && value !== null) {
                      setQuantity(value);
                    }
                  }}
                  min={1}
                  max={100}
                />
                <span>Minimum: 1 / Maximum: 100</span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-4">
            <Button
              className="w-full rounded-lg border-none bg-blue-500 p-2 text-white hover:!bg-blue-600 hover:!text-white"
              size="large"
              type="primary"
              onClick={generateUUIDs}
            >
              Create
            </Button>
            <Button
              className="w-full rounded-lg border-none bg-green-500 p-2 text-white hover:!bg-green-600 hover:!text-white"
              size="large"
              type="primary"
              onClick={handleCopyAll}
            >
              Copy All
            </Button>
          </div>
        </div>
        {/*Output*/}
        <div className="flex min-h-[340px] w-full max-w-full flex-col items-center justify-start gap-4 rounded-lg bg-[#F3F4F6] p-4 shadow-md dark:bg-[#1F2937]">
          <h2 className="text-left text-xl font-bold text-white">Output</h2>
          <div className="flex max-h-[500px] w-[700px] flex-col items-start justify-start gap-4 overflow-y-auto">
            {uuidList?.length > 0 ? (
              uuidList.map((uuid, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between rounded-lg bg-[#E5E7EB] p-2 dark:bg-[#374151]"
                >
                  <span>{uuid}</span>
                  <Button
                    className="rounded-lg border-none p-2 text-white hover:!text-white"
                    size="large"
                    type="text"
                  >
                    <FaRegCopy />
                  </Button>
                </div>
              ))
            ) : (
              <div className="flex w-full items-center justify-center rounded-lg bg-[#E5E7EB] p-4 dark:bg-[#374151]">
                <span>No UUIDs generated yet.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UUIDTools;
