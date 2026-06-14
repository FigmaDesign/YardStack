import { useState } from 'react'
import FilterListIcon from '@mui/icons-material/FilterList'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import BusinessIcon from '@mui/icons-material/Business'

import { PROPERTIES } from './data'

export default function CityInventory() {
  const [searchQuery, setSearchQuery] = useState('')

  const filters = ['Property Type', 'BHK', 'Budget', 'Area']

  return (
    <div className="flex-1 w-full h-full flex flex-col bg-[#F3F4F6] overflow-hidden">
      {/* Header: Filters */}
      <div className="bg-white z-30 shadow-sm shrink-0">
        <div className="px-2.5 py-2.5 flex gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {filters.map((filter) => (
            <button 
              key={filter}
              className="flex items-center gap-1 px-2.5 py-1 border border-[var(--color-border-default)] rounded-md text-[9px] font-medium text-[var(--color-text-primary)] hover:bg-gray-50 whitespace-nowrap"
            >
              {filter}
              <KeyboardArrowDownIcon sx={{ fontSize: 11 }} className="text-[var(--color-text-secondary)]" />
            </button>
          ))}
          <button className="flex items-center gap-1 px-2.5 py-1 border border-[var(--color-border-default)] rounded-md text-[9px] font-medium text-[var(--color-text-primary)] hover:bg-gray-50 whitespace-nowrap ml-auto">
            <FilterListIcon sx={{ fontSize: 11 }} className="text-[var(--color-text-secondary)]" />
            More Filters
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex flex-col min-h-0">
        {/* Map Placeholder Area */}
        <div className="flex-1 relative bg-[#e5e9ea] overflow-hidden flex items-center justify-center">
          {/* Fake Map Grid lines */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.3 }} />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/30" />
          
          {/* Map Controls */}
          <div className="absolute right-2.5 top-2.5 flex flex-col gap-1.5 z-10">
            <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
              <MyLocationIcon sx={{ fontSize: 16 }} />
            </button>
            <div className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
              <button className="w-8 h-8 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-gray-50 border-b border-[var(--color-border-default)]">
                <AddIcon sx={{ fontSize: 16 }} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-gray-50">
                <RemoveIcon sx={{ fontSize: 16 }} />
              </button>
            </div>
          </div>

          {/* Fake Map Markers */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-1 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-[3px] bg-[var(--color-brand-purple)] text-white flex items-center justify-center">
                <BusinessIcon sx={{ fontSize: 11 }} />
              </div>
              <div className="pr-1.5">
                <div className="text-[10px] font-bold text-[var(--color-text-primary)] leading-tight">₹ 1.25 Cr</div>
                <div className="text-[7px] text-[var(--color-text-secondary)]">3 BHK</div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-1 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-[3px] bg-[var(--color-brand-purple)] text-white flex items-center justify-center">
                <BusinessIcon sx={{ fontSize: 11 }} />
              </div>
              <div className="pr-1.5">
                <div className="text-[10px] font-bold text-[var(--color-text-primary)] leading-tight">₹ 2.40 Cr</div>
                <div className="text-[7px] text-[var(--color-text-secondary)]">4 BHK</div>
              </div>
            </div>
          </div>

          {/* Location Pin */}
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-blue-500 rounded-full border-[1.5px] border-white shadow-[0_0_0_3px_rgba(59,130,246,0.2)]" />
          </div>
        </div>

        {/* List Sheet Container */}
        <div className="bg-white rounded-t-xl shadow-[0_-3px_15px_rgba(0,0,0,0.08)] z-20 flex flex-col h-[60%] min-h-[280px]">
          <div className="w-full flex justify-center py-1.5 shrink-0 cursor-grab active:cursor-grabbing">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>
          
          <div className="px-3 pb-1.5 flex justify-between items-center shrink-0 border-b border-[var(--color-border-default)] mb-1.5">
            <span className="font-bold text-[var(--color-text-primary)] text-[10px]">128 Properties Found</span>
            <button className="flex items-center text-[9px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
              Sort by: <span className="text-[var(--color-text-primary)] font-bold ml-1 mr-0.5">Relevance</span>
              <KeyboardArrowDownIcon sx={{ fontSize: 12 }} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-2.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {PROPERTIES.map((property) => (
              <div 
                key={property.id}
                className="flex items-start gap-2.5 p-2 bg-white border border-[var(--color-border-default)] rounded-lg hover:border-[var(--color-brand-magenta)]/30 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                {/* Image */}
                <div className="relative w-[90px] h-[68px] sm:w-[105px] sm:h-[75px] rounded-md overflow-hidden shrink-0 shadow-sm border border-gray-100">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  {property.isFeatured && (
                    <div className="absolute top-1 left-1 bg-[var(--color-brand-purple)]/95 backdrop-blur-sm text-white text-[6px] font-extrabold px-1 py-0.5 rounded-sm shadow-sm tracking-wide">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-[68px] sm:h-[75px] py-0.5">
                  <div>
                    <div className="flex justify-between items-start gap-1.5">
                      <div className="min-w-0">
                        <h3 className="font-bold text-[var(--color-text-primary)] text-[10px] leading-tight truncate">
                          {property.name}
                        </h3>
                        <div className="flex items-center text-[var(--color-text-secondary)] text-[8px] mt-0.5">
                          <LocationOnOutlinedIcon sx={{ fontSize: 10 }} className="mr-0.5 shrink-0 text-gray-400" />
                          <span className="truncate">{property.location}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-extrabold text-[var(--color-text-primary)] text-[11px] leading-tight">
                          {property.price}
                        </div>
                        <div className="text-[7px] text-[var(--color-text-secondary)] font-medium mt-0.5">
                          {property.pricePerSqft}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-[8px] text-[var(--color-text-secondary)] mt-1 font-medium">
                      <span className="text-[var(--color-text-primary)]">{property.type}</span>
                      <span className="mx-1 text-gray-300">•</span>
                      <span>{property.area}</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between w-full">
                    <div className="flex items-center text-[7px] font-bold gap-1 mt-0.5 bg-gray-50/80 px-1.5 py-0.5 rounded-[4px] border border-gray-100/50">
                      <span className={property.statusColor === 'brand' ? 'text-[var(--color-brand-purple)]' : 'text-amber-600'}>
                        {property.status}
                      </span>
                      <span className={property.statusColor === 'brand' ? 'text-[var(--color-brand-purple)]/30' : 'text-amber-600/30'}>•</span>
                      <span className={property.statusColor === 'brand' ? 'text-[var(--color-brand-purple)]' : 'text-amber-600'}>
                        {property.statusDetail}
                      </span>
                    </div>
                    <button className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-magenta)] transition-colors p-0.5 -mr-0.5 rounded-full hover:bg-[var(--color-brand-magenta)]/5">
                      <BookmarkBorderIcon sx={{ fontSize: 12 }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
