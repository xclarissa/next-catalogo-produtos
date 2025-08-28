import ClientFetch from "@/components/ClientFetch";

export default async function Sobre() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div>
        <h2>Home</h2>
        <ClientFetch />
      </div>
    </div>
  );
}
