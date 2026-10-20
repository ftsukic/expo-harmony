/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

#pragma once

#include <RNOH/Package.h>

namespace rnoh {

class ExpoDomWebViewPackage final : public Package {
public:
  explicit ExpoDomWebViewPackage(Package::Context context)
      : Package(std::move(context)) {}

  std::vector<ArkTSMessageHandler::Shared> createArkTSMessageHandlers() override;
};

}
