import type { ThemeConfig } from 'antd'
import { theme } from 'antd'
import type { Model } from './types'

export const Models: Model[] = [
  // 由于这个模型和 Cloudflare 的其他模型返回值不同, 故在 image/route.ts 中进行了两处特殊处理
  { value: '@cf/black-forest-labs/flux-1-schnell', label: '☁️ FLUX.1 Schnell' },
  {
    value: '@cf/stabilityai/stable-diffusion-xl-base-1.0',
    label: '☁️ SDXL Base',
  },
  {
    value: '@cf/bytedance/stable-diffusion-xl-lightning',
    label: '☁️ SDXL Lightning',
  },
  { value: '@hf/black-forest-labs/FLUX.1-dev', label: '🤗 FLUX.1 Dev' },
  {
    value: '@hf/stabilityai/stable-diffusion-3.5-large',
    label: '🤗 SD 3.5 Large',
  },
  {
    value: '@hf/stabilityai/stable-diffusion-3.5-large-turbo',
    label: '🤗 SD 3.5 Large Turbo',
  },
  {
    value: '@hf/strangerzonehf/Flux-Ghibli-Art-LoRA',
    label: '🤗 FLUX.1 Dev Ghibli-Lora',
    trigger: 'Ghibli Art',
  },
  {
    value: '@hf/Shakker-Labs/FLUX.1-dev-LoRA-Children-Simple-Sketch',
    label: '🤗 FLUX.1 Dev Sketch-Lora',
    trigger: 'sketched style',
  },
  {
    value: '@hf/Wriath18/small_boy',
    label: '🤗 FLUX.1 Dev BOY-Lora',
    trigger: 'BOY',
  },
  {
    value: '@hf/strangerzonehf/Flux-Super-Realism-LoRA',
    label: '🤗 FLUX.1 Dev Realism-Lora',
    trigger: 'Super Realism',
  },
  {
    value: '@hf/strangerzonehf/Flux-Isometric-3D-LoRA',
    label: '🤗 FLUX.1 Dev Isometric-Lora',
    trigger: 'Isometric 3D',
  },
  {
    value: '@hf/strangerzonehf/Flux-Cute-3D-Kawaii-LoRA',
    label: '🤗 FLUX.1 Dev Cute3D-Lora',
    trigger: 'Cute 3d Kawaii',
  },
  {
    value: '@hf/strangerzonehf/Flux-Icon-Kit-LoRA',
    label: '🤗 FLUX.1 Dev Icon-Lora',
    trigger: 'Icon Kit',
  },
  {
    value: '@hf/Datou1111/shou_xin',
    label: '🤗 FLUX.1 Dev Pencil-Lora',
    trigger: 'shou_xin, pencil sketch',
  },
]

export const ANTD_THEME_LIGHT: ThemeConfig = {
  token: {
    colorPrimary: '#ff8080',
    colorText: '#4c0519',
  },
}

export const ANTD_THEME_DARK: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#ff8080',
    colorText: '#ffffff',
  },
}
