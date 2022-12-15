import { Box, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(-360deg)}
`;

const Gradient = () => {
  const [colorHUEl, setColorHUEl] = useState(Math.floor(Math.random() * 180));
  const [colorHUEr, setColorHUEr] = useState(
    Math.floor(Math.random() * 180) + 180
  );
  const spinAnimation = `${spin} infinite 2s linear`;
  useEffect(() => {
    setInterval(() => {
      setColorHUEl((prev: number) => {
        // console.log(prev);
        if (prev === 360) {
          return 0;
        }
        return prev + 1;
      });
      setColorHUEr((prev: number) => {
        // console.log(prev);
        if (prev === 360) {
          return 0;
        }
        return prev + 1;
      });
    }, 150);
  }, []);
  return (
    <Box
      w="200px"
      h="200px"
      borderRadius="full"
      animation={spinAnimation}
      bgGradient={`linear(to-r, hsl(${colorHUEl},75%,25%), hsl(${colorHUEr},75%,25%))`}
    />
  );
};

export default Gradient;
