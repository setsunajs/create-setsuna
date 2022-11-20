import { jsconfigJson } from "./../template/jsconfigJson"
import { PKG } from "src/makeBasePackage"
import { Temp } from "src/makeBaseTemplate"

export const withJsOptions = (pkg: PKG, template: Temp) => {
  const jsconfigJson_ = jsconfigJson()
  template.set(jsconfigJson_[0], jsconfigJson_[1])
}
