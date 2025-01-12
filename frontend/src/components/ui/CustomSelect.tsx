import { Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface Option {
  label: string
  value: string
}

interface CustomSelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  label: string
  isOpen: boolean
  onToggle: () => void
}

export function CustomSelect({ 
  options, 
  value, 
  onChange, 
  label, 
  isOpen,
  onToggle
}: CustomSelectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom')

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onToggle()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onToggle])

  useEffect(() => {
    if (isOpen && ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const spaceAbove = rect.top
      const dropdownHeight = 240

      setPosition(spaceBelow < dropdownHeight && spaceAbove > spaceBelow ? 'top' : 'bottom')
    }
  }, [isOpen])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between gap-2 rounded-md bg-[#21262d] px-3 py-1.5 text-sm border border-[#30363d] text-white hover:bg-[#30363d] min-w-[120px] transition duration-300"
      >
        <span>{label}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`absolute ${
          position === 'bottom' ? 'top-full' : 'bottom-full'
        } right-0 z-50 mt-1 w-56 rounded-md border border-[#30363d] bg-[#161b22] py-1 shadow-lg transition-all duration-200 ease-in-out transform origin-top ${
          isOpen 
            ? 'opacity-100 visible scale-100 translate-y-0'
            : 'opacity-0 invisible scale-95 -translate-y-2'
        }`}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value)
              onToggle()
            }}
            className="flex w-full items-center px-3 py-2 text-sm text-gray-300 hover:bg-[#30363d] relative transition duration-300"
          >
            {option.value === value && (
              <Check className="absolute left-3 h-4 w-4" />
            )}
            <span className="pl-7">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}