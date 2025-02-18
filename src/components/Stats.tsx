import { motion } from 'framer-motion';

interface Stat {
  label: string
  value: string
  description?: string
}

interface StatsProps {
  stats: Stat[]
}

const stats: Stat[] = [
  { label: 'APY', value: '12%' },
  { label: 'TVL', value: '$1.2M' },
  { label: 'Holders', value: '1,000+' },
];

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center rounded-2xl border border-maiz-700/10 bg-maiz-900/50 backdrop-blur-sm p-8"
        >
          <dt className="text-sm font-medium text-gray-300">{stat.label}</dt>
          <dd className="mt-2 text-4xl font-semibold tracking-tight text-maiz-400">
            {stat.value}
          </dd>
          {stat.description && (
            <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}
