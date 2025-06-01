import { FaCode, FaFingerprint, FaKey } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

export const TOOL_LIST: [
  {
    label?: string;
    items: {
      title: string;
      url?: string;
      icon?: any;
      items?: { title: string; url: string }[];
    }[];
  },
] = [
  {
    items: [
      {
        title: "Base64",
        icon: <FaCode className="size-6 shrink-0" aria-hidden="true" />,
        url: "/base64",
      },
      {
        title: "JWT",
        url: "/jwt",
        icon: <FaKey className="size-6 shrink-0" aria-hidden="true" />,
      },
      {
        title: "JSON",
        url: "/json",
        icon: <VscJson className="size-6 shrink-0" aria-hidden="true" />,
      },
      {
        title: "UUID",
        url: "/uuid",
        icon: <FaFingerprint className="size-6 shrink-0" aria-hidden="true" />,
      },
    ],
  },
];
