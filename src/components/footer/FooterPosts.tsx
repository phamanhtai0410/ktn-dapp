import React from 'react'
import imgPost1 from '@/assets/images/footer/f_img_post1.jpeg'
import thumb1 from '@/assets/images/footer/ka1.webp'
import thumb2 from '@/assets/images/footer/ka2.webp'
import thumb3 from '@/assets/images/footer/ka3.webp'

const FooterPosts: React.FC = () => {
  const items = [
    {
      index: 1,
      images: thumb1,
      date: 'Oct 17, 2022',
      description: 'Katana Inu Early Development In-Game Footage (Alpha Test)',
      link: 'https://www.youtube.com/watch?v=9c7pDf-WFAk',
    },
    {
      index: 2,
      images: thumb2,
      date: 'Jan 22, 2022',
      description:
        'Katana Inu | Cinematic Trailer | Protect The Moon From Enemies',
      link: 'https://www.youtube.com/watch?v=7nykO0FzsVQ',
    },
    {
      index: 3,
      images: thumb3,
      date: 'Feb 14, 2022',
      description: 'Katana Inu Prepare For Battle NFT PC-GAME',
      link: 'https://www.youtube.com/watch?v=_iLT0PL3SGY',
    },
  ]

  const listItems = items.map((i) => (
    <div key={i.index} className="pt-[16px] flex gap-x-2">
      <div className="w-1/3">
        <a href={i.link} target="_blank">
          <img src={i.images} alt={i.images} className="w-[112px] h-[63px]" />
        </a>
      </div>
      <a
        className="w-2/3 text-base flex flex-col"
        href={i.link}
        target="_blank"
      >
        <div className="text-[#727072]">{i.date}</div>
        <span className="text-[#eeeeee] text-ellipsis whitespace-nowrap overflow-hidden">
          {i.description}
        </span>
      </a>
    </div>
  ))

  return (
    <div className="hidden lg:block flex-initial w-[360px] mt-10">
      <p className="text-[#ffffff] font-blome">Latest Posts</p>
      <div className="mt-4">{listItems}</div>
    </div>
  )
}

export default FooterPosts
