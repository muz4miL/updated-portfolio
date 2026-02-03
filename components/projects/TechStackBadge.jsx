"use client";

/**
 * TechStackBadge Component
 * 
 * Displays individual technology badges with category labels.
 * Shows tech name with color-coded category indicators.
 * 
 * Props:
 * - tech: Object with { name, category }
 * - color: Color hex code for badge styling
 */
const TechStackBadge = ({ tech, color = "#64FFDA" }) => {
    const getCategoryColor = (category) => {
        const categoryColors = {
            "Frontend": "#3B82F6",
            "Backend": "#10B981",
            "Database": "#F59E0B",
            "DevOps": "#8B5CF6",
            "Styling": "#EC4899",
            "Animation": "#06B6D4",
            "Framework": "#6366F1",
            "Runtime": "#14B8A6",
            "Markup": "#64748B",
            "State Management": "#84CC16",
            "Integration": "#F97316",
            "3D": "#6D28D9",
            "Design": "#D946EF"
        };
        return categoryColors[category] || color;
    };

    const categoryColor = getCategoryColor(tech.category);

    return (
        <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default"
            style={{
                backgroundColor: `${categoryColor}15`,
                color: categoryColor,
                border: `1px solid ${categoryColor}30`
            }}
            title={`${tech.name} - ${tech.category}`}
        >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryColor }} />
            {tech.name}
        </div>
    );
};

export default TechStackBadge;
