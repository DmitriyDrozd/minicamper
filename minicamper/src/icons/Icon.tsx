import styles from './Icon.module.sass';

interface IIcon {
    children: JSX.Element,
}

export const Icon = ({ children }: IIcon) => (
    <div className={styles.Icon}>{children}</div>
)