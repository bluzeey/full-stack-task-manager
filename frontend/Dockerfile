FROM node:20-alpine AS base



### Dependencies ###
FROM base AS deps
RUN apk add --no-cache libc6-compat git


# Setup pnpm environment
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm 

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prefer-frozen-lockfile

# Builder
FROM base AS builder

RUN corepack enable
RUN corepack enable pnpm
RUN corepack prepare pnpm@latest --activate



WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .


RUN pnpm build
FROM base AS runner

# Set NODE_ENV to production
ENV NODE_ENV production


# Exposed port (for orchestrators and dynamic reverse proxies)
EXPOSE 5173
ENV PORT 5173
ENV HOSTNAME "0.0.0.0"
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-q0", "http://localhost:5173/health" ]


CMD [ "pnpm", "dev" ]