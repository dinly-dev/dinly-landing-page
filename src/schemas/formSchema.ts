import { z } from "zod";

// Schema de validação para o formulário de leads
export const leadFormSchema = z.object({
  email: z
    .string()
    .min(1, "E-mail é obrigatório")
    .email("Digite um e-mail válido")
    .toLowerCase()
    .trim(),
});

// Tipo inferido do schema para TypeScript
export type LeadFormData = z.infer<typeof leadFormSchema>;
