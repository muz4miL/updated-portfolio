
export const UIIcon = ({ size = 64, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Ruler at the bottom */}
            <rect x="24" y="50" width="36" height="8" rx="1" fill="#D8DCE6" stroke="#545F71" strokeWidth="2" />
            <line x1="28" y1="50" x2="28" y2="54" stroke="#545F71" strokeWidth="2" />
            <line x1="34" y1="50" x2="34" y2="54" stroke="#545F71" strokeWidth="2" />
            <line x1="40" y1="50" x2="40" y2="54" stroke="#545F71" strokeWidth="2" />
            <line x1="46" y1="50" x2="46" y2="54" stroke="#545F71" strokeWidth="2" />
            <line x1="52" y1="50" x2="52" y2="54" stroke="#545F71" strokeWidth="2" />
            <circle cx="56" cy="54" r="2" fill="#545F71" />

            {/* Browser Window */}
            <rect x="8" y="10" width="44" height="44" rx="2" fill="#FFFFFF" stroke="#545F71" strokeWidth="2" />
            <path d="M8 12C8 10.8954 8.89543 10 10 10H50C51.1046 10 52 10.8954 52 12V16H8V12Z" fill="#9AA1B0" stroke="#545F71" strokeWidth="2" />
            <circle cx="13" cy="13" r="1.5" fill="#FFFFFF" />
            <circle cx="17" cy="13" r="1.5" fill="#FFFFFF" />

            {/* Browser Content */}
            <rect x="12" y="20" width="36" height="6" fill="#D8DCE6" />
            <rect x="12" y="28" width="14" height="14" fill="#E67E22" stroke="#545F71" strokeWidth="1.5" />
            <path d="M12 38L17 33L22 38" stroke="#545F71" strokeWidth="1.5" fill="none" />
            <circle cx="19" cy="31" r="1" fill="#FFFFFF" />
            <rect x="28" y="28" width="16" height="14" fill="#D8DCE6" stroke="#545F71" strokeWidth="1.5" strokeDasharray="2 2" />
            <path d="M36 31V39" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 35H40" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
            <rect x="28" y="44" width="20" height="4" fill="#D8DCE6" />

            {/* Pencil */}
            <path d="M6.63604 32.636L9.46447 29.8076L23.6066 43.9497L20.7782 46.7782L6.63604 32.636Z" fill="#9AA1B0" stroke="#545F71" strokeWidth="2" />
            <path d="M19.364 45.364L23.6066 43.9497L25.0208 48.1924L19.364 45.364Z" fill="#545F71" />
            <path d="M6.63604 32.636L9.46447 29.8076L8.05025 28.3934L5.22183 31.2218L6.63604 32.636Z" fill="#E67E22" stroke="#545F71" strokeWidth="2" />
            <rect x="4.51472" y="30.5147" width="2" height="6" transform="rotate(-45 4.51472 30.5147)" fill="#545F71" />

            {/* UI Badge */}
            <rect x="44" y="6" width="16" height="16" rx="2" fill="#FFFFFF" stroke="#545F71" strokeWidth="2" />
            <text x="52" y="17.5" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#E67E22" textAnchor="middle">UI</text>

            {/* Decorative Elements */}
            <path d="M56 40L57 42H59L57.5 43.5L58 45.5L56 44.5L54 45.5L54.5 43.5L53 42H55L56 40Z" fill="#E67E22" />
            <circle cx="4" cy="52" r="2" stroke="#545F71" strokeWidth="1.5" />
            <circle cx="8" cy="58" r="1.5" stroke="#545F71" strokeWidth="1.5" />
        </svg>
    );
};

export default UIIcon;