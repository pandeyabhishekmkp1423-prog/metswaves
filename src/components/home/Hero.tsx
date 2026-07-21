/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Hero() {
  return (
    <section className="relative w-full bg-[#16161a] overflow-hidden flex items-center justify-center h-auto lg:h-[580px]">
      <img
        src="/hero.png"
        alt="Career Accelerators banner"
        className="w-full h-auto max-h-[580px] object-contain object-center lg:h-full lg:object-cover"
        loading="eager"
        decoding="sync"
      />
    </section>
  );
}