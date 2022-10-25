// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { OpenSearchClientConfig } from "./OpenSearchClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpenSearchClientConfig) => ({
  apiVersion: "2021-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "OpenSearch",
  urlParser: config?.urlParser ?? parseUrl,
});
