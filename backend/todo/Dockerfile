FROM node:20.16.0-slim AS base

ENV PORT=8000
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./

FROM base AS production
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
COPY --from=production /app/node_modules /app/node_modules
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
COPY --from=production /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist

ENV NODE_ENV=production
EXPOSE $PORT
CMD ["pnpm", "start"]
