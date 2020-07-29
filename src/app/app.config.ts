export interface ServerConfig {
    apiHost: string;
    apiPort: number;
    shopApiPath: string;
}
declare const global: any;
export const GLOBAL_APP_CONFIG_KEY = '__storefront_app_config';
let serverConfig: ServerConfig | undefined;

/**
 * Loads the app config from the JSON file via a browser-side fetch call.
 */
export function loadAppConfig(): Promise<void> {
    return fetch('./storefront-config.json')
        .then(res => res.json())
        .then(config => {
            serverConfig = config;
        });
}

/**
 * Loads the app config from the server-side global object
 */
export function loadAppConfigServer(): void {
    serverConfig = global[GLOBAL_APP_CONFIG_KEY];
}

export function getAppConfig(): ServerConfig {
    if (!serverConfig) {
        loadAppConfigServer();
    }
    if (!serverConfig) {
        throw new Error(`server config not loaded`);
    }
    return serverConfig;
}
