import axios, { AxiosError } from "axios";
import type {
  GetLeadsResponse,
  PostLeadResponse,
  ApiError,
} from "../types/api";
import type { LeadFormData } from "../schemas/formSchema";

// ============================================
// CONFIGURAÇÃO DO AXIOS
// ============================================

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10 segundos
  headers: {
    "Content-Type": "application/json",
  },
});

// ============================================
// INTERCEPTOR PARA TRATAMENTO DE ERROS
// ============================================

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<PostLeadResponse>) => {
    if (error.response?.data) {
      // Erro da API com resposta estruturada
      const responseData = error.response.data;
      const apiError: ApiError = {
        message: responseData.message || "Erro ao processar solicitação",
        statusCode: error.response.status,
        retryAfter: !responseData.success ? responseData.retryAfter : undefined,
      };
      return Promise.reject(apiError);
    }

    // Erro de rede ou timeout
    const networkError: ApiError = {
      message: "Erro de conexão. Verifique sua internet e tente novamente.",
      statusCode: 0,
    };
    return Promise.reject(networkError);
  }
);

// ============================================
// SERVIÇOS DA API DE LEADS
// ============================================

export const leadsApi = {
  /**
   * GET /leads
   * Busca todos os leads cadastrados
   */
  async getLeads(): Promise<GetLeadsResponse> {
    const response = await apiClient.get<GetLeadsResponse>("/leads");
    return response.data;
  },

  /**
   * POST /leads
   * Cadastra um novo lead
   * @param data - Objeto com o email do lead
   */
  async createLead(data: LeadFormData): Promise<PostLeadResponse> {
    const response = await apiClient.post<PostLeadResponse>("/leads", data);
    return response.data;
  },
};

// Exportar instância configurada do axios para uso direto se necessário
export default apiClient;
