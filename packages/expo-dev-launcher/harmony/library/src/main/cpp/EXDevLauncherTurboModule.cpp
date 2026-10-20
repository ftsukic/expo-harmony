/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#include "EXDevLauncherTurboModule.h"

namespace expo::harmony {

EXDevLauncherTurboModule::EXDevLauncherTurboModule(
    const ArkTSTurboModule::Context context,
    const std::string name)
    : ArkTSTurboModule(context, name) {
  methodMap_ = {ARK_METHOD_METADATA(getConstants, 0)};
}

}  // namespace expo::harmony
