import React from "react";
import Button from "../../../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage.jsx";

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
        Icon={undefined}
        onClick={undefined}
        disabled={undefined}
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
