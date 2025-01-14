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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateAccessEntryRequest, CreateAccessEntryResponse } from "../models/models_0";
import { de_CreateAccessEntryCommand, se_CreateAccessEntryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessEntryCommand}.
 */
export interface CreateAccessEntryCommandInput extends CreateAccessEntryRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessEntryCommand}.
 */
export interface CreateAccessEntryCommandOutput extends CreateAccessEntryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an access entry.</p>
 *          <p>An access entry allows an IAM principal to access your cluster. Access
 *             entries can replace the need to maintain entries in the <code>aws-auth</code>
 *             <code>ConfigMap</code> for authentication. You have the following options for
 *             authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes
 *             role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization
 *             requires you to create and manage Kubernetes <code>Role</code>, <code>ClusterRole</code>,
 *                 <code>RoleBinding</code>, and <code>ClusterRoleBinding</code> objects, in addition
 *             to managing access entries. If you use Amazon EKS authorization exclusively, you
 *             don't need to create and manage Kubernetes <code>Role</code>, <code>ClusterRole</code>,
 *                 <code>RoleBinding</code>, and <code>ClusterRoleBinding</code> objects.</p>
 *          <p>For more information about access entries, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html">Access entries</a> in the
 *             <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateAccessEntryCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateAccessEntryCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // CreateAccessEntryRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   kubernetesGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   username: "STRING_VALUE",
 *   type: "STRING_VALUE",
 * };
 * const command = new CreateAccessEntryCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessEntryResponse
 * //   accessEntry: { // AccessEntry
 * //     clusterName: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //     kubernetesGroups: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     accessEntryArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     username: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccessEntryCommandInput - {@link CreateAccessEntryCommandInput}
 * @returns {@link CreateAccessEntryCommandOutput}
 * @see {@link CreateAccessEntryCommandInput} for command's `input` shape.
 * @see {@link CreateAccessEntryCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class CreateAccessEntryCommand extends $Command<
  CreateAccessEntryCommandInput,
  CreateAccessEntryCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: CreateAccessEntryCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessEntryCommandInput, CreateAccessEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessEntryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateAccessEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "CreateAccessEntry",
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
  private serialize(input: CreateAccessEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAccessEntryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessEntryCommandOutput> {
    return de_CreateAccessEntryCommand(output, context);
  }
}
