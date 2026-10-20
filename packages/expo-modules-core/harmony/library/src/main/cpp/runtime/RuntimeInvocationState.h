/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#pragma once

#include <cstddef>

namespace expo::harmony {

/** Tracks native bodies crossing a RuntimeContext dispatch boundary. */
class RuntimeInvocationState final {
public:
  void acquire() noexcept;

  /** Returns true when the last body retires after drain was requested. */
  bool release() noexcept;

  /** Returns true when no running body remains. */
  bool requestDrain() noexcept;

  size_t activeCount() const noexcept;
  bool isDrainRequested() const noexcept;
  bool isReady() const noexcept;
  void clear() noexcept;

private:
  size_t activeCount_{0};
  bool drainRequested_{false};
};

}  // namespace expo::harmony
