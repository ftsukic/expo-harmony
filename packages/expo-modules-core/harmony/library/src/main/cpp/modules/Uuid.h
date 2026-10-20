/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#pragma once

#include <string>

namespace expo::harmony {

std::string uuidV4();
std::string uuidV5(const std::string &name, const std::string &nameSpace);

}  // namespace expo::harmony
