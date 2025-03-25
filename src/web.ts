import { WebPlugin } from '@capacitor/core';

import type { DeviceMemoryPlugin } from './definitions';

export class DeviceMemoryWeb extends WebPlugin implements DeviceMemoryPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
