/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Hero() {
  return (
    <section className="relative w-full bg-[#16161a] overflow-hidden h-[650px] lg:h-580px]">
      <img
        src="/hero.png"
        alt="Career Accelerators banner"
        className="w-full h-full object-cover object-center"
        loading="eager"
        decoding="sync"
      />
    </section>
  );
}