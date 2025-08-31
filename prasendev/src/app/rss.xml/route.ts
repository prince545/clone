import { DATA } from "@/data/resume";

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"
      xmlns:atom="http://www.w3.org/2005/Atom"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:content="http://purl.org/rss/1.0/modules/content/"
      xmlns:webfeeds="http://webfeeds.org/rss/1.0"
    >
      <channel>
        <title>${DATA.name}'s Blog</title>
        <description>${DATA.description}</description>
        <link>${DATA.url}</link>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <generator>Next.js</generator>
        <atom:link href="${DATA.url}/rss.xml" rel="self" type="application/rss+xml"/>
        <webfeeds:cover image="${DATA.url}/og-image.png" />
        <webfeeds:icon>${DATA.url}/favicon.ico</webfeeds:icon>
        <webfeeds:accentColor>2563EB</webfeeds:accentColor>
        <webfeeds:related layout="card" target="browser"/>
        <image>
          <url>${DATA.url}/og-image.png</url>
          <title>${DATA.name}'s Blog</title>
          <link>${DATA.url}</link>
        </image>
        <copyright>All rights reserved ${new Date().getFullYear()}, ${DATA.name}</copyright>
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
