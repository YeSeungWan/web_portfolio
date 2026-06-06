# 1. 2단계(Runner)에서도 환경 변수를 쓸 수 있도록 맨 위 글로벌 영역에 선언합니다.
ARG NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR=""
ARG NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR=""

# 1단계: 의존성 설치 및 빌드
FROM node:18-alpine AS builder
WORKDIR /app

# 아까 글로벌 영역에 선언한 변수를 빌드 단계로 끌고 들어옵니다.
ARG NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR
ARG NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR

# ⭐️ [교정 1] Next.js 컴파일러가 인식할 수 있도록 ENV로 매핑해 줍니다 (이게 없으면 빌드 시 누락됨)
ENV NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR=$NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR
ENV NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR=$NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR

# 의존성 파일 복사 및 설치
COPY package-lock.json package.json ./
RUN npm ci

# 전체 소스 복사 및 Next.js 프로덕션 빌드
COPY . .
RUN npm run build


# 2단계: 실제 구동 환경 (용량 최적화)
FROM node:18-alpine AS runner
WORKDIR /app

# ⭐️ [교정 2] 프로덕션 환경이 "배포 모드"임을 노드 엔진에게 명시 (속도 및 보안 향상)
ENV NODE_ENV=production

# 프로덕션 실행에 필요한 파일만 복사
# ⭐️ [교정 3] next.config.ts 확장자가 맞는지 꼭 확인하세요! (보통 .js 또는 .mjs인 경우가 많습니다)
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/next.config.ts ./ 
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# 실제 컨테이너 구동 시 사용될 환경 변수 가드
ENV NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR=""
ENV NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR=""

EXPOSE 3000
CMD ["npm", "run", "start"]