"use client"
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

const RenderModel = ({ children, classname }) => {
    return (
        <Canvas className={`w-screen h-screen -z-10 relative ${classname}`}>
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset="dawn" /> { /* "apartment" | "city" | "dawn" | "forest" | "lobby" | "night" | "park" | "studio" | "sunset" | "warehouse" |*/}
        </Canvas>
    )
}

export default RenderModel