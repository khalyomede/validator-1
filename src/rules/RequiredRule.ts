"use strict";

import { Rule } from "../Rule";

export class RequiredRule extends Rule {
    constructor({attributeName, attributes, translations}) {
        super({attributeName, attributes, ruleName: "required", translations});
    }

    validate() {
        const attributeName = this.attributeName;
        const attributeValue = this.attributes[attributeName];

        if ("undefined" === typeof attributeValue || null === attributeValue) {
            this.error = `${attributeName} is required.`;
        }
    }
}
