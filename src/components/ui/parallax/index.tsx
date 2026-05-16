const Container: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div
    style={{
      height: "100vh",
      overflowY: "auto",
      overflowX: "hidden",
      perspective: "1px",
    }}
  >
    {children}
  </div>
);

const Layer: React.FC<
  React.PropsWithChildren<{
    ref: React.RefObject<HTMLDivElement | null>;
  }>
> = ({ children, ref }) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: "translateZ(-1px) scale(2)",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export const Parallax = {
  Container,
  Layer,
};
