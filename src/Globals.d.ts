/// <reference types="vite/client" />

declare module "*.module.css";

interface ImportMetaEnv {
    readonly VITE_GOOGLE_OAUTH_CLIENT_ID: string
    readonly VITE_BACKEND_URL: string
    readonly VITE_MAX_FILE_SIZE: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
