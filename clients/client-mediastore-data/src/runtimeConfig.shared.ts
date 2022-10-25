// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MediaStoreDataClientConfig } from "./MediaStoreDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaStoreDataClientConfig) => ({
  apiVersion: "2017-09-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MediaStore Data",
  urlParser: config?.urlParser ?? parseUrl,
});
