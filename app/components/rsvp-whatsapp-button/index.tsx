import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WPP_LINK } from "./constants";
import { Button } from "../button";

export const RSVPWhatsAppButton = ({ title }: { title: string }) => {
  return (
    <Button
      onClick={() => window.open(WPP_LINK, "_blank")}
      className="flex gap-2 m-5 w-fit"
    >
      {title}
      <WhatsAppIcon fontSize="small" style={{ margin: 0 }} />
    </Button>
  );
};
