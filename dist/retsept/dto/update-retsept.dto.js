"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRetseptDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_retsept_dto_1 = require("./create-retsept.dto");
class UpdateRetseptDto extends (0, mapped_types_1.PartialType)(create_retsept_dto_1.CreateRetseptDto) {
}
exports.UpdateRetseptDto = UpdateRetseptDto;
//# sourceMappingURL=update-retsept.dto.js.map