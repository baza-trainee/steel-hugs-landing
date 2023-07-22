import "./typography.css";

export const Typography = ({ children, variant = "main" }) => {
  const typographyVariants = {
    main: "main",
  };
  return <p className={"font _" + typographyVariants[variant]}>{children}</p>;
};
