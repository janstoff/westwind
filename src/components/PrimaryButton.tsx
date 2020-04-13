import React from 'react'

import styles from './primaryButton.module.scss'

interface PrimaryButtonProps {
	readonly type?: string
	readonly children: any
}

const PrimaryButton: React.SFC<PrimaryButtonProps> = ({
	type,
	children,
}: PrimaryButtonProps) => (
	<button type={type} className={styles.primaryButton}>
		{children}
	</button>
)

export default PrimaryButton
