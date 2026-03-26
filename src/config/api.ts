const envUrl = import.meta.env.VITE_API_URL || "https://wheeliez-backend-838164746945.europe-west1.run.app";
export const API_BASE_URL = envUrl.replace(/\/+$/, "");
export const API_ROOT = API_BASE_URL.replace(/\/api\/?$/, "");
