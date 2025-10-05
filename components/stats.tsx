// "use client"

// import { TrendingUp, Users, Code, Award } from "lucide-react"
// import { useEffect, useState } from "react"

// const stats = [
//   {
//     icon: Code,
//     value: 15,
//     suffix: "+",
//     label: "Projetos em Produção",
//     color: "text-primary",
//   },
//   {
//     icon: Users,
//     value: 1000,
//     suffix: "+",
//     label: "Usuários Ativos",
//     color: "text-accent",
//   },
//   {
//     icon: TrendingUp,
//     value: 50,
//     suffix: "+",
//     label: "APIs Integradas",
//     color: "text-chart-3",
//   },
//   {
//     icon: Award,
//     value: 3,
//     suffix: "+",
//     label: "Anos de Experiência",
//     color: "text-chart-2",
//   },
// ]

// export function Stats() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-y border-border overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-chart-3/5" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon
//             return (
//               <div
//                 key={index}
//                 className="text-center space-y-3 sm:space-y-4 group"
//                 style={{
//                   animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : "none",
//                 }}
//               >
//                 <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border group-hover:border-primary/50 transition-all group-hover:scale-110">
//                   <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
//                 </div>
//                 <div>
//                   <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
//                     <span className={stat.color}>
//                       {stat.value}
//                       {stat.suffix}
//                     </span>
//                   </div>
//                   <p className="text-xs sm:text-sm text-muted-foreground mt-2">{stat.label}</p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   )
// }
