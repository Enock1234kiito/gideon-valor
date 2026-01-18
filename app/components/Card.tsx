interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseStyles = 'bg-white rounded-lg transition-all duration-200';
  const variants = {
    default: 'border border-gray-200',
    elevated: 'shadow-lg hover:shadow-xl',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} p-6 ${className}`}>
      {children}
    </div>
  );
}
