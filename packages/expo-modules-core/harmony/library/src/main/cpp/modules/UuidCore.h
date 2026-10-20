/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#pragma once

#include <array>
#include <cstdint>
#include <string>

namespace expo::harmony {

std::string formatUuid(const std::array<uint8_t, 16> &bytes);
void applyUuidVersionAndVariant(std::array<uint8_t, 16> &bytes, uint8_t version);
std::string uuidV5Core(const std::string &name, const std::string &nameSpace);

}  // namespace expo::harmony
