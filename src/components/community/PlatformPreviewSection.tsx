import { COMMUNITY_CHANNELS } from '../../constants';
import { CommunityPreview } from '../home/community/CommunityPreview';
import { Reveal } from '../ui/Reveal';
import { SectionIntro } from '../ui/SectionIntro';

const CHANNEL_TAGLINES: Record<string, string> = {
  general: 'Introductions, daily chatter, and whatever is on your mind.',
  showcase: 'Post what you shipped and get real, specific feedback.',
  'study-groups': 'Find people learning the exact same module as you, right now.',
  career: 'Job leads, resume swaps, and interview debriefs from the community.',
};

export function PlatformPreviewSection() {
  return (
    <section className="section-shell bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <CommunityPreview />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionIntro
            eyebrow="Community Platform Preview"
            title="One home base for every conversation, every week."
            description="No scattered group chats or dead forums — every channel below lives in the same space, alongside your courses."
          />
          <div className="mt-8 grid gap-4">
            {COMMUNITY_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.name} className="glass-panel flex items-center gap-4 px-5 py-4">
                  <div className="icon-chip h-11 w-11 flex-none">
                    <Icon size={19} />
                  </div>
                  <div>
                    <p className="font-ui text-sm font-semibold text-navy">#{channel.name}</p>
                    <p className="mt-0.5 text-sm text-text-secondary">{CHANNEL_TAGLINES[channel.name]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
