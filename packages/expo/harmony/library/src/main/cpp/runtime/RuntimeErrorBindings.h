/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#pragma once

#include <RNOH/Package.h>

#include "RuntimeErrors.h"

namespace expo::harmony {

std::vector<rnoh::ArkTSMessageHandler::Shared> createRuntimeErrorHandlers(std::shared_ptr<RuntimeErrors> errors);
rnoh::GlobalJSIBinders createRuntimeErrorBinders(const rnoh::GlobalJSIBinder::Context &context,
                                                 std::shared_ptr<RuntimeErrors> errors);

}  // namespace expo::harmony
