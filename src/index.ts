import { registerPlugin } from '@capacitor/core';
import type { MemoryInfoPlugin } from './definitions';

export const DeviceMemory = registerPlugin<MemoryInfoPlugin>('DeviceMemory');
