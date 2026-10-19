# Expo Modules 测试模块

Demo 的本地 Expo module，由 `apps/demo/modules` 自动发现。在首页打开 **Expo Modules 测试**，所有功能都在同一个页面内按卡片手动执行。

## 目录

- `src/`，三端共用的接口类型、模块加载及原生视图入口。
- `android/`，Kotlin 模块、SharedObject / SharedRef、原生 View 与全屏 Dialog 页面。
- `ios/`，Swift 模块、SharedObject / SharedRef、原生 ExpoView 与 UIViewController 页面。
- `harmony/`，对应的 ArkTS 模块、共享对象、ExpoView 与 ArkUI 原生页面，另含仅供 HarmonyOS 使用的 `RuntimeDemo` 模块，由 demo 其他演示页使用。

两个原生模块在各平台的名称均为 `ExpoModuleShowcase` 和 `ExpoModuleShowcaseConsumer`，后者接收前一个模块创建的原生对象，用来验证对象跨模块传递。三端暴露同一套接口，都由原生代码实现。

## 功能

模块覆盖 Expo Modules 的常用能力。`platform` 和 `nativeLanguage` 标识当前的原生实现，`echo`、`echoAsync`、`failAsync` 演示同步调用、异步调用和错误返回，`emitEvent` 配合 `onShowcaseEvent` 事件演示事件订阅。

`ShowcaseSharedCounter` 对应 SharedObject，暴露可读写的 `value` 属性、同步 / 异步的 `increment` 方法，并能发出对象事件。`ShowcaseTextRef` 对应 SharedRef，持有只读文本。两者都能传给 `ExpoModuleShowcaseConsumer` 读取和转发，用来确认原生对象跨模块传递时身份保持不变。

原生视图 `ShowcaseView` 接收 `label` 和 `value` 两个 prop，点击内部按钮或通过 ref 调用 `increment` 都会更新计数，并通过 `onValueChanged` 回发事件。`openNativePage` 打开全屏原生页面，用户确认或取消后返回结果。`getLifecycleSnapshot` 返回模块创建、前后台切换和事件订阅的计数快照。
