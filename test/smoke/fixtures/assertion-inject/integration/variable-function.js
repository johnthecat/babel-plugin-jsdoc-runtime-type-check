"use strict";

/**
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns {Number}
 * @typecheck
 */
var variable = function variable(a, b, c) {
  __executeTypecheck__("Anonymous function", "a", a, "\"Number\"");

  __executeTypecheck__("Anonymous function", "b", b, "\"Number\"");

  __executeTypecheck__("Anonymous function", "c", c, "\"Number\"");

  return __executeTypecheck__("Anonymous function", "return", a + b + c, "\"Number\"");
};
