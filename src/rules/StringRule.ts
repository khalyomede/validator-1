"use strict";

import { Rule } from "../Rule";

export class StringRule extends Rule {
    constructor({attributeName, attributes, translations}) {
        super({attributeName, attributes, ruleName: "string", translations});
    }

    validate() {
        const attributeName = this.attributeName;
        const attributeValue = this.attributes[attributeName];

        if ("string" !== typeof attributeValue) {
            this.error = `${attributeName} should be a string.`;
        }
    }
}

