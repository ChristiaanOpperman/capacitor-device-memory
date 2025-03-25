import { registerPlugin } from '@capacitor/core';

export interface MemoryInfo {
  totalMem: number;       // in KB
  availableMem: number;   // in KB
}

export const DeviceMemory = registerPlugin<{
  getMemoryInfo: () => Promise<MemoryInfo>;
}>('DeviceMemory');
