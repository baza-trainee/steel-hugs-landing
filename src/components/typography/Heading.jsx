import './heading.css';

export const Heading = ({ children, variant }) => {
  const headingVariants = {
    primary: 'primary',
    secondary: 'secondary',
    numbers: 'numbers',
  };

  return (
    <div className={'heading_container _' + headingVariants[variant]}>
      <h1 className={'heading _' + headingVariants[variant]}>{children}</h1>
      <div className={'heading_stroke _' + headingVariants[variant]}>
        {children}
      </div>
    </div>
  );
};
