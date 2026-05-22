import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link2, ChevronLeft, ChevronRight, UserPlus, MousePointerClick, CreditCard, Package } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Elige tu producto",
    desc: "Selecciona la cantidad de Robux o el ítem que necesitas desde nuestro catálogo verificado.",
    icon: MousePointerClick,
    active: true,
    color: "text-[#F5A500]",
    borderColor: "border-[#F5A500]/30"
  },
  {
    num: "02",
    title: "Realiza tu pago",
    desc: "Paga de forma segura con los métodos disponibles. Tu transacción está protegida en todo momento.",
    icon: CreditCard,
    active: false,
    color: "text-[#FFD000]",
    borderColor: "border-[#FFD000]/30"
  },
  {
    num: "03",
    title: "Recibe tu pedido",
    desc: "Tu entrega llega en minutos con seguimiento en tiempo real en tu cuenta.",
    icon: Package,
    active: false,
    color: "text-[#FF8C00]",
    borderColor: "border-[#FF8C00]/30"
  }
];

export default function HowItWorks() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="how-it-works" className="pt-0 pb-8 md:py-24 -mt-20 relative overflow-hidden">
      {/* Side Overlays - Left */}
      <div className="absolute top-1/2 bottom-0 left-0 w-1/3 z-[1] opacity-100 blur-3xl bg-gradient-to-tr from-[#3a1f00]/90 via-[#1a0d00]/75 via-35% to-transparent pointer-events-none" />
      {/* Side Overlays - Right */}
      <div className="absolute top-1/2 bottom-0 right-0 w-1/3 z-[1] opacity-100 blur-3xl bg-gradient-to-tl from-[#3a1f00]/95 via-[#1a0d00]/80 via-35% to-transparent pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-20 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col mb-12 md:mb-20 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-[1.1] tracking-tight">
            <span className="text-[#F3E8D6]">Tu guía para comprar</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500">de forma segura.</span>
          </h2>
        </div>

        {/* Carrusel horizontal en móviles, Grid en desktop */}
        <div className="overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 pb-4 md:pb-0 w-full max-w-[1200px] mx-auto justify-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={window.innerWidth >= 768 ? { y: -12, scale: 1.02 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col relative overflow-hidden select-none group/card cursor-pointer w-[75vw] max-w-[290px] md:w-full md:min-w-0 min-h-[190px] md:min-h-[290px] border md:transition-all duration-500 bg-gradient-to-br from-[#1c1200]/80 to-[#0c0700]/90 backdrop-blur-md md:backdrop-blur-2xl border-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.6)] md:hover:border-yellow-500/50 md:hover:shadow-[0_30px_70px_rgba(245,165,0,0.08)] flex-shrink-0"
              >
                {/* Animated Light Streak on Hover */}
                <div className="hidden md:block absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Top Row: Number & Icon */}
                <div className="flex justify-between items-start mb-auto relative z-10">
                  <div className="w-9 md:w-11 h-9 md:h-11 rounded-xl md:rounded-2xl flex items-center justify-center text-[11px] md:text-xs font-black tracking-tighter md:transition-all duration-500 md:group-hover/card:scale-110 bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-[0_0_15px_rgba(245,165,0,0.35)]">
                    {step.num}
                  </div>
                  <div className="p-2.5 md:p-3.5 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 md:transition-all duration-500 md:group-hover/card:bg-yellow-500/20 md:group-hover/card:text-yellow-400 md:group-hover/card:border-yellow-500/30 text-white/80">
                    <step.icon
                      size={20}
                      strokeWidth={2.2}
                      className="md:w-[22px] md:h-[22px]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6 md:mt-10">
                  <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3 group-hover/card:text-yellow-400 transition-colors duration-300 tracking-tight">{step.title}</h3>
                  <p className="text-[11px] md:text-[13px] leading-relaxed transition-colors duration-300 text-yellow-100/70">
                    {step.desc}
                  </p>
                </div>

                {/* Background Watermark Icon (Animated) */}
                <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover/card:opacity-[0.08] transition-all duration-700 group-hover/card:scale-110">
                  <step.icon
                    className="text-white w-40 h-40"
                    strokeWidth={1}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
