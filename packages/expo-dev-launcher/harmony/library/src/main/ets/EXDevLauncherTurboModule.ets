/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

import { UITurboModule, UITurboModuleContext } from '@rnoh/react-native-openharmony';
import { DevLauncherController } from './DevLauncherController';

export class EXDevLauncherConstants {
  manifestString: string | null;
  manifestURL: string | null;

  constructor(manifestString: string | null, manifestURL: string | null) {
    this.manifestString = manifestString;
    this.manifestURL = manifestURL;
  }
}

export class EXDevLauncherTurboModule extends UITurboModule {
  static readonly NAME = 'EXDevLauncher';

  constructor(context: UITurboModuleContext) {
    super(context);
  }

  getConstants(): EXDevLauncherConstants {
    const controller = DevLauncherController.get(this.ctx.uiAbilityContext.getApplicationContext());
    return new EXDevLauncherConstants(controller.manifestString, controller.manifestURL);
  }
}
