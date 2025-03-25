export interface MemoryInfo {
  totalMem: number;
  availableMem: number;
}

export interface MemoryInfoPlugin {
  getMemoryInfo(): Promise<MemoryInfo>;
}