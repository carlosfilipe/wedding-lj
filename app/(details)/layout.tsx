import { Navbar } from "../components/navbar";

export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="py-20 px-5 md:px-30 flex flex-col flex-grow">
        {children}
      </div>
    </>
  );
}
