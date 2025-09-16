import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

type Props = {};

const Landing: React.FC = () => {
  return (
    <>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Button
        title="Small Rounded"
        size="small"
        shape="rounded-sm"
        styles="rounded-sm"
      />{" "}
      <br />
      <Button
        title="Medium Rounded"
        size="medium"
        shape="rounded-md"
        styles="rounded-md"
      />
      <br />
      <Button
        title="Large Rounded"
        size="large"
        shape="rounded-full"
        styles="rounded-lg"
      />
    </>
  );
};

export default Landing;
