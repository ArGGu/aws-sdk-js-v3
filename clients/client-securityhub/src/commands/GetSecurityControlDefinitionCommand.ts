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

import { GetSecurityControlDefinitionRequest, GetSecurityControlDefinitionResponse } from "../models/models_2";
import {
  de_GetSecurityControlDefinitionCommand,
  se_GetSecurityControlDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSecurityControlDefinitionCommand}.
 */
export interface GetSecurityControlDefinitionCommandInput extends GetSecurityControlDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityControlDefinitionCommand}.
 */
export interface GetSecurityControlDefinitionCommandOutput
  extends GetSecurityControlDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             Retrieves the definition of a security control. The definition includes the control title, description, Region availability, parameter definitions, and other details.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetSecurityControlDefinitionCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetSecurityControlDefinitionCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetSecurityControlDefinitionRequest
 *   SecurityControlId: "STRING_VALUE", // required
 * };
 * const command = new GetSecurityControlDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityControlDefinitionResponse
 * //   SecurityControlDefinition: { // SecurityControlDefinition
 * //     SecurityControlId: "STRING_VALUE", // required
 * //     Title: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE", // required
 * //     RemediationUrl: "STRING_VALUE", // required
 * //     SeverityRating: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL", // required
 * //     CurrentRegionAvailability: "AVAILABLE" || "UNAVAILABLE", // required
 * //     CustomizableProperties: [ // CustomizableProperties
 * //       "Parameters",
 * //     ],
 * //     ParameterDefinitions: { // ParameterDefinitions
 * //       "<keys>": { // ParameterDefinition
 * //         Description: "STRING_VALUE", // required
 * //         ConfigurationOptions: { // ConfigurationOptions Union: only one key present
 * //           Integer: { // IntegerConfigurationOptions
 * //             DefaultValue: Number("int"),
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //           },
 * //           IntegerList: { // IntegerListConfigurationOptions
 * //             DefaultValue: [ // IntegerList
 * //               Number("int"),
 * //             ],
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //             MaxItems: Number("int"),
 * //           },
 * //           Double: { // DoubleConfigurationOptions
 * //             DefaultValue: Number("double"),
 * //             Min: Number("double"),
 * //             Max: Number("double"),
 * //           },
 * //           String: { // StringConfigurationOptions
 * //             DefaultValue: "STRING_VALUE",
 * //             Re2Expression: "STRING_VALUE",
 * //             ExpressionDescription: "STRING_VALUE",
 * //           },
 * //           StringList: { // StringListConfigurationOptions
 * //             DefaultValue: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             Re2Expression: "STRING_VALUE",
 * //             MaxItems: Number("int"),
 * //             ExpressionDescription: "STRING_VALUE",
 * //           },
 * //           Boolean: { // BooleanConfigurationOptions
 * //             DefaultValue: true || false,
 * //           },
 * //           Enum: { // EnumConfigurationOptions
 * //             DefaultValue: "STRING_VALUE",
 * //             AllowedValues: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           EnumList: { // EnumListConfigurationOptions
 * //             DefaultValue: [
 * //               "STRING_VALUE",
 * //             ],
 * //             MaxItems: Number("int"),
 * //             AllowedValues: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSecurityControlDefinitionCommandInput - {@link GetSecurityControlDefinitionCommandInput}
 * @returns {@link GetSecurityControlDefinitionCommandOutput}
 * @see {@link GetSecurityControlDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSecurityControlDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To get the definition of a security control.
 * ```javascript
 * // The following example retrieves definition details for the specified security control.
 * const input = {
 *   "SecurityControlId": "EC2.4"
 * };
 * const command = new GetSecurityControlDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SecurityControlDefinition": {
 *     "CurrentRegionAvailability": "AVAILABLE",
 *     "Description": "This control checks whether an Amazon EC2 instance has been stopped for longer than the allowed number of days. The control fails if an EC2 instance is stopped for longer than the maximum allowed time period. Unless you provide a custom parameter value for the maximum allowed time period, Security Hub uses a default value of 30 days.",
 *     "ParameterDefinitions": {
 *       "AllowedDays": {
 *         "ConfigurationOptions": {
 *           "Integer": {
 *             "DefaultValue": 30,
 *             "Max": 365,
 *             "Min": 1
 *           }
 *         },
 *         "Description": "Number of days the EC2 instance is allowed to be in a stopped state before generating a failed finding"
 *       }
 *     },
 *     "RemediationUrl": "https://docs.aws.amazon.com/console/securityhub/EC2.4/remediation",
 *     "SecurityControlId": "EC2.4",
 *     "SeverityRating": "MEDIUM",
 *     "Title": "Stopped Amazon EC2 instances should be removed after a specified time period"
 *   }
 * }
 * *\/
 * // example id: to-get-the-definition-of-a-security-control-1699283789356
 * ```
 *
 */
export class GetSecurityControlDefinitionCommand extends $Command<
  GetSecurityControlDefinitionCommandInput,
  GetSecurityControlDefinitionCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: GetSecurityControlDefinitionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSecurityControlDefinitionCommandInput, GetSecurityControlDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSecurityControlDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetSecurityControlDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "GetSecurityControlDefinition",
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
  private serialize(input: GetSecurityControlDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSecurityControlDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSecurityControlDefinitionCommandOutput> {
    return de_GetSecurityControlDefinitionCommand(output, context);
  }
}
