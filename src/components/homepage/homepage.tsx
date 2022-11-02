import React, { useEffect, useRef } from 'react'

import './index.scss'

import SessionCollections from './SessionCollections'
import SessionInfo from './SessionInfo'
import SessionNFTs from './SessionNFTs'
import SessionBanner from './SessionBanner'
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn
} from "react-scroll-motion";
const Homepage = () => {
    const Ref_session = useRef();
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    useEffect(() => {
        console.log('myRef', Ref_session.current);
    }, []);
    return (
        <div className='bg-home min-h-screen'>
            <div className="banner-wrapper lg:flex hidden flex-col items-center z-[0] w-full">


                <ScrollContainer>
                    <ScrollPage page={0}>
                        <Animator animation={batch(FadeIn(), MoveOut(0, -200))}>
                            <SessionBanner />
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={1}>

                        <Animator animation={batch(FadeIn(), MoveOut(0, -200))}>
                            <SessionNFTs />
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={2}>

                        <Animator animation={batch(FadeIn(), MoveIn(0, -200))}>
                            <SessionInfo />
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={3}>
                        <Animator animation={batch(FadeIn(), MoveOut(0, -200))}>
                            <SessionCollections />
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>

            </div>

            <div className="flex lg:hidden flex-col items-center z-[0] w-full px-4">
                <SessionBanner />
                <SessionNFTs />
                <SessionInfo />
                <SessionCollections />
            </div>
        </div>
    )
}

export default Homepage
