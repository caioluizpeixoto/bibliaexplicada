import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Bíblia Comentada - Destrave seu Aprendizado',
  description: 'Entenda a Bíblia de Gênesis a Apocalipse, versículo por versículo, com um material de estudo claro e visual.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* Utmify Pixel */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "693ba8af44501a2491cf373b";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
        <Script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '838575505550071');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=838575505550071&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
