import { useCallback, useEffect } from 'react';

export const useKeyboard = ({ onKeyPressed }: { onKeyPressed: (key: string) => void }) => {
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        const { key } = event;
        onKeyPressed(key);
    }, [onKeyPressed]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);
};
