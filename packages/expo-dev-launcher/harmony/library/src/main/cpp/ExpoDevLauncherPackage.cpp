/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#include "ExpoDevLauncherPackage.h"

#include "EXDevLauncherTurboModule.h"

namespace expo::harmony {

rnoh::TurboModuleFactoryDelegate::SharedTurboModule
ExpoDevLauncherTurboModuleFactoryDelegate::createTurboModule(
    Context context,
    const std::string &name) const {
  // The ArkTS package omits EXDevLauncher in non-debug applications. Checking
  // the paired instance keeps NativeModules.EXDevLauncher absent in release,
  // matching upstream instead of exposing a half-connected C++ wrapper.
  if (name == "EXDevLauncher" && context.arkTSTurboModuleInstanceRef) {
    return std::make_shared<EXDevLauncherTurboModule>(std::move(context), name);
  }
  return nullptr;
}

std::unique_ptr<rnoh::TurboModuleFactoryDelegate>
ExpoDevLauncherPackage::createTurboModuleFactoryDelegate() {
  return std::make_unique<ExpoDevLauncherTurboModuleFactoryDelegate>();
}

}  // namespace expo::harmony
