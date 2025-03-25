// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "DeviceMemory",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "DeviceMemory",
            targets: ["DeviceMemoryPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "DeviceMemoryPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/DeviceMemoryPlugin"),
        .testTarget(
            name: "DeviceMemoryPluginTests",
            dependencies: ["DeviceMemoryPlugin"],
            path: "ios/Tests/DeviceMemoryPluginTests")
    ]
)