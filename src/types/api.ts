// ============================================
// TIPOS PARA FORMULÁRIO DE LEADS
// ============================================

export interface LeadFormData {
  email: string;
}

// ============================================
// TIPOS PARA RESPOSTA DA API
// ============================================

export interface Lead {
  email: string;
  timestamp: string;
}

export interface GetLeadsResponse {
  success: boolean;
  total: number;
  leads: Lead[];
}

export interface PostLeadSuccessResponse {
  success: true;
  message: string;
  email: string;
  timestamp: string;
}

export interface PostLeadErrorResponse {
  success: false;
  message: string;
  retryAfter?: number;
}

export type PostLeadResponse = PostLeadSuccessResponse | PostLeadErrorResponse;

// ============================================
// TIPOS PARA ERROS
// ============================================

export interface ApiError {
  message: string;
  statusCode?: number;
  retryAfter?: number;
}
