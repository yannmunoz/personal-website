import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yann Muñoz Portfolio',
    short_name: 'Yann Muñoz',
    description: 'Senior React Native & Frontend Engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#f6ff17',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
