import { Icon as UIIcon, Link as UILink } from '@faststore/ui'
import { useRef } from 'react'
import type { LinkProps } from '@faststore/ui'
import type { FocusEvent } from 'react'

import FrameworkLink from 'src/components/common/Link'

import type { ButtonProps } from '../Button'
import styles from '../button.module.scss'

type Props = {
  disabled?: boolean
} & ButtonProps &
  LinkProps<typeof FrameworkLink>

function ButtonLink({
  variant = 'primary',
  inverse,
  icon,
  iconPosition,
  children,
  disabled = false,
  ...otherProps
}: Props) {
  const linkRef = useRef<HTMLAnchorElement | null>(null)

  return (
    <UILink
      as={FrameworkLink}
      className={styles.fsButton}
      data-fs-button
      data-fs-button-link
      data-fs-button-variant={variant}
      data-fs-button-inverse={inverse}
      data-fs-button-disabled={disabled}
      onFocus={(e: FocusEvent) => {
        e.preventDefault()

        if (disabled) {
          linkRef.current?.blur()
        }
      }}
      {...otherProps}
    >
      {iconPosition === 'left' && <UIIcon component={icon} />}
      {children}
      {iconPosition === 'right' && <UIIcon component={icon} />}
    </UILink>
  )
}

export default ButtonLink
