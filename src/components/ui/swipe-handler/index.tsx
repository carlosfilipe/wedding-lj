import { useRef, PropsWithChildren } from "react";

type SwipeHandlerProps = {
  className?: string;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
  onSwipe?: (delta: number) => void;
  onAction?: (direction: "left" | "right") => void;
  actionThreshold: number;
};

export const SwipeHandler: React.FC<PropsWithChildren<SwipeHandlerProps>> = ({
  children,
  className,
  actionThreshold,
  onSwipe,
  onSwipeStart,
  onSwipeEnd,
  onAction,
}) => {
  const horizontalMoveStart = useRef<number>(0);
  const horizontalDelta = useRef<number>(0);

  const getActionDirection = (delta: number) => {
    return delta < 0 ? "right" : "left";
  };

  return (
    <div
      className={className}
      onTouchStart={(e) => {
        onSwipeStart?.();
        horizontalMoveStart.current = e.touches[0]?.clientX ?? 0;
      }}
      onTouchMove={(e) => {
        const clientX = e.touches[0]?.clientX ?? 0;
        const delta = horizontalMoveStart.current - clientX;
        horizontalDelta.current = delta;
        onSwipe?.(delta);
      }}
      onTouchEnd={() => {
        const delta = horizontalDelta.current;
        if (Math.abs(delta) >= actionThreshold) {
          onAction?.(getActionDirection(delta));
        }
        onSwipeEnd?.();
        horizontalMoveStart.current = 0;
        horizontalDelta.current = 0;
      }}
    >
      {children}
    </div>
  );
};
