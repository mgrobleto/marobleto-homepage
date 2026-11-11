import '../styles/globals.css';
import '../styles/home.css';

import type { Metadata } from 'next';
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import { Exo, Inter } from 'next/font/google'

import SocialMedia from '@/components/social-media-links'

const inter = Inter({ subsets: ['latin']})

const exo = Exo({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Gabriela Robleto | Homepage',
    description: '¡Hi, Gabriela here!'
}

export default function MyApp({ Component, pageProps} : AppProps) {
    // the new homepage has its own nav and contact links; other pages keep the floating social links
    const { pathname } = useRouter()
    return (
        <div className={exo.className}>
            <Component {...pageProps} />
            {pathname !== '/' && <SocialMedia />}
        </div>
    )
}