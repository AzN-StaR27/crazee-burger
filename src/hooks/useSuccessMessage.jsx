import { useState } from "react";

export const useSuccessMessage = (timeDelay = 2000) => {
  //state
  const [isSubmitted, setIsSubmitted] = useState(false);

  //comportements
  const displaySubmitMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, timeDelay);
  };
  //affichage
  return { isSubmitted, displaySubmitMessage };
};
