
import React from 'react';
import imgPost1 from '@/assets/images/footer/f_img_post1.jpeg'

const FooterPosts:React.FC = () => {

    const items = [
        {
            images: imgPost1,
            date:"Dec 20, 2021",
            description:"METAVERSE GAME ANNOU...",
            link:"https://coinquora.com/katana-inu-p2e-metaverse-game-announces-exclusive-partnership-with-seed-thrift-ventures/"
        },
        {
            images: imgPost1,
            date:"Dec 20, 2021",
            description:"METAVERSE GAME ANNOU...",
            link:"https://coinquora.com/katana-inu-p2e-metaverse-game-announces-exclusive-partnership-with-seed-thrift-ventures/"
        },
        {
            images: imgPost1,
            date:"Dec 20, 2021",
            description:"METAVERSE GAME ANNOU...",
            link:"https://coinquora.com/katana-inu-p2e-metaverse-game-announces-exclusive-partnership-with-seed-thrift-ventures/"
        }
    ];

    const listItems = items.map((i) =>
        (
            <div className="text-[#b4b4b5] pt-[16px] flex gap-x-2">
                <div className="w-1/3">
                  <a href={i.link}>
                    <img src={i.images} alt={i.images} />
                  </a>
                </div>
                <div>
                    <span>{i.date}</span>
                    <div>
                        <a href={i.link}>
                            {i.description}
                        </a>
                    </div>
                </div>
            </div>
        )
    );

    return (
        <div>
            <p className="text-[#ffffff] font-blome">Latest Posts</p>
            <div className="mt-4">
                {listItems}
            </div>
        </div>
    )

}

export default FooterPosts;