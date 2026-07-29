/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Hero() {
  return (
    <section className="relative w-full bg-[#16161a] overflow-hidden flex items-center justify-center">
      <img
        src="/hero2.png"
        alt="Career Accelerators banner"
        className="w-full h-auto max-w-[1920px] object-contain object-center"
        loading="eager"
        decoding="sync"
      />
    </section>
  );
}