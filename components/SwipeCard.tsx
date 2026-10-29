'use client';

import { Request } from '@/lib/types';

interface Props {
  request: Request;
  onSwipe: (direction: 'left' | 'right') => void;
}

export default function SwipeCard({ request, onSwipe }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 max-w-md w-full shadow-xl">
      <div className="mb-4">
        <span className="text-xs uppercase tracking-wider text-emerald-400">
          {request.category.replace('_', ' ')}
        </span>
        <h2 className="text-xl font-semibold mt-1">{request.title}</h2>
        <p className="text-2xl font-bold text-white mt-2">
          ₱{request.amount.toLocaleString()}
        </p>
      </div>

      <p className="text-zinc-300 text-sm leading-relaxed mb-6">
        {request.story}
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => onSwipe('left')}
          className="flex-1 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition"
        >
          Pass
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-medium transition"
        >
          Fund
        </button>
      </div>
    </div>
  );
}
