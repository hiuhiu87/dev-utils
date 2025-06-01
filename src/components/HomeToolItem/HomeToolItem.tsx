"use client";

import { clsx } from "clsx";
import { useRouter } from "next/navigation";

export type HomeToolItemProps = {
  icon: any;
  title: string;
  description: string;
  wrapperClassname?: string;
  path: string;
};

const HomeToolItem = (props: HomeToolItemProps) => {
  const { icon, title, description, wrapperClassname, path } = props;

  const router = useRouter();

  return (
    <div
      className={clsx(
        "home-tool-item hover:shadow-3xl transition-all duration-200 ease-in-out",
        wrapperClassname,
      )}
      onClick={() => router.push(path)}
    >
      <div className="flex min-w-44 max-w-44 h-46 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md hover:bg-[#1F3A8A] dark:bg-[#1F2937] dark:hover:bg-[#1F3A8A]">
        {icon}
        <h2 className="flex h-16 w-16 items-center justify-center rounded-full text-2xl text-gray-5 dark:text-gray-4">
          {title}
        </h2>
        <span className="w-full text-wrap text-center text-gray-5 dark:text-gray-4">
          {description}
        </span>
      </div>
    </div>
  );
};

export default HomeToolItem;
