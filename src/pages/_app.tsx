import '../styles/globals.css';

import type { Metadata } from 'next';
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google'

import SocialMedia from '@/components/social-media-links'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Gabriela Robleto | Homepage',
    description: '¡Hi, Gabriela here!'
}

export default function MyApp({ Component, pageProps} : AppProps) {
    return (
        <div className={inter.className}>
            <Component {...pageProps} />
            <SocialMedia />
        </div>
    )
}