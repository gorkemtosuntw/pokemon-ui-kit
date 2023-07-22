import React from 'react'
import { BUTTON_VARIANT, Button, ButtonProps } from '.'
import { objectValuesToControls } from '../../storybook-utils'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: objectValuesToControls(BUTTON_VARIANT),
  },
}
export default meta

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Click Me',
  variant: 'normal',
}
