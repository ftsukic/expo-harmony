/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import ExpoModulesCore

public final class ExpoModuleShowcaseConsumerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoModuleShowcaseConsumer")
    Function("readSharedCounter") { (counter: ShowcaseSharedCounter) in counter.value }
    Function("forwardSharedCounter") { (counter: ShowcaseSharedCounter) in counter }
    Function("readSharedTextRef") { (ref: ShowcaseTextRef) in ref.ref }
    Function("forwardSharedTextRef") { (ref: ShowcaseTextRef) in ref }
  }
}
