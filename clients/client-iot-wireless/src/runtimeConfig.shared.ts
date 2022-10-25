// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTWirelessClientConfig } from "./IoTWirelessClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTWirelessClientConfig) => ({
  apiVersion: "2020-11-22",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoT Wireless",
  urlParser: config?.urlParser ?? parseUrl,
});
