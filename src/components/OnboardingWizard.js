import React, { useState } from "react";

const steps = [
  { id: 1, content: "Welcome! Let’s get started." },
  { id: 2, content: "Tell us about yourself." },
  { id: 3, content: "Almost done!" },
];

export default function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h3>{steps[currentStep].content}</h3>
      <div>
        <button onClick={back} disabled={currentStep === 0}>
          Back
        </button>
        <button onClick={next} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
      <p>
        Step {currentStep + 1} of {steps.length}
      </p>
    </div>
  );
}
