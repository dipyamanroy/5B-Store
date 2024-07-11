"use strict";
// from https://github.com/sindresorhus/is-docker/tree/main MIT Licensed
// inlined to avoid import problems in cypress
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isDocker;
const fs_1 = __importDefault(require("fs"));
let isDockerCached;
function hasDockerEnv() {
    try {
        fs_1.default.statSync('/.dockerenv');
        return true;
    }
    catch {
        return false;
    }
}
function hasDockerCGroup() {
    try {
        return fs_1.default.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
    }
    catch {
        return false;
    }
}
function isDocker() {
    // TODO: Use `??=` when targeting Node.js 16.
    if (isDockerCached === undefined) {
        isDockerCached = hasDockerEnv() || hasDockerCGroup();
    }
    return isDockerCached;
}
//# sourceMappingURL=is-docker.js.map