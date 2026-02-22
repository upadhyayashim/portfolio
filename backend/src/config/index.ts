import * as test from "./environments/testing";
import local from "./environments/local";
import beta from "./environments/beta";
import preprod from "./environments/preprod";
import production from "./environments/production";
import { constants } from "./constant";

const env = process.env.NODE_ENV || 'local';
const configMap: Record<string, any> = {
    local,
    beta,
    preprod,
    production,
    test
};
const envConfig = configMap[env];

if (!envConfig) {
    throw new Error(`Invalid NODE_ENV : ${env}`);
}

export const config = {
    ...constants,
    ...envConfig,
    NODE_ENV: env,
};
