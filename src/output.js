/**
 * @import { JsonNode } from "./jsonast.d.ts"
 */


export class Output {
  valid;
  instanceLocation;
  absoluteKeywordLocation;
  errors;

  /**
 * @param {boolean} valid
 * @param {JsonNode} keywordNode
 * @param {JsonNode} instanceNode
 * @param {string} keyword
 * @param {Output[]} [errors]
 */
  constructor(valid, keywordNode, instanceNode, keyword, errors) {
    this.valid = valid;
    this.keywordLocation = keywordNode.location;    //location of the keyword relative to the schema node being evaluated
    this.absoluteKeywordLocation = keywordNode.location;    //absolute location of the keyword in the schema
    this.instanceLocation = instanceNode.location;
    this.keyword = keyword;
    this.error = `current instance should pass "${keyword}" keyword validation`;

    if (errors) {
      this.errors = errors;
    }
  }
};