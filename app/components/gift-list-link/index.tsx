import Image from "next/image";
import Link from "next/link";
import { GIFT_SITE_URL } from "../../constants/gifts";
import LaunchIcon from "@mui/icons-material/Launch";

export const GiftListLink = ({ text }: { text: string }) => {
  return (
    <Link
      className="flex flex-col items-center w-fit font-medium text-avocado-100 hover:text-avocado-50"
      href={GIFT_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex justify-center items-center">
        <Image
          src="/images/magalu.png"
          alt="Logo da lista de presentes camicado"
          width={150}
          height={150}
        />
      </div>
      <div className="mt-5">
        <div className="inline-flex whitespace-nowrap gap-2 items-center">
          {text}
          <LaunchIcon fontSize="small" style={{ margin: 0 }} />
        </div>
      </div>
    </Link>
  );
};
