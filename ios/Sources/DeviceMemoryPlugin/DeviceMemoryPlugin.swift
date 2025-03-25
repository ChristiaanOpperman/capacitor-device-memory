import Foundation
import Capacitor

@objc(DeviceMemoryPlugin)
public class DeviceMemoryPlugin: CAPPlugin {
    @objc func getMemoryInfo(_ call: CAPPluginCall) {
        let totalMemory = ProcessInfo.processInfo.physicalMemory

        let result: [String: Any] = [
            "totalMem": totalMemory / 1024,
            "availableMem": 0 
        ]

        call.resolve(result)
    }
}
