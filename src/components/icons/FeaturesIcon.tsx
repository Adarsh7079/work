export default function FeaturesIcon({
    className,
}: {
    className?: string;
}) {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 100 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="10" y="5" width="32" height="32" rx="4" />
                <rect x="10" y="50" width="32" height="32" rx="4" />
                <rect x="58" y="50" width="32" height="32" rx="4" />
                <path d="M74 5L79.5 16.5L92 18L83 27L85 40L74 34L63 40L65 27L56 18L68.5 16.5L74 5Z" />
            </g>
        </svg>
    );
}
