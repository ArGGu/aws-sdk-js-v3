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

import { EKSAuthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSAuthClient";
import {
  AssumeRoleForPodIdentityRequest,
  AssumeRoleForPodIdentityRequestFilterSensitiveLog,
  AssumeRoleForPodIdentityResponse,
  AssumeRoleForPodIdentityResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AssumeRoleForPodIdentityCommand, se_AssumeRoleForPodIdentityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssumeRoleForPodIdentityCommand}.
 */
export interface AssumeRoleForPodIdentityCommandInput extends AssumeRoleForPodIdentityRequest {}
/**
 * @public
 *
 * The output of {@link AssumeRoleForPodIdentityCommand}.
 */
export interface AssumeRoleForPodIdentityCommandOutput extends AssumeRoleForPodIdentityResponse, __MetadataBearer {}

/**
 * @public
 * <p>The Amazon EKS Auth API and the <code>AssumeRoleForPodIdentity</code> action are only used
 *             by the EKS Pod Identity Agent.</p>
 *          <p>We recommend that applications use the Amazon Web Services SDKs to connect to Amazon Web Services services; if
 *             credentials from an EKS Pod Identity association are available in the pod, the latest versions of the
 *             SDKs use them automatically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSAuthClient, AssumeRoleForPodIdentityCommand } from "@aws-sdk/client-eks-auth"; // ES Modules import
 * // const { EKSAuthClient, AssumeRoleForPodIdentityCommand } = require("@aws-sdk/client-eks-auth"); // CommonJS import
 * const client = new EKSAuthClient(config);
 * const input = { // AssumeRoleForPodIdentityRequest
 *   clusterName: "STRING_VALUE", // required
 *   token: "STRING_VALUE", // required
 * };
 * const command = new AssumeRoleForPodIdentityCommand(input);
 * const response = await client.send(command);
 * // { // AssumeRoleForPodIdentityResponse
 * //   subject: { // Subject
 * //     namespace: "STRING_VALUE", // required
 * //     serviceAccount: "STRING_VALUE", // required
 * //   },
 * //   audience: "STRING_VALUE", // required
 * //   podIdentityAssociation: { // PodIdentityAssociation
 * //     associationArn: "STRING_VALUE", // required
 * //     associationId: "STRING_VALUE", // required
 * //   },
 * //   assumedRoleUser: { // AssumedRoleUser
 * //     arn: "STRING_VALUE", // required
 * //     assumeRoleId: "STRING_VALUE", // required
 * //   },
 * //   credentials: { // Credentials
 * //     sessionToken: "STRING_VALUE", // required
 * //     secretAccessKey: "STRING_VALUE", // required
 * //     accessKeyId: "STRING_VALUE", // required
 * //     expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssumeRoleForPodIdentityCommandInput - {@link AssumeRoleForPodIdentityCommandInput}
 * @returns {@link AssumeRoleForPodIdentityCommandOutput}
 * @see {@link AssumeRoleForPodIdentityCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleForPodIdentityCommandOutput} for command's `response` shape.
 * @see {@link EKSAuthClientResolvedConfig | config} for EKSAuthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The IAM principal
 *             making the request must have at least one IAM permissions policy attached
 *             that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
 *                 management</a> in the <i>IAM User Guide</i>. </p>
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *  <p>The specified Kubernetes service account token is expired.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning
 *             will depend on the API, and will be documented in the error message.</p>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The specified Kubernetes service account token is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because your request rate is too high. Reduce the frequency of requests.</p>
 *
 * @throws {@link EKSAuthServiceException}
 * <p>Base exception class for all service exceptions from EKSAuth service.</p>
 *
 */
export class AssumeRoleForPodIdentityCommand extends $Command<
  AssumeRoleForPodIdentityCommandInput,
  AssumeRoleForPodIdentityCommandOutput,
  EKSAuthClientResolvedConfig
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
  constructor(readonly input: AssumeRoleForPodIdentityCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSAuthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssumeRoleForPodIdentityCommandInput, AssumeRoleForPodIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssumeRoleForPodIdentityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSAuthClient";
    const commandName = "AssumeRoleForPodIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssumeRoleForPodIdentityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssumeRoleForPodIdentityResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "EKSAuthFrontend",
        operation: "AssumeRoleForPodIdentity",
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
  private serialize(input: AssumeRoleForPodIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssumeRoleForPodIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssumeRoleForPodIdentityCommandOutput> {
    return de_AssumeRoleForPodIdentityCommand(output, context);
  }
}
