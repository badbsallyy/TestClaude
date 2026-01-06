"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { MovingBorder } from "@/components/ui/moving-border";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }

    setStatus("loading");

    // Simulate API call (replace with actual n8n webhook)
    try {
      // const response = await fetch(process.env.NEXT_PUBLIC_N8N_NEWSLETTER_WEBHOOK!, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });
      
      // Simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus("success");
      setMessage("Vielen Dank! Du erhältst bald unsere besten Deals.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Ein Fehler ist aufgetreten. Bitte versuche es später erneut.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Verpasse keine Deals mehr!
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Abonniere unseren Newsletter und erhalte die besten Schnäppchen
            direkt in dein Postfach.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              className="flex-1 px-6 py-3 bg-zinc-800 border border-zinc-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              disabled={status === "loading" || status === "success"}
            />
            <MovingBorder
              as="button"
              duration={3000}
              containerClassName="h-12"
              className="font-semibold"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                "Abonnieren"
              )}
            </MovingBorder>
          </form>

          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 flex items-center justify-center gap-2 text-sm ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status === "success" ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              {message}
            </motion.div>
          )}

          <p className="mt-6 text-xs text-gray-500">
            Mit der Anmeldung stimmst du unserer{" "}
            <a href="/datenschutz" className="underline hover:text-gray-400">
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
