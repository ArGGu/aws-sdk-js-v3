// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { BCMDataExportsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDataExportsClient";
import { GetExportRequest, GetExportResponse } from "../models/models_0";
import { de_GetExportCommand, se_GetExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetExportCommand}.
 */
export interface GetExportCommandInput extends GetExportRequest {}
/**
 * @public
 *
 * The output of {@link GetExportCommand}.
 */
export interface GetExportCommandOutput extends GetExportResponse, __MetadataBearer {}

/**
 * @public
 * <p>Views the definition of an existing data export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, GetExportCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, GetExportCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * const client = new BCMDataExportsClient(config);
 * const input = { // GetExportRequest
 *   ExportArn: "STRING_VALUE", // required
 * };
 * const command = new GetExportCommand(input);
 * const response = await client.send(command);
 * // { // GetExportResponse
 * //   Export: { // Export
 * //     ExportArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     DataQuery: { // DataQuery
 * //       QueryStatement: "STRING_VALUE", // required
 * //       TableConfigurations: { // TableConfigurations
 * //         "<keys>": { // TableProperties
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     DestinationConfigurations: { // DestinationConfigurations
 * //       S3Destination: { // S3Destination
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Prefix: "STRING_VALUE", // required
 * //         S3Region: "STRING_VALUE", // required
 * //         S3OutputConfigurations: { // S3OutputConfigurations
 * //           OutputType: "CUSTOM", // required
 * //           Format: "TEXT_OR_CSV" || "PARQUET", // required
 * //           Compression: "GZIP" || "PARQUET", // required
 * //           Overwrite: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT", // required
 * //         },
 * //       },
 * //     },
 * //     RefreshCadence: { // RefreshCadence
 * //       Frequency: "SYNCHRONOUS", // required
 * //     },
 * //   },
 * //   ExportStatus: { // ExportStatus
 * //     StatusCode: "HEALTHY" || "UNHEALTHY",
 * //     StatusReason: "INSUFFICIENT_PERMISSION" || "BILL_OWNER_CHANGED" || "INTERNAL_FAILURE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     LastRefreshedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExportCommandInput - {@link GetExportCommandInput}
 * @returns {@link GetExportCommandOutput}
 * @see {@link GetExportCommandInput} for command's `input` shape.
 * @see {@link GetExportCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link BCMDataExportsServiceException}
 * <p>Base exception class for all service exceptions from BCMDataExports service.</p>
 *
 */
export class GetExportCommand extends $Command<
  GetExportCommandInput,
  GetExportCommandOutput,
  BCMDataExportsClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetExportCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BCMDataExportsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExportCommandInput, GetExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetExportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BCMDataExportsClient";
    const commandName = "GetExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSBillingAndCostManagementDataExports",
        operation: "GetExport",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetExportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExportCommandOutput> {
    return de_GetExportCommand(output, context);
  }
}
