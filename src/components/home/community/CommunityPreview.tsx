import type { CSSProperties } from 'react';
import { COMMUNITY_CHANNELS } from '../../../constants';

const MOCK_MESSAGES = [
  { initials: 'AR', name: 'Aditi', text: 'Just shipped my AI resume analyzer 🚀', time: '2m' },
  { initials: 'MT', name: 'Marco', text: 'Anyone free for a study session tonight?', time: '8m' },
  { initials: 'PS', name: 'Priya', text: 'The RAG workshop replay is up in #study-groups', time: '15m' },
];

const FLOATING_AVATARS = [
  { initials: 'JW', gradient: 'from-blue-500 to-cyan-400', className: 'absolute -left-4 -top-4 z-20 h-12 w-12 sm:-left-6 sm:-top-6' },
  { initials: 'ZL', gradient: 'from-purple-500 to-pink-400', className: 'absolute -right-3 top-10 z-20 h-10 w-10 sm:-right-5' },
  { initials: 'DK', gradient: 'from-emerald-500 to-teal-400', className: 'absolute -bottom-4 left-10 z-20 h-11 w-11 sm:-bottom-6' },
];

function FloatingAvatar({
  className,
  gradient,
  initials,
  index,
}: {
  className: string;
  gradient: string;
  initials: string;
  index: number;
}) {
  const floatStyle = {
    '--node-duration': `${5 + (index % 3) * 0.8}s`,
    '--node-delay': `${index * 0.5}s`,
    '--node-float': index % 2 === 0 ? '-9px' : '-6px',
  } as CSSProperties;

  return (
    <div className={`universe-node-float ${className}`} style={floatStyle}>
      <div
        className={`flex h-full w-full items-center justify-center rounded-full border-2 border-white bg-gradient-to-br text-xs font-bold text-white shadow-[0_8px_20px_rgba(15,23,42,0.18)] ${gradient}`}
      >
        {initials}
      </div>
    </div>
  );
}

export function CommunityPreview() {
  return (
    <div className="relative">
      {FLOATING_AVATARS.map((avatar, index) => (
        <FloatingAvatar key={avatar.initials} {...avatar} index={index} />
      ))}

      <div className="surface-card card-hover overflow-hidden">
        <div className="flex items-center justify-between border-b border-border-soft px-5 py-4">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 flex-none rounded-full bg-emerald-400" />
            <p className="text-sm font-semibold text-navy">MetaWaves Community</p>
          </div>
          <span className="badge-pill">2,340 online</span>
        </div>

        <div className="flex">
          <div className="hidden w-36 flex-none border-r border-border-soft p-3 sm:block">
            {COMMUNITY_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.name}
                  className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-text-secondary transition-colors duration-200 hover:bg-gray-50 hover:text-navy"
                >
                  <Icon size={14} className="flex-none text-gray-400" />
                  <span className="truncate">#{channel.name}</span>
                </div>
              );
            })}
          </div>

          <div className="flex-1 space-y-4 p-5">
            {MOCK_MESSAGES.map((msg) => (
              <div key={msg.name} className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent-blue/20 to-purple-500/20 text-xs font-bold text-accent-blue">
                  {msg.initials}
                </span>
                <div className="min-w-0">
                  <p className="text-xs">
                    <span className="font-semibold text-navy">{msg.name}</span>{' '}
                    <span className="text-gray-400">· {msg.time}</span>
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-text-secondary">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
