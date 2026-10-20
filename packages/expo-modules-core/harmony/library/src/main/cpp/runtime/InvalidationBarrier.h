/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#pragma once

#include <atomic>
#include <cstddef>
#include <functional>
#include <memory>

namespace expo::harmony {

/** Thread-safe one-shot countdown for RuntimeContext teardown. */
class InvalidationBarrier final {
public:
  static std::shared_ptr<InvalidationBarrier> create(
      size_t count,
      std::function<void()> completion);

  void arrive() noexcept;

private:
  InvalidationBarrier(size_t count, std::function<void()> completion);
  void complete() noexcept;

  std::atomic_size_t remaining_;
  std::function<void()> completion_;
};

}  // namespace expo::harmony
