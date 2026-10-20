/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#include "ExpoPackage.h"

#include "runtime/RuntimeErrorBindings.h"

namespace expo::harmony {

std::vector<rnoh::ArkTSMessageHandler::Shared> ExpoPackage::createArkTSMessageHandlers() {
  return createRuntimeErrorHandlers(errors_);
}

rnoh::GlobalJSIBinders ExpoPackage::createGlobalJSIBinders(const rnoh::GlobalJSIBinder::Context &context) {
  return createRuntimeErrorBinders(context, errors_);
}

}  // namespace expo::harmony
