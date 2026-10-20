/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

// Copyright 2024-present 650 Industries. All rights reserved.

#pragma once

#ifdef __cplusplus

#include <ReactCommon/CallInvoker.h>
#include <ReactCommon/RuntimeExecutor.h>

namespace jsi = facebook::jsi;
namespace react = facebook::react;

namespace expo {

class BridgelessJSCallInvoker : public react::CallInvoker {
public:
  explicit BridgelessJSCallInvoker(react::RuntimeExecutor runtimeExecutor) : runtimeExecutor_(std::move(runtimeExecutor)) {}

  void invokeAsync(react::CallFunc &&func) noexcept override {
    runtimeExecutor_([func = std::move(func)](jsi::Runtime &runtime) { func(runtime); });
  }

  void invokeSync(react::CallFunc &&func) override {
    throw std::runtime_error("Synchronous native -> JS calls are currently not supported.");
  }

private:
  react::RuntimeExecutor runtimeExecutor_;

}; // class BridgelessJSCallInvoker

} // namespace expo

#endif // __cplusplus
