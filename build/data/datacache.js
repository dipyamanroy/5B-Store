"use strict";
/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveBlueprintChallengeFile = exports.notifications = exports.complaints = exports.basketItems = exports.baskets = exports.feedback = exports.products = exports.users = exports.challenges = void 0;
exports.setRetrieveBlueprintChallengeFile = setRetrieveBlueprintChallengeFile;
/* jslint node: true */
exports.challenges = {};
exports.users = {};
exports.products = {};
exports.feedback = {};
exports.baskets = {};
exports.basketItems = {};
exports.complaints = {};
exports.notifications = [];
exports.retrieveBlueprintChallengeFile = null;
function setRetrieveBlueprintChallengeFile(retrieveBlueprintChallengeFileArg) {
    exports.retrieveBlueprintChallengeFile = retrieveBlueprintChallengeFileArg;
}
//# sourceMappingURL=datacache.js.map