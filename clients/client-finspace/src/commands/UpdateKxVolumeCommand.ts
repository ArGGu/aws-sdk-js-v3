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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxVolumeRequest, UpdateKxVolumeResponse } from "../models/models_0";
import { de_UpdateKxVolumeCommand, se_UpdateKxVolumeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxVolumeCommand}.
 */
export interface UpdateKxVolumeCommandInput extends UpdateKxVolumeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxVolumeCommand}.
 */
export interface UpdateKxVolumeCommandOutput extends UpdateKxVolumeResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 * Updates the throughput or capacity of a volume. During the update process, the filesystem
 * might be unavailable for a few minutes. You can retry any operations after the update is complete.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxVolumeCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxVolumeCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxVolumeRequest
 *   environmentId: "STRING_VALUE", // required
 *   volumeName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   nas1Configuration: { // KxNAS1Configuration
 *     type: "SSD_1000" || "SSD_250" || "HDD_12",
 *     size: Number("int"),
 *   },
 * };
 * const command = new UpdateKxVolumeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKxVolumeResponse
 * //   environmentId: "STRING_VALUE",
 * //   volumeName: "STRING_VALUE",
 * //   volumeType: "NAS_1",
 * //   volumeArn: "STRING_VALUE",
 * //   nas1Configuration: { // KxNAS1Configuration
 * //     type: "SSD_1000" || "SSD_250" || "HDD_12",
 * //     size: Number("int"),
 * //   },
 * //   status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //   description: "STRING_VALUE",
 * //   statusReason: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   azMode: "SINGLE" || "MULTI",
 * //   availabilityZoneIds: [ // AvailabilityZoneIds
 * //     "STRING_VALUE",
 * //   ],
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   attachedClusters: [ // KxAttachedClusters
 * //     { // KxAttachedCluster
 * //       clusterName: "STRING_VALUE",
 * //       clusterType: "HDB" || "RDB" || "GATEWAY" || "GP" || "TICKERPLANT",
 * //       clusterStatus: "PENDING" || "CREATING" || "CREATE_FAILED" || "RUNNING" || "UPDATING" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateKxVolumeCommandInput - {@link UpdateKxVolumeCommandInput}
 * @returns {@link UpdateKxVolumeCommandOutput}
 * @see {@link UpdateKxVolumeCommandInput} for command's `input` shape.
 * @see {@link UpdateKxVolumeCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class UpdateKxVolumeCommand extends $Command<
  UpdateKxVolumeCommandInput,
  UpdateKxVolumeCommandOutput,
  FinspaceClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateKxVolumeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKxVolumeCommandInput, UpdateKxVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKxVolumeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "UpdateKxVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroManagementService",
        operation: "UpdateKxVolume",
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
  private serialize(input: UpdateKxVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateKxVolumeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKxVolumeCommandOutput> {
    return de_UpdateKxVolumeCommand(output, context);
  }
}
