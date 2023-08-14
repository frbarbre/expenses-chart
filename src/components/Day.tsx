import { useState } from 'react';

export default function Day({
  day,
  amount,
  mostExpensive,
}: {
  day: string;
  amount: number;
  mostExpensive: number;
}) {
  const [isHovered, setIsHovered] = useState('');

  return (
    <figure className="flex flex-col items-center relative">
      <div
        style={{ height: (250 / 100) * amount + 'px' }}
        className={`w-[48px] rounded-md ${
          mostExpensive === amount ? 'bg-cyan' : 'bg-red'
        }`}
        onMouseEnter={() => setIsHovered(day)}
        onMouseLeave={() => setIsHovered('')}
      >
        {isHovered === day && (
          <article className="bg-darkBrown text-white font-bold py-[3px] px-[6px] rounded-md text-[15px] absolute top-[0] translate-x-[-50%] left-[50%] translate-y-[-120%]">
            ${amount}
          </article>
        )}
      </div>
      <figcaption className="text-[13px] text-gray-500">{day}</figcaption>
    </figure>
  );
}
