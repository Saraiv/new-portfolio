import { buttons_list, full_angle, half_angle } from "@/app/helpers/data"
import IndexButtons from "@/app/components/index_buttons"

const Navigation = () => {
    const angle = full_angle / buttons_list.length
    return (
        <div>
            <h1 className="-z-50 fixed h-screen flex items-center justify-center w-full  text-title text-txt-foreground/10">João Saraiva</h1>
            <div className="fixed h-screen flex items-center justify-center w-full">
                <div className="flex items-center justify-between relative animate-pulse">
                    {
                        buttons_list.map((button, index) => {
                            const angle_rad = (angle * index * Math.PI) / half_angle
                            const radious = "calc(20vw - 1rem)"
                            const x = `calc(${radious} * ${Math.cos(angle_rad)})`
                            const y = `calc(${radious} * ${Math.sin(angle_rad)})`

                            return <IndexButtons key={button.label} x={x} y={y} {...button} />

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigation