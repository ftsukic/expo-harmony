/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

// Copyright 2022-present 650 Industries. All rights reserved.

#include "ObjectDeallocator.h"
#include "JSIUtils.h"

namespace expo::common {

void setDeallocator(
  jsi::Runtime &runtime,
  const std::shared_ptr<jsi::Object> &jsThis,
  ObjectDeallocator::Block deallocatorBlock
) {
  std::shared_ptr<ObjectDeallocator> objectDeallocator = std::make_shared<ObjectDeallocator>(
    std::move(deallocatorBlock)
  );
  jsThis->setNativeState(runtime, objectDeallocator);
}

} // namespace expo::common
