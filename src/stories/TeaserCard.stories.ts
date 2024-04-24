import TeaserCard from './TeaserCard.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'

const meta = {
  title: 'Example/TeaserCard',
  tags: ['autodocs'],
  component: TeaserCard,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large', 'xl']
    }
  }
}

export default meta

type Story = StoryObj<typeof TeaserCard>
export const ExtraLarge: Story = {
  args: {
    onClick: fn(),
    size: 'xl',
    title: 'Example Title',
    ingress:
      'Equinor har nå gitt opp sine eierandeler i fire russiske selskaper til Rosneft etter tre måneders arbeid og mer enn til milliarder kroner i nedskrivninger',
    tags: ['tag1', 'tag2'],
    initialLetter: false,
    id: 1
  }
}
export const Large: Story = {
  args: {
    ...ExtraLarge.args,
    ingress: 'Mindre forskjeller i kjedens innkjøpspriser',
    size: 'large'
  }
}
export const Medium: Story = {
  args: {
    ...ExtraLarge.args,
    ingress: 'Mindre forskjeller i kjedens innkjøpspriser',
    size: 'medium'
  }
}
export const Small: Story = {
  args: {
    ...ExtraLarge.args,
    size: 'small',
    title: '',
    initialLetter: true
  }
}
