import React from 'react'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@src/styles/globals.scss'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Arshaan | Personal website',
    description: 'Meet my experience and skills.',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang='en'>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
