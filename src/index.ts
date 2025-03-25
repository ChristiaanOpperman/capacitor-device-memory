import { registerPlugin } from '@capacitor/core';

export interface MemoryInfo {
  totalMem: number;
  availableMem: number;
}

export const DeviceMemory = registerPlugin<{
  getMemoryInfo: () => Promise<MemoryInfo>;
}>('DeviceMemory');