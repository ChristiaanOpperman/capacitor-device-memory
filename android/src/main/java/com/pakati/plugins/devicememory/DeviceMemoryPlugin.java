package com.pakati.plugins.devicememory;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;
import org.json.JSONObject;
import com.getcapacitor.JSObject;

import java.io.BufferedReader;
import java.io.FileReader;

@CapacitorPlugin(name = "DeviceMemory")
public class DeviceMemoryPlugin extends Plugin {

    @PluginMethod
    public void getMemoryInfo(PluginCall call) {
        try {
            long totalMem = 0;
            long availableMem = 0;

            BufferedReader reader = new BufferedReader(new FileReader("/proc/meminfo"));
            String line;

            while ((line = reader.readLine()) != null) {
                if (line.startsWith("MemTotal:")) {
                    totalMem = parseKb(line);
                } else if (line.startsWith("MemAvailable:")) {
                    availableMem = parseKb(line);
                }
            }

            reader.close();

            JSObject result = new JSObject();
            result.put("totalMem", totalMem);
            result.put("availableMem", availableMem);

            call.resolve(result);

        } catch (Exception e) {
            call.reject("Failed to read memory info", e);
        }
    }

    private long parseKb(String line) {
        String[] parts = line.trim().split("\\s+");
        return Long.parseLong(parts[1]);
    }
}
