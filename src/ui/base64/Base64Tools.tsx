"use client";
import { Button, Input, Radio } from "antd";
import { useState } from "react";

const { TextArea } = Input;

enum TransferType {
  Encode = "encode",
  Decode = "decode",
}

const Base64Tools = () => {
  const [text, setText] = useState("");
  const [transferText, setTransferText] = useState("");
  const [transferType, setTransferType] = useState(TransferType.Encode);

  const handleEncode = () => {
    try {
      const encodedText = btoa(text);
      setTransferText(encodedText);
    } catch (e) {
      console.error("Invalid input for Base64 encoding", e);
    }
  };

  const handleDecode = () => {
    try {
      const decodedText = atob(text);
      setTransferText(decodedText);
    } catch (e) {
      console.error("Invalid Base64 string", e);
    }
  };

  const handleChangeTransferType = (type: TransferType) => {
    setTransferType(type);
    handleReset();
  };

  const handleReset = () => {
    setText("");
    setTransferText("");
  };

  return (
    <div>
      <div className="flex w-full max-w-full items-center justify-start py-4 pl-0 pr-4">
        <h1 className="text-left text-2xl font-bold">Base64 Encoder/Decoder</h1>
      </div>
      <div className="flex w-full max-w-full items-center justify-start gap-6">
        {/*Input*/}
        <InputOutputBlock
          title="Input"
          value={text}
          onChange={(value) => setText(value)}
        >
          <div className="flex w-[600px] items-center justify-start gap-4">
            <div className="flex w-full items-center justify-start gap-4">
              <Radio.Group
                value={transferType}
                onChange={(e) => handleChangeTransferType(e.target.value)}
                block
                optionType="button"
                buttonStyle="solid"
                className="w-full"
                size="large"
              >
                {Object.values(TransferType).map((type) => (
                  <Radio
                    key={type}
                    value={type}
                    onClick={() => handleChangeTransferType(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
            <Button
              className="w-full rounded-lg bg-green p-2 text-white hover:bg-green-600"
              onClick={
                transferType === TransferType.Encode
                  ? handleEncode
                  : handleDecode
              }
              size="large"
            >
              {transferType === TransferType.Encode ? "Encode" : "Decode"}
            </Button>
          </div>
        </InputOutputBlock>
        <InputOutputBlock
          title="Output"
          value={transferText}
          onChange={(value) => setTransferText(value)}
        >
          <div className="flex w-[600px] items-center justify-start gap-4">
            <Button
              className="w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
              size="large"
            >
              Copy
            </Button>
            <Button
              className="w-full rounded-lg bg-green-500 p-2 text-white hover:bg-green-600"
              size="large"
            >
              Clear
            </Button>
          </div>
        </InputOutputBlock>
      </div>
    </div>
  );
};

const InputOutputBlock = ({
  title,
  value,
  onChange,
  children,
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex w-full max-w-full flex-col items-center justify-start gap-6">
      <div className="flex w-[600px] flex-col rounded-lg bg-[#F3F4F6] p-4 shadow-md dark:bg-[#1F2937]">
        <p className="px-3 pb-4 text-xl text-white">{title}</p>
        <TextArea
          rows={15}
          placeholder={`Enter ${title.toLowerCase()}`}
          className="rounded-lg dark:bg-[#374151] dark:text-white dark:placeholder:text-gray-400"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {children}
    </div>
  );
};

export default Base64Tools;
