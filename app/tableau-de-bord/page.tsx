import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Deconnexion from "./deconnexion";

export default async function TableauDeBord() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/connexion");
  }

  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      <div className="flex items-center justify-between">
        <p className="font-titre font-bold">Panier Perdu</p>
        <Deconnexion />
      </div>

      <h1 className="mt-8 font-titre text-3xl font-bold">Bienvenue !</h1>
      <p className="mt-2 text-nuit/80">
        Connecté en tant que <span className="font-semibold">{data.user.email}</span>
      </p>

      <div className="mt-8 rounded-lg border-2 border-dashed border-nuit/30 p-6 text-center">
        <p className="text-nuit/70">
          Le branchement de votre boutique arrive à la prochaine étape.
        </p>
      </div>
    </main>
  );
}
