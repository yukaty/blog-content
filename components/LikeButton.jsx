'use client'

import { useState } from 'react'

export function LikeButton() {
  const [likes, setLikes] = useState(21)
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <button
      onClick={toggleLike}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200 font-medium
        ${liked
          ? 'bg-red-400 text-white border-red-500 hover:bg-red-600 shadow-lg'
          : 'bg-gray-100 text-gray-800 border-gray-300 hover:border-red-300 hover:bg-red-50'
        }
      `}
    >
      <span className="text-lg">{liked ? '♥️' : '🤍'}</span>
      <span className="text-sm">{likes}</span>
    </button>
  )
}