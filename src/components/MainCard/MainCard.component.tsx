import { StyledCard } from "./MainCard.styles";

interface Props {
  children?: any;
}

export const MainCard = ({ children }: Props) => {
  return <StyledCard elevation={6}>{children}</StyledCard>;
};
