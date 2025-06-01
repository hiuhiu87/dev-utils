import { HomeToolItem } from "@/components/HomeToolItem";
import { CodeOutlined, KeyOutlined } from "@ant-design/icons";
import { HomeToolItemProps } from "@/components/HomeToolItem/HomeToolItem";
import { FaCode, FaFingerprint, FaKey } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

const LIST_TOOL_ITEM: Array<HomeToolItemProps> = [
  {
    icon: <FaCode className="text-2xl !text-[#60A5FA]" />,
    title: "Base64",
    description: "Encode/Decode Base64",
    path: "/base64",
  },
  {
    icon: <FaKey className="text-2xl !text-[#60A5FA]" />,
    title: "JWT",
    description: "JSON Web Token",
    path: "/jwt",
  },
  {
    icon: <VscJson className="text-2xl !text-[#60A5FA]" />,
    title: "JSON",
    description: "Format JSON",
    path: "/json",
  },
  {
    icon: <FaFingerprint className="text-2xl !text-[#60A5FA]" />,
    title: "UUID",
    description: "Generate UUID",
    path: "/uuid",
  },
];

export default async function Home({ searchParams }: PropsType) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-5 gap-4">
      {LIST_TOOL_ITEM.map((item, index) => (
        <div key={index} className="mb-6 flex items-center justify-center">
          <HomeToolItem {...item} />
        </div>
      ))}
    </div>
  );
}
