import FormLogin from "@/components/FormLogin";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-96 h-96 bg-white rounded-2xl shadow-lg flex items-center justify-center">
        <FormLogin />
      </div>
    </main>
  );
}
