/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

// Copyright 2022-present 650 Industries. All rights reserved.

#include "ExpoViewShadowNode.h"

namespace react = facebook::react;

namespace expo {

extern const char ExpoViewComponentName[] = "ExpoFabricView";

ExpoViewShadowNode::ExpoViewShadowNode(
    const react::ShadowNodeFragment &fragment,
    const react::ShadowNodeFamily::Shared &family,
    react::ShadowNodeTraits traits)
    : ConcreteViewShadowNode(fragment, family, traits) {
  initialize();
}

ExpoViewShadowNode::ExpoViewShadowNode(
    const react::ShadowNode &sourceShadowNode,
    const react::ShadowNodeFragment &fragment)
    : ConcreteViewShadowNode(sourceShadowNode, fragment) {
  initialize();
}

void ExpoViewShadowNode::initialize() noexcept {
  auto &viewProps = static_cast<const ExpoViewProps &>(*props_);

  if (viewProps.collapsableChildren) {
    traits_.set(react::ShadowNodeTraits::Trait::ChildrenFormStackingContext);
  } else {
    traits_.unset(react::ShadowNodeTraits::Trait::ChildrenFormStackingContext);
  }

  if (YGNodeStyleGetDisplay(&yogaNode_) == YGDisplayContents) {
    auto it = viewProps.propsMap.find("disableForceFlatten");
    bool disableForceFlatten = (it != viewProps.propsMap.end()) ? it->second.getBool() : false;

    if (disableForceFlatten) {
      traits_.unset(react::ShadowNodeTraits::Trait::ForceFlattenView);
    }
  }
}

} // namespace expo
