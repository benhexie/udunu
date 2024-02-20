import { Button as MaterialButton } from "@material-ui/core";

const Button = ({
  size,
  variant,
  color,
  children,
}: {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained" | "contained";
  color: "inherit" | "primary" | "secondary" | "default";
  children: React.ReactNode;
}) => {
  return (
    <MaterialButton size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  );
};

export default Button;
