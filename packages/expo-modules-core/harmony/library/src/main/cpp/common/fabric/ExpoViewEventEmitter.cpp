/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

// Copyright 2022-present 650 Industries. All rights reserved.

#include "ExpoViewEventEmitter.h"

#include <utility>

using namespace facebook;

namespace expo {

void ExpoViewEventEmitter::dispatch(std::string eventName, const react::ValueFactory& payloadFactory) const {
  dispatchEvent(std::move(eventName), payloadFactory);
}

} // namespace expo
