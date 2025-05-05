"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnalyzeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_analyze_dto_1 = require("./create-analyze.dto");
class UpdateAnalyzeDto extends (0, mapped_types_1.PartialType)(create_analyze_dto_1.CreateAnalyzeDto) {
}
exports.UpdateAnalyzeDto = UpdateAnalyzeDto;
//# sourceMappingURL=update-analyze.dto.js.map