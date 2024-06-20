import { buttons_list, full_angle, half_angle } from "@/app/helpers/data"
import IndexButtons from "@/app/components/index_buttons"

const CircularMenu = () => {
    const angle = full_angle / buttons_list.length
    return (
        < div className="fixed h-screen flex items-center justify-center w-full" >
            <div className="group flex items-center justify-center relative">
                {
                    buttons_list.map((button, index) => {
                        const angle_rad = (angle * index * Math.PI) / half_angle
                        const radious = "calc(22vw - 1rem)"
                        const x = `calc(${radious} * ${Math.cos(angle_rad)})`
                        const y = `calc(${radious} * ${Math.sin(angle_rad)})`

                        return <IndexButtons key={button.label} x={x} y={y} {...button} />
                    })
                }
            </div>
        </div>
    )
}

export default CircularMenu