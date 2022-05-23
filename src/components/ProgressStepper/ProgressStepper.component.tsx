import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, MobileStepper, useTheme } from "@mui/material";

interface Props {
  size: number;
  activeStep: number;
  handleNextQuestion: () => void;
  handlePrevQuestion: () => void;
}

export const ProgressStepper = ({
  size,
  activeStep,
  handleNextQuestion,
  handlePrevQuestion,
}: Props) => {
  const theme = useTheme();

  return (
    <MobileStepper
      variant="progress"
      steps={size}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 0 }}
      nextButton={
        <Button
          size="small"
          onClick={handleNextQuestion}
          disabled={activeStep === size - 1}
        >
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={handlePrevQuestion}
          disabled={activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
};
