import Link from 'next/link'
import Card from './Card'

interface ProjectCardProps {
  id: number
  title: string
  slug: string
  logo: string
  logoColor: string
  shortDescription: string
  owner: string
  amountRaised: number
  contributors: number
  tags?: string[]
}

export default function ProjectCard({
  id,
  title,
  slug,
  logo,
  logoColor,
  shortDescription,
  owner,
  amountRaised,
  contributors,
  tags
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full" padding={false}>
      <div className="p-4 flex-grow">
        <div className="flex items-center mb-4">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center mr-3" 
            style={{ backgroundColor: `${logoColor}15` }}
          >
            <span className="font-bold" style={{ color: logoColor }}>{logo}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-neutral-500">by {owner}</p>
          </div>
        </div>
        <p className="text-neutral-700 mb-4">{shortDescription}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-auto border-t border-neutral-200 p-4">
        <div className="mb-4">
          <p className="text-lg font-bold">€{amountRaised.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p className="text-sm text-neutral-500">raised by {contributors} contributors</p>
        </div>
        <Link 
          href={`/projects/${slug}`}
          className="block w-full text-center py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-200"
        >
          Fund Project
        </Link>
      </div>
    </Card>
  )
}
