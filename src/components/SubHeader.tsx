
import React from 'react'

interface SubHeaderProps {
  title: string
  subtitle: string
  badge?: string
}

const SubHeader: React.FC<SubHeaderProps> = ({
  title,
  subtitle,
  badge = 'WALLETMiner',
}) => {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="mb-4 rounded-full border border-[#B8FF5C]/20 bg-[#B8FF5C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8FF5C]">
        {badge}
      </span>

      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
        {subtitle}
      </p>

      <div className="mt-6 h-1 w-16 rounded-full bg-[#B8FF5C]" />
    </div>
  )
}

export default SubHeader
