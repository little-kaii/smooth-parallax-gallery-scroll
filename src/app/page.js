'use client';

import styles from './page.module.scss';
import Image from 'next/image';
import { useTransform, useScroll, motion as m } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import useDimension from '@/hooks/useDimension';

const images = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg',
    '06.jpg',
    '07.jpg',
    '08.jpg',
    '09.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
];

export default function Home() {
    const container = useRef(null);
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
    const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.spacer}>
                <div className={styles.masker}>
                    <m.h3
                        initial={{ y: '200%' }}
                        animate={{ y: '0%' }}
                        transition={{
                            duration: 0.6,
                        }}
                    >
                        Skies.codes
                    </m.h3>
                </div>
                <div className={styles.masker}>
                    <m.p
                        initial={{ y: '200%' }}
                        animate={{ y: '0%' }}
                        transition={{
                            delay: 0.4,
                            duration: 0.6,
                        }}
                    >
                        Smooth-Parallax-Scroll
                    </m.p>
                    <m.p
                        initial={{ y: '200%' }}
                        animate={{ y: '0%' }}
                        transition={{
                            delay: 0.4,
                            duration: 0.6,
                        }}
                    >
                        By using Next.js, Framer-motion & Lenis scroll
                    </m.p>
                </div>
            </div>
            <div ref={container} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
                <Column images={[images[12], images[13], images[14]]} y={y5} />
            </div>
            <div className={styles.spacer}></div>
        </main>
    );
}

const Column = ({ images, y = 0 }) => {
    return (
        <m.div style={{ y }} className={styles.column}>
            {images.map((src, index) => {
                return (
                    <div key={index} className={styles.imageContainer}>
                        <Image src={`/images/${src}`} fill alt='image' />
                    </div>
                );
            })}
        </m.div>
    );
};
