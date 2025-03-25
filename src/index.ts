import { registerPlugin } from '@capacitor/core';
import type { MemoryInfo } from './definitions';


export const DeviceMemory = registerPlugin<{
  getMemoryInfo: () => Promise<MemoryInfo>;
}>('DeviceMemory');
