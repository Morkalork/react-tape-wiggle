/*eslint-disable*/
// Based on ESLINT v3.4.0

module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true,                                                      // Browser global variables.
    "node": true,                                                         // Node.js global variables and Node.js-specific rules.
    "commonjs": true,                                                     // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
    "es6": true                                                           // Enable all ECMAScript 6 features except for modules.
  },
  "globals": {                                                            // Globally defined variables
    "afterAll": true,
    "afterEach": true,
    "beforeAll": true,
    "beforeEach": true,
    "describe": true,
    "expect": true,
    "jasmine": true,
    "Modernizr": true,
    "it": true,
    "server": true,
    "sinon": true,
    "Snap": true,
    "spyOn": true
  },
  "rules": {
    /* Possible Errors */
    "comma-dangle": [2, "never"],                                         // Trailing commas in object literals.
    "no-cond-assign": 2,                                                  // Assignment operators in conditional statements.
    "no-constant-condition": 2,                                           // Comparing a literal expression in a condition.
    "no-debugger": 2,                                                     // This rule is aimed at eliminating debugger references from your JavaScript.
    "no-dupe-args": 2,                                                    // In strict mode you will receive a SyntaxError if a function takes multiple arguments with the same name.
    "no-dupe-keys": 2,                                                    // Creating objects with duplicate keys in objects.
    "no-duplicate-case": 2,                                               // A switch statements with duplicate case labels.
    "no-empty": 2,                                                        // Empty statements.
    "no-empty-character-class": 2,                                        // Empty character classes in regular expressions.
    "no-ex-assign": 2,                                                    // When an error is caught using a catch block, it's possible to accidentally (or purposely) overwrite the reference to the error.
    "no-extra-boolean-cast": 2,                                           // Disallow Extra Boolean Casts.
    "no-extra-semi": 2,                                                   // Disallow Extra Semicolons.
    "no-func-assign": 2,                                                  // Disallow Function Assignment.
    "no-inner-declarations": [2, "functions"],                            // Declarations in Program or Function Body.
    "no-invalid-regexp": 2,                                               // Disallow Invalid Regular Expressions.
    "no-irregular-whitespace": 2,                                         // No irregular whitespace.
    "no-negated-in-lhs": 2,                                               // Disallow negated left operand of in operator.
    "no-obj-calls": 2,                                                    // Disallow Global Object Function Calls.
    "no-regex-spaces": 2,                                                 // Disallow Spaces in Regular Expressions.
    "no-sparse-arrays": 2,                                                // Disallow Sparse Arrays.
    "no-template-curly-in-string": 2,                                     // Disallow template literal placeholder syntax in regular strings.
    "no-unexpected-multiline": 2,                                         // Avoid code that looks like two expressions but is actually one.
    "no-unreachable": 2,                                                  // Disallow Unreachable Code.
    "no-unsafe-finally": 2,                                               // Disallow control flow statements in finally blocks.
    "use-isnan": 2,                                                       // Require isNaN().
    "valid-typeof": 2,                                                    // Ensures that the results of typeof are compared against a valid string.

    /* Best Practices */
    "array-callback-return": 2,                                           // Enforces return statements in callbacks of array's methods.
    "block-scoped-var": 2,                                                // Treat var as Block Scoped.
    "curly": [2, "all"],                                                  // Require Following Curly Brace Conventions.
    "dot-location": [2, "property"],                                      // Enforce newline before and after dot.
    "eqeqeq": 2,                                                          // Require === and !==.
    "no-alert": 2,                                                        // Disallow Use of Alert.
    "no-caller": 2,                                                       // Disallow Use of caller/callee.
    "no-div-regex": 2,                                                    // Disallow Regexs That Look Like Division.
    "no-empty-function": 2,                                               // Disallow use of empty functions.
    "no-empty-pattern": 2,                                                // Disallow use of empty destructuring patterns.
    "no-eval": 2,                                                         // Disallow eval().
    "no-extend-native": 2,                                                // Disallow Extending of Native Objects.
    "no-extra-bind": 2,                                                   // Disallow unnecessary function binding.
    "no-extra-label": 2,                                                  // Disallow unnecessary labels.
    "no-floating-decimal": 2,                                             // Disallow Floating Decimals.
    "no-implicit-coercion": 2,                                            // Disallow the type conversion with shorter notations.
    "no-implicit-globals": 2,                                             // Disallow var and named functions in global scope.
    "no-implied-eval": 2,                                                 // Disallow Implied eval().
    "no-iterator": 2,                                                     // Disallow Iterator.
    "no-labels": 2,                                                       // Disallow Labeled Statements.
    "no-lone-blocks": 2,                                                  // Disallow Unnecessary Nested Blocks.
    "no-loop-func": 2,                                                    // Disallow Functions in Loops.
    "no-multi-spaces": 2,                                                 // Disallow multiple spaces.
    "no-multi-str": 2,                                                    // Disallow Multiline Strings.
    "no-native-reassign": 2,                                              // Disallow Reassignment of Native Objects.
    "no-new": 2,                                                          // Disallow Primitive Wrapper Instances.
    "no-new-func": 2,                                                     // Disallow Function Constructor.
    "no-new-wrappers": 2,                                                 // Disallow Primitive Wrapper Instances.
    "no-octal": 2,                                                        // Disallow Octal Literals.
    "no-octal-escape": 2,                                                 // Disallow Octal Escapes.
    "no-proto": 2,                                                        // Disallow Use of proto.
    "no-redeclare": 2,                                                    // Disallow Redeclaring Variables.
    "no-script-url": 2,                                                   // Disallow Script URLs.
    "no-self-assign": 2,                                                  // Disallow assignments where both sides are exactly the same.
    "no-self-compare": 2,                                                 // Disallow Self Compare.
    "no-throw-literal": 2,                                                // Restrict what can be thrown as an exception.
    "no-unmodified-loop-condition": 2,                                    // Disallow unmodified conditions of loops.
    "no-unused-labels": 2,                                                // Disallow unused labels.
    "no-useless-concat": 2,                                               // Disallow unncessary concatenation of strings.
    "no-useless-escape": 2,                                               // Disallow unnecessary escape usage.
    "no-warning-comments": [2, {                                          // Disallow Warning Comments.
      "terms": ["tofix"],
      "location": "start"
    }],
    "no-with": 2,                                                         // No with Statements.
    "wrap-iife": [2, "inside"],                                           // Require IIFEs to be Wrapped.
    "yoda": [2, "never"],                                                 // Require or disallow Yoda Conditions.

    /* Strict Mode */
    "strict": [2, "safe"],                                                // A Use Strict Directive at the beginning of a script or function body.

    /* Variables */
    "no-catch-shadow": 2,                                                 // Disallow Shadowing of Variables Inside of catch.
    "no-delete-var": 2,                                                   // Disallow Variables Deletion.
    "no-label-var": 2,                                                    // Disallow Labels That Are Variables Names.
    "no-shadow": 2,                                                       // Disallow Shadowing.
    "no-shadow-restricted-names": 2,                                      // Disallow Shadowing of Restricted Names.
    "no-undef": 2,                                                        // Disallow Undeclared Variables.
    "no-undef-init": 2,                                                   // Disallow Initializing to undefined.
    "no-unused-vars": 2,                                                  // Variables that are declared and not used anywhere in the code.
    "no-use-before-define": 2,                                            // Disallow Early Use.

    /* Node.js */
    "handle-callback-err": 2,                                             // Ensures Callback Error Handling.
    "no-new-require": 2,                                                  // Disallow new require.

    /* Stylistic Issues */
    "array-bracket-spacing": [2, "never"],                                // Disallow or enforce spaces inside of brackets.
    "brace-style": [2, "stroustrup", { "allowSingleLine": true }],        // Require Brace Style.
    "camelcase": [2, { "properties": "always" }],                         // Require Camelcase.
    "comma-spacing": [2, { "before": false, "after": true }],             // Enforces spacing around commas.
    "comma-style": [2, "last"],                                           // Comma style.
    "computed-property-spacing": [2, "never"],                            // Disallow or enforce spaces inside of computed properties.
    "indent": ["error", 2],                                                // 2 space indentation
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],     // Enforce Property Spacing.
    "max-depth": [2, 7],                                                  // Specify the maximum depth that blocks can be nested.
    "max-params": [2, 9],                                                 // Limits the number of parameters that can be used in the function declaration.
    "new-parens": 2,                                                      // Require Parens for Constructors.
    "newline-before-return": 2,                                           // Require newline before return statement.
    "no-array-constructor": 2,                                            // Disallow creation of dense arrays using the Array constructor.
    "no-lonely-if": 2,                                                    // Disallow if as the Only Statement in an else Block.
    "no-mixed-spaces-and-tabs": 2,                                        // Disallow mixed spaces and tabs for indentation.
    "no-multiple-empty-lines": [2, { "max": 1 }],                         // Disallows multiple blank lines.
    "no-new-object": 2,                                                   // Disallow new Object.
    "no-spaced-func": 2,                                                  // Disallow Spaces in Function Calls.
    "no-trailing-spaces": 2,                                              // Disallow trailing spaces at the end of lines.
    "no-whitespace-before-property": 2,                                   // Disallow whitespace before properties.
    "object-curly-spacing": [2, "never"],                                 // Disallow or enforce spaces inside of curly braces in objects.
    "one-var-declaration-per-line": [2, "initializations"],               // Require or disallow an newline around variable declarations.
    "operator-linebreak": [2, "after"],                                   // Operator Linebreak
    "quotes": [2, "single"],                                              // Enforce Quote Style.
    "semi": [2, "always"],                                                // Enforce Semicolons.
    "semi-spacing": [2, { "before": false, "after": true }],              // Enforce spacing before and after semicolons.
    "space-before-blocks": [2, "always"],                                 // Require Or Disallow Space Before Blocks.
    "space-before-function-paren": [2, {                                  // Require or disallow spaces before function parenthesis.
      "anonymous": "always",
      "named": "never"
    }],
    "space-in-parens": [2, "never"],                                      // Disallow or enforce spaces inside of parentheses.
    "space-infix-ops": 2,                                                 // Require Spaces Around Infix Operators.
    "spaced-comment": [2, "always", {                                     // Requires or disallows a whitespace (space or tab) beginning a comment.
      "exceptions": ["**"]
    }],

    /* ECMAScript 6 */
    "arrow-parens": 2,                                                    // Require parens in arrow function arguments.
    "arrow-spacing": 2,                                                   // Require space before/after arrow functions arrow.
    "no-const-assign": 2,                                                 // Disallow modifying variables that are declared using const.
    "no-duplicate-imports": 2,                                            // Disallow duplicate module imports.
    "no-useless-computed-key": 2,                                         // Disallow unnecessary computed property keys in object literals.
    "no-useless-rename": 2,                                               // Disallow renaming import, export, and destructured assignments to the same name.
    "no-var": 2,                                                          // Require let or const instead of var.
    "object-shorthand": [2, "properties"],                                // Require Object Literal Shorthand Syntax.
    "prefer-arrow-callback": 2,                                           // Suggest using arrow functions as callbacks.
    "prefer-const": 2,                                                    // Suggest to use const.
    "prefer-rest-params": 2,                                              // Suggest using the rest parameters instead of arguments.
    "prefer-spread": 2,                                                   // Suggest using of the spread operator instead of .apply().
    "prefer-template": 2,                                                 // Suggest using template literals instead of string concatenation.
    "template-curly-spacing": [2, "never"]                                // Enforce spacing around embedded expressions of template strings.
  }
};
