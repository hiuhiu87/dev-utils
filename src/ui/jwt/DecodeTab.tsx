"use client";

import { Button, Input, Table, Tabs } from "antd";
import React, { useMemo, useState } from "react";
import { EXPLAIN_MAPS } from "./constants";

const { TextArea } = Input;

const DEFAULT_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

const DecodeTab = () => {
  const [jwt, setJwt] = useState(DEFAULT_JWT);

  const getDecodedJwt = (jwt: string) => {
    if (!jwt) return null;

    const parts = jwt.split(".");
    if (parts.length !== 3) return null;

    try {
      const header = JSON.parse(atob(parts[0]));
      const payload = JSON.parse(atob(parts[1]));
      return { header, payload };
    } catch (error) {
      console.error("Invalid JWT format", error);
      return null;
    }
  };

  return (
    <div className="flex w-full max-w-full items-start justify-evenly gap-6">
      <InputSection jwt={jwt} setJwt={setJwt} />
      <div className="flex w-full max-w-full flex-col items-start justify-start gap-6">
        <DecodeView
          title="Decoded Header"
          json={getDecodedJwt(jwt)?.header || {}}
        />
        <DecodeView
          title="Decoded Payload"
          json={getDecodedJwt(jwt)?.payload || {}}
        />
      </div>
    </div>
  );
};

const InputSection = ({
  setJwt = (value: string) => {},
  jwt = DEFAULT_JWT,
}: {
  setJwt: (value: string) => void;
  jwt: string;
}) => (
  <div className="flex w-full max-w-full flex-col items-center justify-start gap-6">
    <div className="flex min-w-[600px] flex-col rounded-lg bg-[#F3F4F6] p-4 shadow-md dark:bg-[#1F2937]">
      <p className="px-3 pb-4 text-xl text-white">JWT Input</p>
      <TextArea
        rows={15}
        className="rounded-lg dark:bg-[#374151] dark:text-white dark:placeholder:text-gray-400"
        placeholder="Paste your JWT here"
        defaultValue={DEFAULT_JWT}
        onChange={(e) => setJwt(e.target.value)}
        value={jwt}
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

const DecodeView = ({
  title,
  json,
}: {
  title: string;
  json: string | Record<string, any>;
}) => (
  <div className="flex w-full min-w-[600px] max-w-full flex-col items-start justify-start gap-4">
    <h2 className="text-xl font-bold text-white">{title}</h2>
    <Tabs
      items={[
        {
          key: "json",
          label: "JSON",
          children: (
            <div className="w-full min-w-[600px] max-w-full rounded-lg bg-[#F3F4F6] p-4 shadow-md dark:bg-[#1F2937]">
              <pre className="text-white">{JSON.stringify(json, null, 2)}</pre>
            </div>
          ),
        },
        {
          key: "table",
          label: "Claims Table",
          children: <ClaimsTable json={json} />,
        },
      ]}
      className="min-h-[300px]"
    />
  </div>
);

const ClaimsTable = ({ json }: { json: Record<string, any> | string }) => {
  const dataSource = useMemo(() => {
    let obj = json;
    if (typeof obj === "string") {
      try {
        obj = JSON.parse(obj);
      } catch {
        return [];
      }
    }
    return Object.entries(obj).map(([key, value]) => ({
      key,
      claim: key,
      value:
        typeof value === "object" ? JSON.stringify(value) : value.toString(),
      explanation: EXPLAIN_MAPS[key] || "",
    }));
  }, [json]);

  const hasExplanation = dataSource.some((row) => row.explanation);

  const columns = [
    { title: "Claim", dataIndex: "claim", key: "claim" },
    { title: "Value", dataIndex: "value", key: "value" },
    ...(hasExplanation
      ? [{ title: "Explanation", dataIndex: "explanation", key: "explanation" }]
      : []),
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      bordered
      size="small"
      className="w-full min-w-[600px] max-w-full rounded-lg bg-[#F3F4F6] dark:bg-[#1F2937] dark:text-white"
    />
  );
};

export default DecodeTab;
