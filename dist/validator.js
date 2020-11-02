"use strict";exports.Validator=class{constructor(e){this.rules=e}validate(e){const r=Object.entries(this.rules).reduce(((r,[t,s])=>{const i=s.split("|").map((e=>e.trim())),o=e[t];return[...r,...i.reduce(((r,s)=>{if("required"===s)return void 0===o?[...r,t+" is required."]:r;if("email"===s){const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return"string"==typeof o&&e.test(o)?r:[...r,t+" should be a valid email."]}if("password"===s){const e=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/;return"string"==typeof o&&e.test(o)?r:[...r,t+" should contain at least digits, lower & upper letters, symbols and at least 8 characters."]}if(s.startsWith("same")){const[,i]=s.split(":");if(void 0===i)throw new Error('No value defined for the rule "same".');const n=i;return e[n]!==o?[...r,`${t} should be the same as ${n}.`]:r}if(s.startsWith("minimum")){const[,e]=s.split(":");if(void 0===e)throw new Error('No value defined for the rule "minimum".');const i=Number(e);if(!Number.isFinite(i))throw new Error('No number defined for the rule "minimum".');const n=i;return(Number(o)||0)<n?[...r,`${t} should be at least equals to ${n}.`]:r}throw new Error(`Unrecognized rule: ${s}.`)}),[])]}),[]);return 0===r.length?null:r}};