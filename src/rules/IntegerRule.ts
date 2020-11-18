"use strict";

import { Rule } from "../Rule";

export class IntegerRule extends Rule {
    constructor({attributeName, attributes, translations}) {
        super({attributeName, attributes, ruleName: "integer", translations});
    }

    validate() {
        const attributeName = this.attributeName;
        const attributeValue = this.attributes[attributeName];

        if (!Number.isInteger(attributeValue)) {
            this.error = `${attributeName} should be an integer.`;
        }
    }
}
