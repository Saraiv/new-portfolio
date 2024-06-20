import { Avatar } from "@/public/models/My_model"
import RenderModel from "@/app/components/render_model"
import CircularMenu from "@/app/components/circular_menu"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <div className="w-full h-screen">
        <CircularMenu />
        <RenderModel>
          <Avatar />
        </RenderModel>
      </div>
    </main>
  );
}

export default Home
