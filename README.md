# capacitor-device-memory

A simple Capacitor plugin to retrieve system memory info on Android and iOS.

## ✨ Features

- ✅ Android: Returns total and available memory (via `/proc/meminfo`)
- ✅ iOS: Returns total memory only (as Apple restricts available memory access)
- ⚡ Fully compatible with Capacitor 6+

---

## 📦 Installation

```bash
npm install @christiaan/device-memory
npx cap sync
```

---

## 🛠 Usage

```ts
import { DeviceMemory } from '@christiaan/device-memory';

const memory = await DeviceMemory.getMemoryInfo();

console.log(`Total: ${memory.totalMem} KB`);
console.log(`Available: ${memory.availableMem} KB`);
```

> ℹ️ Values are returned in **kilobytes (KB)** for consistency with `/proc/meminfo`.

---

## 🔍 API

### `getMemoryInfo()`

Returns:
```ts
interface MemoryInfo {
  totalMem: number;       // Total physical memory in KB
  availableMem: number;   // Available memory in KB (0 on iOS)
}
```

---

## 📱 Platform Support

| Platform | Support | Notes                              |
|----------|---------|------------------------------------|
| Android  | ✅       | Uses `/proc/meminfo`               |
| iOS      | ✅       | Only total memory is available     |
| Web      | ❌       | Not supported                      |

---

## 🧑‍💻 Author

Christiaan Opperman  
[@christiaanopperman](https://github.com/your-github-if-applicable)

---

## 📄 License

MIT