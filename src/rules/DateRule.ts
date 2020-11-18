"use strict";

import { Rule } from "../Rule";

export class DateRule extends Rule {
    constructor({attributeName, attributes, translations}) {
        super({attributeName, attributes, ruleName: "date", translations});
    }

    validate() {
		const attributeName = this.attributeName;
        const attributeValue = this.attributes[attributeName];

        if ("undefined" !== typeof attributeValue && null !== attributeValue && Number.isNaN(Date.parse(attributeValue))) {
            this.error = `${attributeName} should be a valid date.`;
        }
    }
}
