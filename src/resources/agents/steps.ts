// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AgentsAPI from './agents';

export class Steps extends APIResource {
  /**
   * Retrieve an agent step by its ID.
   */
  retrieve(
    agentId: string,
    sessionId: string,
    turnId: string,
    stepId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StepRetrieveResponse> {
    return this._client.get(
      `/v1/agents/${agentId}/session/${sessionId}/turn/${turnId}/step/${stepId}`,
      options,
    );
  }
}

export interface StepRetrieveResponse {
  /**
   * An inference step in an agent turn.
   */
  step:
    | AgentsAPI.InferenceStep
    | AgentsAPI.ToolExecutionStep
    | AgentsAPI.ShieldCallStep
    | AgentsAPI.MemoryRetrievalStep;
}

export declare namespace Steps {
  export { type StepRetrieveResponse as StepRetrieveResponse };
}
