"use strict";

import { Rule } from "../Rule";

export class EmailRule extends Rule {
    constructor({attributeName, attributes, translations}) {
        super({attributeName, attributes, ruleName: "email", translations});
    }

    validate() {
		const attributeName = this.attributeName;
        const attributeValue = this.attributes[attributeName];

        /* eslint-disable-next-line */
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/u;

        if ("string" === typeof attributeValue && !emailPattern.test(attributeValue)) {
            this.error = `${attributeName} should be a valid email.`;
        }
    }
}
