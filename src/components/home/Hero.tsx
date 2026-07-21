/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Hero() {
  return (
    <section className="relative w-full bg-[#16161a] overflow-hidden h-[480px] lg:h-[520px]">
      <img
        src="/hero.webp"
        alt="Career Accelerators banner"
        className="w-full h-full object-cover object-center"
        loading="eager"
        decoding="sync"
      />
    </section>
  );
}