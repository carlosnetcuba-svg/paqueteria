import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { useGlobal } from "@/context/context"
import { useEffect, useState } from "react"



const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    Grupo: {
        label: "grupi",
        color: "#22c55e",
    },
   
} satisfies ChartConfig

const Grafico = () => {
  
    const { paquetes, grupos } = useGlobal()
    const [thisdata, setThisdata] = useState<Object[]>([])

    useEffect(() => {
        const tempArray:Object[] = []
        grupos.map((g) => {
            tempArray.push({ grupi: g.nombre, cantidad: countGroup(g.nombre) })
        })
        setThisdata(tempArray)
    }, [grupos, paquetes])

    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] h-[250px] w-full">
            <BarChart accessibilityLayer data={thisdata}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="grupi"
                    tickLine={false}
                    tickMargin={1}
                    axisLine={true}
                    tickFormatter={(value) => value}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="cantidad" fill="#3b82f6" radius={4} />
                
            </BarChart>
        </ChartContainer>
    )








function countGroup(nombre: string): number {
    
    try {
        return paquetes.filter((i) => { return i.grupo.nombre === nombre }).length
    }
    catch (e) {
        console.error(e)
        return 0
    }

}



}

export default Grafico


