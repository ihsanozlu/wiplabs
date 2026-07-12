import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function loadFont() {
  const cssRes = await fetch(
    'https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap',
    { headers: { 'User-Agent': 'Mozilla/5.0' } }
  );
  const css = await cssRes.text();
  const woffUrl = css.match(/url\((.+?)\) format\(/)?.[1];
  if (!woffUrl) throw new Error('Could not parse font URL from Google Fonts');
  const fontRes = await fetch(woffUrl);
  return fontRes.arrayBuffer();
}

function pill(label) {
  return {
    type: 'div',
    props: {
      style: {
        background: 'rgba(200, 241, 53, 0.12)',
        border: '1px solid rgba(200, 241, 53, 0.35)',
        color: '#c8f135',
        padding: '6px 18px',
        borderRadius: '6px',
        fontSize: '20px',
        fontWeight: '700',
        fontFamily: 'Syne',
      },
      children: label,
    },
  };
}

async function generate() {
  console.log('Loading font from Google Fonts...');
  const fontData = await loadFont();

  const node = {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: '#0d0f14',
        fontFamily: 'Syne',
        position: 'relative',
      },
      children: [
        // Subtle accent glow top-right
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(200,241,53,0.08) 0%, transparent 70%)',
              borderRadius: '50%',
            },
            children: '',
          },
        },

        // Top: Logo
        {
          type: 'div',
          props: {
            style: { display: 'flex', alignItems: 'center' },
            children: [
              {
                type: 'span',
                props: {
                  style: { color: '#e8eaf0', fontSize: '30px', fontWeight: '700', letterSpacing: '-0.02em' },
                  children: 'WIP',
                },
              },
              {
                type: 'span',
                props: {
                  style: { color: '#c8f135', fontSize: '30px', fontWeight: '700', letterSpacing: '-0.02em' },
                  children: 'Labs',
                },
              },
            ],
          },
        },

        // Center: Headline
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column', gap: '4px' },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    color: '#e8eaf0',
                    fontSize: '74px',
                    fontWeight: '700',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.05',
                  },
                  children: 'Platform Engineering',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    color: '#c8f135',
                    fontSize: '74px',
                    fontWeight: '700',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.05',
                  },
                  children: '& Mobile Apps.',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    color: '#7a7f94',
                    fontSize: '24px',
                    fontWeight: '700',
                    marginTop: '20px',
                    letterSpacing: '0',
                  },
                  children: 'Fixed-price DevOps services · Kubernetes · Terraform · iOS & Android',
                },
              },
            ],
          },
        },

        // Bottom: Pills + URL
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: { display: 'flex', gap: '10px' },
                  children: [
                    pill('Kubernetes'),
                    pill('Terraform'),
                    pill('Azure / AWS'),
                    pill('iOS'),
                    pill('Android'),
                  ],
                },
              },
              {
                type: 'span',
                props: {
                  style: { color: '#7a7f94', fontSize: '22px', fontWeight: '700' },
                  children: 'wiplabs.app',
                },
              },
            ],
          },
        },
      ],
    },
  };

  console.log('Generating SVG...');
  const svg = await satori(node, {
    width: 1200,
    height: 630,
    fonts: [{ name: 'Syne', data: fontData, weight: 700, style: 'normal' }],
  });

  console.log('Converting to PNG...');
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const png = resvg.render().asPng();

  const outPath = join(__dirname, '../public/og.png');
  writeFileSync(outPath, png);
  console.log(`✅  OG image saved → public/og.png (${png.byteLength} bytes)`);
}

generate().catch(err => { console.error(err); process.exit(1); });
