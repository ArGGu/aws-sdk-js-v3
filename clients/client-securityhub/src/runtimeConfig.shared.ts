// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SecurityHubClientConfig } from "./SecurityHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecurityHubClientConfig) => ({
  apiVersion: "2018-10-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SecurityHub",
  urlParser: config?.urlParser ?? parseUrl,
});
