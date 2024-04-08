import styles from './Typography.module.scss';

export interface TypographyProps {
  /**
   * What variant should the typography be?
   */
  variant?: 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * What align should the typography be?
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  /**
   * The content of the component.
   */
  children: React.ReactNode;
}

export const Typography = ({
  variant = 'body1',
  align = 'inherit',
  children,
}: TypographyProps) => {
  const Tag = variant === 'body1' ? 'p' : variant;

  return (
    <Tag className={[styles[`${variant}`], styles[`${align}`]].join(' ')}>
      {children}
    </Tag>
  );
};
