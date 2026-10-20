/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

package expo.modules.showcase

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoModuleShowcaseConsumerModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoModuleShowcaseConsumer")
    Function("readSharedCounter") { counter: ShowcaseSharedCounter -> counter.value }
    Function("forwardSharedCounter") { counter: ShowcaseSharedCounter -> counter }
    Function("readSharedTextRef") { ref: ShowcaseTextRef -> ref.ref }
    Function("forwardSharedTextRef") { ref: ShowcaseTextRef -> ref }
  }
}
