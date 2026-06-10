"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PIX_COPY_CODE } from "../../constants/gifts";
import { classNames } from "@/src/lib/styles/class-names";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "../button";

export const PixQrCode = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <Button
      className={classNames("p-3 w-fit flex flex-col items-center bg-avocado-100 hover:bg-avocado-50")}
      onClick={() => {
        navigator?.clipboard
          ?.writeText(PIX_COPY_CODE)
          ?.then(() => setIsCopied(true))
          ?.catch((error) =>
            console.error("Failed to copy text to clipboard: ", error)
          );
      }}
    >
      <Image
        src="/images/pix-qrcode.svg"
        alt="QR Code do Pix"
        width={200}
        height={200}
      />
      <div className="flex justify-center mt-2 text-center gap-2 font-medium">
        {isCopied ? (
          "Copiado!"
        ) : (
          <>
            {text}
            <ContentCopyIcon fontSize="small" style={{ margin: 0 }} />
          </>
        )}
      </div>
    </Button>
  );
};
