# Dependency stage
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies and generate new lockfile
RUN npm config set legacy-peer-deps true && \
    npm install && \
    npm update caniuse-lite browserslist && \
    npm install --package-lock-only

# Builder stage (rest same)
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package-lock.json ./
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Runner stage (same as above)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 6001
ENV PORT=6001

CMD ["node", "server.js"]