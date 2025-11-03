import { useState } from "react";
import { leadsApi } from "../services/api";
import { leadFormSchema } from "../schemas/formSchema";
import type { ApiError } from "../types/api";
import { ZodError } from "zod";

interface UseLeadFormReturn {
  email: string;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

export function useLeadForm(): UseLeadFormReturn {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Resetar estados
    setError(null);
    setIsSuccess(false);

    try {
      // Validação com Zod
      const validatedData = leadFormSchema.parse({ email });

      // Iniciar loading
      setIsLoading(true);

      // Chamada da API
      const response = await leadsApi.createLead(validatedData);

      if (response.success) {
        setIsSuccess(true);
        setEmail(""); // Limpar campo após sucesso

        // Remover mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    } catch (err) {
      // Tratamento de erros de validação do Zod
      if (err instanceof ZodError) {
        setError(err.issues[0]?.message || "Erro de validação");
        return;
      }

      // Tratamento de erros da API
      const apiError = err as ApiError;

      if (apiError.statusCode === 409) {
        setError("Este e-mail já está cadastrado!");
      } else if (apiError.statusCode === 429) {
        const retryMessage = apiError.retryAfter
          ? `Muitas tentativas. Aguarde ${apiError.retryAfter} segundos.`
          : "Muitas tentativas. Aguarde um momento.";
        setError(retryMessage);
      } else {
        setError(apiError.message || "Erro ao cadastrar. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail("");
    setError(null);
    setIsSuccess(false);
    setIsLoading(false);
  };

  return {
    email,
    isLoading,
    isSuccess,
    error,
    setEmail,
    handleSubmit,
    resetForm,
  };
}
