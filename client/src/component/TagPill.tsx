const TagPill = ({ label }: { label: string }) => (
    <span
        className="inline-flex items-center whitespace-nowrap rounded-full border border-purple-300/30 bg-purple-900/60 px-5 py-2.5 text-sm font-semibold tracking-wide text-purple-100 backdrop-blur-sm transition-colors duration-200 hover:bg-purple-700/70 hover:text-white cursor-default select-none"
    >
        {label}
    </span>
);

export default TagPill;