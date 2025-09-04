import './style.css';

export type BadgeProps = {
  variant?: 'hit' | 'sale' | 'premium' | 'new';
  text: string;
  className?: string;
};

export const Badge = ({ variant, text, className = '' }: BadgeProps) => {
  const badgeClasses = ['badge-card', variant ? `badge-card--${variant}` : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={badgeClasses}>
      <span>{text}</span>
    </div>
  );
};
