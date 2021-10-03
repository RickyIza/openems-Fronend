import { Environment } from "src/environments";

export const environment: Environment = {
    title: "OpenEMS UI",
    shortName: "OpenEMS",

    backend: 'OpenEMS Edge',
    url: "ws://" + "3.12.36.22" + ":8085",

    production: true,
    debugMode: false,
};