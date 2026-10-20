/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#pragma once

#include <memory>

#include "modules/internal/ExpoModule.h"

namespace expo::harmony {

class RuntimeContext;

class CoreModule final : public ExpoModule {
public:
  explicit CoreModule(std::shared_ptr<RuntimeContext> context);
  ModuleDefinition definition() override;

private:
  std::weak_ptr<RuntimeContext> context_;
};

}  // namespace expo::harmony
