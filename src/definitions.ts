export interface DeviceMemoryPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
