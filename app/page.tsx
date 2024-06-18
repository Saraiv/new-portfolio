import { Avatar } from "../public/models/My_model.jsx"
import RenderModel from "./components/render_model.jsx"
import Navigation from "./components/index.jsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Avatar />
        </RenderModel>
      </div>
    </main>
  );
}
