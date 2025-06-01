import { Button, Input } from "antd";

const { TextArea } = Input;

const EncodeTab = () => {
  return (
    <div className="flex w-full max-w-full flex-col items-center justify-start gap-6">
      <div className="flex w-[600px] flex-col rounded-lg bg-[#F3F4F6] p-4 shadow-md dark:bg-[#1F2937]">
        <p className="px-3 pb-4 text-xl text-white">JWT Input</p>
        <TextArea
          rows={15}
          className="rounded-lg dark:bg-[#374151] dark:text-white dark:placeholder:text-gray-400"
        />
      </div>
      <Button
        className="w-full rounded-lg bg-green p-2 text-white hover:bg-green-600"
        size="large"
      >
        Decode JWT
      </Button>
    </div>
  );
};

export default EncodeTab;
