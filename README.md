# 💰 Dinly - Landing Page

![Dinly Logo](https://img.shields.io/badge/Dinly-Finan%C3%A7as%20Pessoais-8B5CF6?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)

Landing page moderna e responsiva para o **Dinly**, aplicativo de finanças pessoais com IA e gamificação. Desenvolvida com React, TypeScript, Tailwind CSS e integração serverless com AWS.

---

## 🎯 Sobre o Projeto

O **Dinly** é uma landing page otimizada para conversão de leads, com design moderno, animações suaves e integração completa com API serverless. A página apresenta:

- **Hero Section**: CTA principal com formulário de cadastro
- **Partners**: Logos de parceiros e apoiadores
- **Problem**: Identificação dos problemas financeiros do público
- **Solution**: Apresentação dos 6 pilares da solução Dinly
- **Forms**: Segundo CTA para conversão
- **Footer**: Links sociais e copyright
- **Admin Panel**: Painel administrativo para visualização de leads

---

## 🛠️ Tecnologias

### Frontend

| Tecnologia           | Versão | Descrição                     |
| -------------------- | ------ | ----------------------------- |
| **React**            | 18.3.1 | Biblioteca para UI            |
| **TypeScript**       | 5.6    | Superset tipado do JavaScript |
| **Vite**             | 6.0    | Build tool ultrarrápido       |
| **Tailwind CSS**     | 3.4    | Framework CSS utility-first   |
| **Framer Motion**    | 12.0   | Biblioteca de animações       |
| **React Router DOM** | 7.0    | Roteamento client-side        |
| **Axios**            | 1.7    | Cliente HTTP                  |
| **Zod**              | 3.24   | Validação de schemas          |
| **Lucide React**     | 0.468  | Ícones modernos               |

### Backend (Serverless)

| Tecnologia      | Descrição                     |
| --------------- | ----------------------------- |
| **AWS Lambda**  | Funções serverless em Node.js |
| **DynamoDB**    | Banco NoSQL serverless        |
| **API Gateway** | Gateway HTTP REST             |
| **CloudWatch**  | Logs e monitoramento          |

## 📦 Instalação

### Pré-requisitos

- **Node.js**: 18+ ([Download](https://nodejs.org/))
- **npm** ou **yarn**
- **Git**

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/dinly-dev/dinly-landing-page.git
cd dinly-landing-page

# 2. Instale as dependências
npm install
# ou
yarn install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# 4. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

# 5. Acesse no navegador
# http://localhost:5173
```

---

## ⚙️ Configuração

### Variáveis de Ambiente (.env)

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
# ===========================================
# API Configuration
# ===========================================
# URL base da API serverless na AWS
VITE_API_URL=https://btwwav9yti.execute-api.us-east-1.amazonaws.com/prod

# ===========================================
# Admin Panel Authentication
# ===========================================
# Senha para acessar o painel administrativo
# IMPORTANTE: Altere esta senha em produção!
VITE_ADMIN_PASSWORD=senhaDeExemplo123

# ===========================================
# INSTRUÇÕES
# ===========================================
# 1. Copie este arquivo para .env
# 2. Substitua os valores pelos seus
# 3. NUNCA commite o arquivo .env no Git
# 4. Para produção, use variáveis de ambiente
#    no seu serviço de hospedagem (Vercel, Netlify, etc)
#
# SEGURANÇA:
# - Altere VITE_ADMIN_PASSWORD para uma senha forte
# - Use geradores de senha: https://1password.com/password-generator
```

---

**Desenvolvido com 💜 pela equipe Dinly**
