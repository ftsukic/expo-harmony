/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#pragma once

#include "modules/internal/ModuleDefinition.h"

namespace expo::harmony {

/** Core-internal owner for one immutable native module definition. */
class ExpoModule {
public:
  virtual ~ExpoModule() = default;
  virtual ModuleDefinition definition() = 0;
};

}  // namespace expo::harmony
