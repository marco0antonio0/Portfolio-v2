# Etapa de build usando Bun
FROM oven/bun:1 AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY package.json ./

# Instala dependências
RUN bun install

# Copia o restante do código
COPY . .

# Gera o build de produção
RUN bun run build

# Etapa final enxuta
FROM oven/bun:1

WORKDIR /app

# Copia build e dependências já instaladas
COPY --from=builder /app .

# Expõe a porta padrão do Next.js
EXPOSE 3000
 
# Comando para rodar a aplicação
CMD ["bun", "start"]
