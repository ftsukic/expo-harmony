/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

export default class IntentLauncherAbility extends UIAbility {
  private want: Want = {};

  onCreate(want: Want): void {
    this.want = want;
  }

  onWindowStageCreate(stage: window.WindowStage): void {
    const storage = new LocalStorage();
    storage.setOrCreate('want', this.want);
    stage.loadContent('pages/IntentLauncher', storage);
  }
}
