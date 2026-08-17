interface InkbleedTextProps {
  text: string;
  className?: string;
}

export default function InkbleedText({ text, className = '' }: InkbleedTextProps) {
  return (
    <span 
      className={`inline-block select-none transition-all duration-300 hover:tracking-wide ${className}`}
      style={{
        filter: 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.4)) contrast(200%) blur(0.4px)',
        textShadow: '0 0 3px rgba(255, 255, 255, 0.6), 0 0 8px rgba(0, 0, 0, 0.9)'
      }}
    >
      {text}
    </span>
  );
}